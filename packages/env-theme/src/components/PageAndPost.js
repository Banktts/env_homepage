import HtmlProcessing from "../helpers/htmlProcessing";
import {connect} from "frontity";
import {View} from "./View";
import {findDOMNode} from "react-dom";
import {useEffect, useRef, useState} from "react";
import {renderToNodeStream} from "react-dom/server";


const PageAndPost = ({state, actions, libraries}) => {
    const [testD,setTestD] = useState()
    const data = state.source.get(state.router.link)
    const rawData = state.source[data.type][data.id].content.rendered
    rawData.replace(testD?.item(0).outerHTML,"")
    console.log("[Page & Post Component]")
    return (
        <View>
            <div>
                <HtmlProcessing htmlText={rawData}/>
            </div>
        </View>

    )


}

export default connect(PageAndPost)