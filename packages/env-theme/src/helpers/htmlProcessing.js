import {useState} from "react";
import {connect} from "frontity";
import {splitArray} from "./index";
import parse, {domToReact} from 'html-react-parser';


const Icon = ({icon, content}) => {
    return (
        <div>
            <br/>
            <span className="icon-text">
                <span className="icon">
                    {icon}
                </span>
                <div className="is-flex-direction-row">
                    {content}
                </div>
            </span>
            <br/>
        </div>
    )
}

const Address = ({content}) => {
    return (
        <Icon
            icon={<i className="fas fa-address-book"></i>}
            content={content}

        />
    )
}

const Mail = ({content}) => {
    return (
        <Icon
            icon={<i className="far fa-envelope"></i>}
            content={content}

        />
    )
}

const Tel = ({content}) => {
    return (
        <Icon
            icon={<i className="fas fa-phone-alt"></i>}
            content={content}

        />
    )
}

const Fax = ({content}) => {
    return (
        <Icon
            icon={<i className="fas fa-fax"></i>}
            content={content}

        />
    )
}

const Resume = ({content}) => {
    return (
        <Icon
            icon={<i className="far fa-id-badge"></i>}
            content={content}

        />
    )
}


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
                            <li className={i === page ? "is-active" : ""} onClick={() => handlePage({key: i})}>
                                <a>{element}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {content.map((val) => {
                return (
                    <div>
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
        console.log("domNode:",domNode)
        switch (true) {
            case domNode.attribs?.class?.includes("wp-block-columns") === true:
                return (
                    <div className="columns is-multiline is-mobile ">
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
                domNode.attribs.class = `title is-${domNode.name[1]}`
                break;
            case domNode.attribs?.class?.includes("is-publication-table") === true :
                return (<Publication val={domNode?.children[0]?.children[0]?.children}/>)

            case domNode.attribs?.id?.includes("wp-block-file--media") === true:
                return(
                    <div className="is-flex-direction-column">
                        <h2 className="title is-2">{domNode.children[0].data}</h2>
                        <p>{domNode.attribs.href}</p>
                    </div>
                )

            case domNode.attribs?.class?.includes("is-address") === true:
                return (
                    <Address content={domToReact(domNode.children)}/>
                )
            case domNode.attribs?.class?.includes("is-mail") === true:
                return (
                    <Mail content={domToReact(domNode.children)}/>
                )
            case domNode.attribs?.class?.includes("is-tel") === true:
                return (
                    <Tel content={domToReact(domNode.children)}/>
                )
            case domNode.attribs?.class?.includes("is-fax") === true:
                return (
                    <Fax content={domToReact(domNode.children)}/>
                )
            case domNode.attribs?.class?.includes("is-resume") === true:
                return (
                    <Resume content={domToReact(domNode.children)}/>
                )


        }
    }
}

const HtmlProcessing = ({htmlText}) => {
    const HtmlRender = parse(htmlText, options)

    return HtmlRender
}

export default connect(HtmlProcessing)
