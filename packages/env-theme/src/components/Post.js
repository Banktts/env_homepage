import {htmlProcessing} from "../helpers";
import {connect} from "frontity";
import {View} from "./View";

const Post = ({state, actions, libraries}) => {
    const Html2React = libraries.html2react.Component;
    const dataState = state.source.get(state.router.link)
    const postData = state.source.post[dataState.id].content.rendered
    const postRender = htmlProcessing({htmlText: postData})
    console.log("dataState post:", dataState, "post data :", postData)
    return (
        <View>
            <div>
                <Html2React
                    html={postRender}/>
            </div>
        </View>

    )


}

export default connect(Post)