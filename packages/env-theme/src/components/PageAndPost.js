import HtmlProcessing from "../helpers/htmlProcessing";
import {connect} from "frontity";
import {View} from "./View";

const PageAndPost = ({state, actions, libraries}) => {
    const data = state.source.get(state.router.link)
    const rawData = state.source[data.type][data.id].content.rendered
    console.log("[Page & Post Component]", rawData)
    return (
        <View>
            <div>
                <HtmlProcessing htmlText={rawData}/>
            </div>
        </View>

    )


}

export default connect(PageAndPost)