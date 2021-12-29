import {FeaturedMedia} from "../helpers";
import {connect} from "frontity";
import {CardWithContent} from "./Card";
import React from "react";


const Grid = ({state,data,children}) =>{
    return (
        <div>
            {children}
            <div className="columns is-centered is-multiline">
                {data.items?.map((item) => {
                    const post = state.source[item.type][item.id]
                    const imgSrc = FeaturedMedia({state: state, id: post.featured_media})
                    return (
                        <div style={{margin:"auto"}} className="column is-one-third-desktop is-half-tablet is-four-fifths-mobile is-narrow"
                             key={post.id}>
                            <CardWithContent  src={imgSrc} desc={""} title={post.title.rendered}
                                             link={`${state.router.link}${item.id}`}/>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default connect(Grid)