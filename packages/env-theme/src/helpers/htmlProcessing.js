import {useState} from "react";
import {connect} from "frontity";
import {splitArray} from "./index";



const mediaText = ({htmlText}) => {
    return htmlText.replaceAll("<div class=\"wp-block-media-text alignwide is-stacked-on-mobile\">", "<div class=\"columns is-desktop\">").replaceAll("<figure class=\"wp-block-media-text__media\">", "<div class=\"column\"> <figure class=\"image is-square\">").replaceAll("</figure>", "</figure></div>").replaceAll("<div class=\"wp-block-media-text__content\">", "<div class=\"column\">")
}


const column = ({htmlText}) => {
    return htmlText.replaceAll("<div class=\"wp-block-columns\">", "<br/><div class=\"columns is-multiline is-mobile\">").replaceAll("<div class=\"wp-block-column\">", "<div class=\"column\">")
}

const title = ({htmlText}) => {
    return htmlText.replaceAll("<h1", "<h1 class=\"title is-1\"").replaceAll("<h2", "<h2 class=\"title is-2\"").replaceAll("<h3", "<h3 class=\"title is-3\"").replaceAll("<h4", "<h4 class=\"title is-4\"").replaceAll("<h5", "<h5 class=\"title is-5\"").replaceAll("<h6", "<h6 class=\"title is-6\"")
}

const titleBreak = ({htmlText}) => {
    return htmlText.replaceAll("</h1>", "</h1><br/>").replaceAll("</h2>", "</h2><br/>").replaceAll("</h3>", "</h3><br/>").replaceAll("</h4>", "</h4><br/>").replaceAll("</h5>", "</h5><br/>").replaceAll("</h6>", "</h6><br/>")
}

const address = ({htmlText}) => {
    return htmlText.replaceAll("<p><strong>Address</strong></p>", "<span class=\"icon-text\">\n" +
        "  <span class=\"icon\">\n" +
        "    <i class=\"fas fa-address-book\"></i>\n" +
        "  </span>\n" +
        "  <span><p><strong>Address</strong></p></span>\n" +
        "</span>")
}

const mail = ({htmlText}) => {
    return htmlText.replaceAll("<p><strong>Mail</strong></p>", "<span class=\"icon-text\">\n" +
        "  <span class=\"icon\">\n" +
        "    <i class=\"far fa-envelope\"></i>\n" +
        "  </span>\n" +
        "  <span><p><strong>Mail</strong></p></span>\n" +
        "</span>")
}

const tel = ({htmlText}) => {
    return htmlText.replaceAll("<p><strong>Tel</strong></p>", "<span class=\"icon-text\">\n" +
        "  <span class=\"icon\">\n" +
        "    <i class=\"fas fa-phone-alt\"></i>\n" +
        "  </span>\n" +
        "  <span><p><strong>Tel</strong></p></span>\n" +
        "</span>")
}

const fax = ({htmlText}) => {
    return htmlText.replaceAll("<p><strong>Fax</strong></p>", "<span class=\"icon-text\">\n" +
        "  <span class=\"icon\">\n" +
        "    <i class=\"fas fa-fax\"></i>\n" +
        "  </span>\n" +
        "  <span><p><strong>Fax</strong></p></span>\n" +
        "</span>")
}

const resume = ({htmlText}) => {
    return htmlText.replaceAll("<p><strong>Resume</strong></p>", "<span class=\"icon-text\">\n" +
        "  <span class=\"icon\">\n" +
        "    <i class=\"far fa-id-badge\"></i>\n" +
        "  </span>\n" +
        "  <span><p><strong>Resume</strong></p></span>\n" +
        "</span>")
}

const singleTableWithTabsRender = ({val}) => {
    console.log("table render process")
    const N = Math.ceil(val.length / 5)
    val = val.map((val) => {
        return val + "<hr/>"
    })
    const [page, setPage] = useState(0)
    const dataSplice = splitArray(val,5)

    const [content, setContent] = useState(dataSplice[0])
    console.log("dataSplice :",dataSplice)
    console.log("initial content:",content)
    const PageKey = [...Array(N).keys()].map((index) => {
        return index === 0 ? "NEW" : `PAGE ${index + 1}`
    })


    const handlePage = ({key}) => {
        setPage(key)
        setContent(dataSplice[key])
    }

    return (
        <div>
            <span><p><strong>Publication</strong></p></span>
            <div className="tabs is-centered">
                <ul>
                    {PageKey.map((element, i) => {
                        return (
                            <li className={i === page ? "is-active" : ""} onClick={() => handlePage({key:i})}><a>{element}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {content.map((val)=>{
                return <div dangerouslySetInnerHTML={{__html: val}} />
            })}
        </div>
    )

}

const publication = ({htmlText}) => {


    const tables = htmlText.match(/<table[^>]*>[^~]*?<\/table>/g).map((val) => {
        return val.replaceAll(/<\/?table>/g, "").replaceAll(/<\/?tbody>/g, "")
    })
    return tables.map((i) => {
            return singleTableWithTabsRender({val: i.split(/<\/?td><\/?tr><\/?tr><\/?td>|<\/?tr><\/?td>|<\/?td><\/?tr>/g).filter(e => e)})

        }
    )

}


const HtmlProcessing = ({htmlText,libraries}) => {
    const Html2React = libraries?.html2react.Component;

    const publicationRegEx = /(<p><strong>\s*Publication\s*<\/strong>\s*<\/p>[^~]*?<figure[^>]*><table>[^~]*?<\/table><\/figure>)/g


    const allRegEx = publicationRegEx

    htmlText = mediaText({htmlText: htmlText})
    htmlText = column({htmlText: htmlText})
    htmlText = title({htmlText: htmlText})
    htmlText = titleBreak({htmlText: htmlText})
    htmlText = address({htmlText: htmlText})
    htmlText = mail({htmlText: htmlText})
    htmlText = tel({htmlText: htmlText})
    htmlText = fax({htmlText: htmlText})
    // htmlText = publication({htmlText: htmlText})
    console.log("html after process", htmlText)

    const splitBetweenHtmlAndComponent =  htmlText.split(allRegEx)
    console.log("split:",splitBetweenHtmlAndComponent)
    const Render = splitBetweenHtmlAndComponent.map((val)=> {
       if (val.match(publicationRegEx)) {
           return publication({htmlText:val})
       }else{
           return <Html2React html={val}/>
       }
    })

    console.log("Render:",Render)

    return Render
}

export default connect(HtmlProcessing)
