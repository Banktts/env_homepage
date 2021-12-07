import React from "react";
import {connect} from "frontity";
import {CardWithContent} from "../components/Card";
import {View} from "../components/View";
import {CustomSwicth, FeaturedMedia, getPostFromCategory, htmlProcessing} from "../helpers";

const PeopleList = ({state, data, children, libraries}) => {
    const Html2React = libraries.html2react.Component;
    console.log("state.source in people", state.source)
    return (
        <div>
            {children}
            <nav className="columns container is-fluid is-multiline is-mobile ">
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]
                    console.log(post)
                    const imgSrc = FeaturedMedia({state: state, id: post.featured_media})
                    const postRender = htmlProcessing({htmlText: post.content.rendered})
                    return (

                        <div className="column is-one-third-desktop is-one-third-tablet is-half-mobile "
                             key={post.id}>
                            <CardWithContent src={imgSrc} desc={""} title={post.title.rendered}
                                             link={`/people/pages/${item.id}`}/>


                        </div>


                    )
                })}
            </nav>
        </div>

    )
}


const People = ({state, actions, libraries}) => {
    const dataState = state.source.get(state.router.link)
    const CatData = getPostFromCategory({state: state, actions: actions, params: `people/${dataState.path}/`})
    return (
        <View>
            <CustomSwicth data={CatData}>
                <PeopleList when={CatData.isReady} data={CatData} state={state} libraries={libraries}>
                    <p className="title is-spaced has-text-weight-bold">{state.source.category[CatData.id]?.name}</p>
                </PeopleList>
            </CustomSwicth>
        </View>

    )


}

export default connect(People)