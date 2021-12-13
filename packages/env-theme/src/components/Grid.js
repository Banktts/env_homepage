import {FeaturedMedia} from "../helpers";
import {connect} from "frontity";
import {CardWithContent} from "./Card";
import React from "react";


const Grid = ({state,data,children}) =>{
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

export default connect(Grid)