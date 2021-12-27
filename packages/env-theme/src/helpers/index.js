import Switch from "@frontity/components/switch";
import {HtmlProcessing} from "./htmlProcessing";
import {Category, PageAndPost} from "../components";
import dateFormat from "dateformat";
import { useEffect } from "react";

export const getPostFromCategory = ({state, actions, params}) => {
    useEffect(()=>{
        actions.source.fetch(`/category/${params}`)
    },[])
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
            <PageAndPost when={data.isPost || data.isPage}/>
            <Category when={data.isCategory}/>
            <div when={data.isFetching}/>
            <div when={data.isError}/>

        </Switch>
    )
}

export const splitArray = (array, part) => {
    const tmp = [];
    for(let i = 0; i < array.length; i += part) {
        tmp.push(array.slice(i, i + part));
    }
    return tmp;
}

export const dateTranslate = (date) =>{
    if (date !== undefined){
        return dateFormat(date,"dddd, mmmm dS, yyyy")
    }

}




