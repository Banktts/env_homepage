import HtmlProcessing from "../helpers/htmlProcessing";
import {connect} from "frontity";
import {View} from "./View";

const Post = ({state, actions, libraries}) => {
    const dataState = state.source.get(state.router.link)
    const postData = state.source.post[dataState.id].content.rendered
    console.log("dataState post:", dataState, "post data :", postData)
    return (
        <View>
            <div>
                <HtmlProcessing htmlText={postData}   />
            </div>
        </View>

    )


}

export default connect(Post)