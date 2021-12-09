
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
    return htmlText.replaceAll("</h1>","</h1><br/>").replaceAll("</h2>","</h2><br/>").replaceAll("</h3>","</h3><br/>").replaceAll("</h4>","</h4><br/>").replaceAll("</h5>","</h5><br/>").replaceAll("</h6>","</h6><br/>")
}

const address = ({htmlText}) => {
    return htmlText.replaceAll("<p><strong>Address</strong></p>","<span class=\"icon-text\">\n" +
        "  <span class=\"icon\">\n" +
        "    <i class=\"fas fa-address-book\"></i>\n" +
        "  </span>\n" +
        "  <span><p><strong>Address</strong></p></span>\n" +
        "</span>")
}

const mail = ({htmlText}) => {
    return htmlText.replaceAll("<p><strong>Mail</strong></p>","<span class=\"icon-text\">\n" +
        "  <span class=\"icon\">\n" +
        "    <i class=\"far fa-envelope\"></i>\n" +
        "  </span>\n" +
        "  <span><p><strong>Mail</strong></p></span>\n" +
        "</span>")
}

const tel = ({htmlText}) => {
    return htmlText.replaceAll("<p><strong>Tel</strong></p>","<span class=\"icon-text\">\n" +
        "  <span class=\"icon\">\n" +
        "    <i class=\"fas fa-phone-alt\"></i>\n" +
        "  </span>\n" +
        "  <span><p><strong>Tel</strong></p></span>\n" +
        "</span>")
}

const fax = ({htmlText}) => {
    return htmlText.replaceAll("<p><strong>Fax</strong></p>","<span class=\"icon-text\">\n" +
        "  <span class=\"icon\">\n" +
        "    <i class=\"fas fa-fax\"></i>\n" +
        "  </span>\n" +
        "  <span><p><strong>Fax</strong></p></span>\n" +
        "</span>")
}

const resume = ({htmlText}) => {
    return htmlText.replaceAll("<p><strong>Resume</strong></p>","<span class=\"icon-text\">\n" +
        "  <span class=\"icon\">\n" +
        "    <i class=\"far fa-id-badge\"></i>\n" +
        "  </span>\n" +
        "  <span><p><strong>Resume</strong></p></span>\n" +
        "</span>")
}

const publication = ({htmlText}) => {

}


export const htmlProcessing = ({htmlText}) => {
    console.log("html process", htmlText)
    htmlText = mediaText({htmlText: htmlText})
    htmlText = column({htmlText: htmlText})
    htmlText = title({htmlText: htmlText})
    htmlText = titleBreak({htmlText: htmlText})
    htmlText = address({htmlText:htmlText})
    htmlText = mail({htmlText:htmlText})
    htmlText = tel({htmlText:htmlText})
    htmlText = fax({htmlText:htmlText})
    console.log("html after process", htmlText)
    return htmlText


}