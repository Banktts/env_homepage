import {useEffect} from "react";
import Switch from "@frontity/components/switch";
import {htmlProcessing} from "./htmlProcessing";

export const getPostFromCategory = ({state, actions, params}) => {
    const dataCat = state.source.get(`/category/${params}`)
    return dataCat
}


export const FeaturedMedia = ({state, id}) => {
    const media = state.source.attachment[id];
    if (!media) return null;
    return (
        media.source_url
    );
};

export const CustomSwicth = ({children,data}) => {
    return(
        <Switch>
            {children}
            <div when={data.isFetching} />
            <div when={data.isError} />
        </Switch>
    )
}

export {htmlProcessing}
