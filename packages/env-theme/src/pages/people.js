import React from "react";
import {connect} from "frontity";
import {CardWithContent} from "../components/Card";
import {View} from "../components/View";
import {CustomSwicth, FeaturedMedia, getPostFromCategory} from "../helpers";
const PeopleList = ({state, data, children}) => {
    return (
        <div>
            {children}
            <nav className="columns container is-fluid is-multiline is-mobile ">
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]
                    console.log(post)
                    const imgSrc = FeaturedMedia({state: state, id: post.featured_media})
                    return (
                        <div className="column is-one-third-desktop is-one-third-tablet is-half-mobile "
                             key={post.id}>
                            <CardWithContent src={imgSrc} desc={""} title={post.title.rendered}
                                             link={`${state.router.link}${item.id}`}/>
                        </div>
                    )
                })}
            </nav>
        </div>

    )
}


const People = ({state, actions}) => {
    const dataState = state.source.get(state.router.link)
    const CatData = getPostFromCategory({state: state, actions: actions, params: `${dataState.path}/`})
    console.log("Cat data:", CatData)
    return (
        <View>
            <CustomSwicth data={CatData}>
                <PeopleList when={CatData.isReady} data={CatData} state={state}>
                    <p className="title is-spaced has-text-weight-bold">{state.source.category[CatData.id]?.name}</p>
                </PeopleList>
            </CustomSwicth>
        </View>

    )


}

export default connect(People)