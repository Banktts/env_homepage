import Switch from "@frontity/components/switch";
import {htmlProcessing} from "./htmlProcessing";
import Post from "../components/Post";

export const getPostFromCategory = ({state, actions, params}) => {
    return state.source.get(`/category/${params}`)
}


export const FeaturedMedia = ({state, id}) => {
    const media = state.source.attachment[id];
    if (!media) return null;
    return (
        media.source_url
    );
};

export const CustomSwicth = ({children, data}) => {
    return (
        <Switch>
            {children}
            <div when={data.isFetching}/>
            <div when={data.isError}/>
            <Post when={data.isPost}/>
        </Switch>
    )
}

export {htmlProcessing}
