import React,{useEffect} from "react";
import {connect} from "frontity";
import {CustomSwicth, getPostFromCategory} from "../helpers";
import {Grid, View} from "../components";
import {ListContent} from "./list/listContent";
import List from "./list";


const Category = ({state, actions}) => {
    const CatData = state.source.get(state.router.link)
    console.log("[Category]",CatData)
    return (
        <View>
            <CustomSwicth data={CatData}>
                <List when={CatData.isReady} data={CatData}>
                    <p className="title is-spaced has-text-weight-bold">{state.source.category[CatData.id]?.name}</p>
                </List>
            </CustomSwicth>
        </View>

    )


}

export default connect(Category)