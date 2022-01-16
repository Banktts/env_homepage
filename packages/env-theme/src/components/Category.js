import React from "react";
import {connect} from "frontity";
import {Level, View} from "../components";
import List from "./list";
import {NextButton, PrevButton} from "./Button";


const Category = ({ state, actions }) => {
    const CatData = state.source.get(state.router.link)

    // console.log("Cat Data:", CatData, CatData.next)
    return (
        <View>

            <List when={CatData.isReady} data={CatData}>
                <p className="title is-spaced has-text-weight-bold">{state.source.category[CatData.id]?.name}</p>
            </List>


            <Level className={"my-3"} leftChildren={CatData.previous !== undefined ? <PrevButton link={CatData.previous} /> : null}
                   rightChildren={CatData.next !== undefined ? <NextButton link={CatData.next} /> : null} >
                <h4 className={"title is-4 has-text-grey"}>Page {CatData.page} of {CatData.totalPages} </h4>
            </Level>
        </View>

    )


}

export default connect(Category)