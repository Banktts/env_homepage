import Switch from "@frontity/components/switch";
import {HtmlProcessing} from "./htmlProcessing";
import {PageAndPost} from "../components";

export const getPostFromCategory = ({state, actions, params}) => {
    return state.source.get(`/category/${params}`)
}


export const download = ({URL,name}) => {
    if(window !== undefined){
        window.location.href=URL
    }

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
            <PageAndPost when={data.isPost || data.isPage}/>
        </Switch>
    )
}

export const splitArray = (array, part) => {
    const tmp = [];
    for(let i = 0; i < array.length; i += part) {
        console.log("array splice:",array.slice(i, i + part))
        tmp.push(array.slice(i, i + part));
    }
    console.log("array return:",tmp)
    return tmp;
}


