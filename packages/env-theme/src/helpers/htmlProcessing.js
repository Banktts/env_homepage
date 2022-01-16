import {useState} from "react";
import {connect} from "frontity";
import {download, splitArray} from "./index";
import parse, {domToReact} from 'html-react-parser';
import {Icon} from "../components";


const HtmlProcessing = ({htmlText, filter}) => {

    const Publication = ({val}) => {
        const N = val?.length
        const pageN = Math.ceil(N / 5)
        const [page, setPage] = useState(0)
        const dataSplice = splitArray(val, 5)
        const [content, setContent] = useState(dataSplice[0])
        const PageKey = [...Array(pageN).keys()].map((index) => {
            return index === 0 ? "NEW" : `PAGE ${index + 1}`
        })
        const handlePage = ({key}) => {
            setPage(key)
            setContent(dataSplice[key])
        }
        return (
            <div >
                <div className="columns is-centered is-mobile is-multiline   " >

                        {PageKey.map((element, i) => {
                            return (
                                <div className="column is-1-desktop is-one-quarter-mobile">
                                    <button  key={`tab-publication-${i}`} className={i === page ? "button is-small is-danger is-active" : "button is-small is-danger is-inverted "}
                                            onClick={() => handlePage({key: i})}>
                                        {element}
                                    </button>
                                </div>

                            )
                        })}

                </div>
                <hr/>
                {content.map((val, i) => {
                    return (
                        <div key={`publication-content-${i}`}>
                            {domToReact(val.children, options)}
                            <hr/>
                        </div>
                    )
                })}

            </div>
        )

    }
    const options = {
        replace: domNode => {
            // console.log("domNode:", domNode)
            switch (true) {
                case domNode.attribs?.class?.includes("wp-block-columns") === true:
                    return (
                        <div className="columns is-multiline is-tablet is-gapless ">
                            {domToReact(domNode.children, options)}
                        </div>
                    )
                case domNode.attribs?.class?.includes("wp-block-media-text alignwide is-stacked-on-mobile") === true:
                    return (
                        <div className="columns is-desktop">
                            {domToReact(domNode.children, options)}
                        </div>
                    )
                case domNode.attribs?.class?.includes("wp-block-media-text__media") === true:
                    return (
                        <div className="column">
                            <figure className="image is-16by9">
                                {domToReact(domNode.children, options)}
                            </figure>
                        </div>
                    )
                case domNode.attribs?.class?.includes("wp-block-media-text__content") === true:
                    return (
                        <div className="column">
                            {domToReact(domNode.children, options)}
                        </div>
                    )
                case domNode.attribs?.class?.includes("wp-block-column") === true:
                    return (
                        <div className="column">
                            {domToReact(domNode.children, options)}
                        </div>
                    )
                case  /h[1-6]/g.test(domNode?.name) :
                    domNode.attribs.class = `title is-${domNode.name[1]} has-text-black` + domNode.attribs.class
                    break;
                case domNode.attribs?.class?.includes("is-publication-table") === true :
                    return (<Publication val={domNode?.children[0]?.children[0]?.children}/>)

                case domNode.attribs?.class?.includes("wp-block-file") === true:
                    return filter?.file === undefined || domNode.children[0].children[0]?.data.toLowerCase().includes(filter.file.toLowerCase()) ? (
                        <div className="columns is-gapless is-narrow"
                             id={`file-${domNode.children[0].children[0]?.data}`}>

                            <div className="column is-10">
                                <Icon.DownloadFile content={<h6
                                    className="title is-6">{domNode.children[0].children[0]?.data}</h6>}/>
                            </div>


                            <div className="column is-2">
                                <button className="button is-danger is-rounded my-2" onClick={() => download({
                                    URL: domNode.children[0].attribs.href,
                                    name: domNode.children[0].children[0]?.data
                                })}>Download
                                </button>
                            </div>
                        </div>


                    ) : (
                        <div/>
                    )

                case domNode.attribs?.class?.includes("is-address") === true:
                    return (
                        <Icon.Address content={domToReact(domNode.children)}/>
                    )
                case domNode.attribs?.class?.includes("is-mail") === true:
                    return (
                        <Icon.Mail content={domToReact(domNode.children)}/>
                    )
                case domNode.attribs?.class?.includes("is-tel") === true:
                    return (
                        <Icon.Tel content={domToReact(domNode.children)}/>
                    )
                case domNode.attribs?.class?.includes("is-fax") === true:
                    return (
                        <Icon.Fax content={domToReact(domNode.children)}/>
                    )
                case domNode.attribs?.class?.includes("is-resume") === true:
                    return (
                        <Icon.Resume content={domToReact(domNode.children)}/>
                    )
                case domNode.attribs?.class?.includes("is-link") === true:
                    return (
                        <div className="columns  "
                             id={`file-${domNode.children[0].children[0]?.data}`}>

                            <div className="column is-10">
                                <Icon.Link content={domNode?.children[0]?.children[0]?.data}/>
                            </div>


                            <div className="column is-2 ">
                                <button className="button is-dark is-rounded mx-4 my-2" onClick={() => download({
                                    URL: domNode.children[0].attribs.href,
                                    name: domNode.children[0].children[0]?.data
                                })}>Link
                                </button>
                            </div>
                        </div>


                    )

                case domNode?.name === "p":
                    return (
                        <div className="my-5">
                            {domToReact(domNode.children, options)}
                        </div>
                    )


            }
        }
    }


    const HtmlRender = parse(htmlText, options)


    return (
        <div className="content">
            {HtmlRender}
        </div>
    )
}

export default connect(HtmlProcessing)
