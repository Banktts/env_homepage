import HtmlProcessing from "../helpers/htmlProcessing";
import {connect} from "frontity";
import {View} from "./View";

const PageAndPost = ({state, actions, libraries}) => {
    const data = state.source.get(state.router.link)
    const rawData = state.source[data.type][data.id]
    console.log("Page and Post:",data,rawData)
    return (
        <View>
            <div>
                <HtmlProcessing htmlText={`<h2>${rawData?.title.rendered}</h2>`+rawData.content.rendered}/>
            </div>
        </View>

    )


}

export default connect(PageAndPost)