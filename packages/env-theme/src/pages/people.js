import React from "react";
import {connect} from "frontity";
import {CustomSwicth, getPostFromCategory} from "../helpers";
import {Grid, View} from "../components";


const People = ({state, actions}) => {
    const dataState = state.source.get(state.router.link)

    return (
        <View>
            <CustomSwicth data={dataState}>
                <Grid when={dataState.isReady} data={dataState}>
                    <p className="title is-spaced has-text-weight-bold">{state.source.category[dataState.id]?.name}</p>
                </Grid>
            </CustomSwicth>
        </View>

    )


}

export default connect(People)