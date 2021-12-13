import React from "react";
import {connect} from "frontity";
import {CustomSwicth, getPostFromCategory} from "../helpers";
import {Grid, View} from "../components";


const People = ({state, actions}) => {
    const dataState = state.source.get(state.router.link)
    const CatData = getPostFromCategory({state: state, actions: actions, params: `${dataState.path}/`})
    console.log("Cat data:", CatData)
    return (
        <View>
            <CustomSwicth data={CatData}>
                <Grid when={CatData.isReady} data={CatData}>
                    <p className="title is-spaced has-text-weight-bold">{state.source.category[CatData.id]?.name}</p>
                </Grid>
            </CustomSwicth>
        </View>

    )


}

export default connect(People)