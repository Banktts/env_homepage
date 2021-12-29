import {useState} from "react";
import {connect} from "frontity";
import {download, splitArray} from "./index";
import parse, {domToReact} from 'html-react-parser';
import {Icon} from "../components";


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
        <div>
            <div className="tabs is-centered">
                <ul>
                    {PageKey.map((element, i) => {
                        return (
                            <li key={`tab-publication-${i}`} className={i === page ? "is-active" : ""}
                                onClick={() => handlePage({key: i})}>
                                <a>{element}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
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


const HtmlProcessing = ({htmlText, filter}) => {


    const options = {
        replace: domNode => {
            console.log("domNode:", domNode)
            switch (true) {
                case domNode.attribs?.class?.includes("wp-block-columns") === true:
                    return (
                        <div className="columns is-multiline is-mobile ">
                            <br/>
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
                            <figure className="image is-square">
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
                    domNode.attribs.class = `title is-${domNode.name[1]} has-text-black`
                    break;
                case domNode.attribs?.class?.includes("is-publication-table") === true :
                    return (<Publication val={domNode?.children[0]?.children[0]?.children}/>)

                case domNode.attribs?.class?.includes("wp-block-file") === true:
                    return filter?.file === undefined  || domNode.children[0].children[0]?.data.toLowerCase().includes(filter.file.toLowerCase()) ? (
                            <div className="columns is-gapless is-narrow" id={`file-${domNode.children[0].children[0]?.data}`}>

                                    <div className="column is-10">
                                        <Icon.DownloadFile content={<h6
                                            className="title is-6" >{domNode.children[0].children[0]?.data}</h6>}/>
                                    </div>


                                    <div className="column is-2">
                                        <button className="button is-danger is-rounded" onClick={() => download({
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


            }
        }
    }


    const HtmlRender = parse(htmlText, options)


    return HtmlRender
}

export default connect(HtmlProcessing)
