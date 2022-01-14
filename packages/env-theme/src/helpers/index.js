import {HtmlProcessing} from "./htmlProcessing";
import dateFormat from "dateformat";
import { useEffect } from "react";

export const getPostFromCategory = ({state, actions, params}) => {
    let items = state.source.get(`/category/${params}`)
    return items
}


export const download = ({URL,name}) => {
    if(window !== undefined){
        window.location.href=URL
    }

}
export const FeaturedMedia = ({state, id}) => {
    const media = state.source.attachment[id];
    console.log("Feature media:",media)
    if (!media) return null;
    return (
        media.source_url
    );
};



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

export const dateShortTranslate = (date) => {
    if (date !== undefined){
        return dateFormat(date,"dd, mmmm")
    }
}




