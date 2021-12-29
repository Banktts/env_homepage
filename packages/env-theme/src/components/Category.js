import React, {useEffect} from "react";
import {connect} from "frontity";
import {CustomSwicth, getPostFromCategory} from "../helpers";
import {Grid, Level, View} from "../components";
import {ListContent} from "./list/listContent";
import List from "./list";
import Link from "@frontity/components/link/index";
import {NextButton, PrevButton} from "./Button";


const Category = ({state, actions}) => {
    const CatData = state.source.get(state.router.link)
    useEffect(() => {
        if (CatData.next) actions.source.fetch(CatData.next);
    }, []);
    console.log("Cat Data:", CatData, CatData.next)
    return (
        <View>
            <CustomSwicth data={CatData}>
                <List when={CatData.isReady} data={CatData}>
                    <p className="title is-spaced has-text-weight-bold">{state.source.category[CatData.id]?.name}</p>
                </List>

            </CustomSwicth>
            <Level leftChildren={CatData.previous !== undefined ? <PrevButton link={CatData.previous}/> : null}
                   rightChildren={CatData.next !== undefined ? <NextButton link={CatData.next}/>: null}/>
        </View>

    )


}

export default connect(Category)