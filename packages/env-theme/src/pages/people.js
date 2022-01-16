import React, {useEffect, useState} from "react";
import {connect} from "frontity";

import {Grid, Search, View} from "../components";


const People = ({state, actions}) => {
    useEffect(()=>{
        actions.source.fetch(state.router.link)
    })
    const dataState = state.source.get(state.router.link)
    const [search, setSearch] = useState("")
    // console.log("people:",dataState)
    return (
        <View>
            <p className="title is-spaced has-text-weight-bold">{state.source.category[dataState.id]?.name}</p>
            <Search value={search} handlerValue={setSearch}/>
            <Grid when={dataState.isReady} data={dataState} filter={{search:search}}/>


        </View>

    )


}

export default connect(People)