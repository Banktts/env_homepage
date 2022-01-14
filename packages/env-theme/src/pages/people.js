import React, {useEffect} from "react";
import {connect} from "frontity";

import {Grid, View} from "../components";


const People = ({state, actions}) => {
    useEffect(()=>{
        actions.source.fetch(state.router.link)
    })
    const dataState = state.source.get(state.router.link)
    console.log("people:",dataState)
    return (
        <View>

                <Grid when={dataState.isReady} data={dataState}>
                    <p className="title is-spaced has-text-weight-bold">{state.source.category[dataState.id]?.name}</p>
                </Grid>

        </View>

    )


}

export default connect(People)