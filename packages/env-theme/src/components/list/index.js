import {FeaturedMedia} from "../../helpers";
import {connect} from "frontity";
import React from "react";
import {ListContent} from "./listContent";
import { dateTranslate } from "../../helpers";


const List = ({state,data,children}) =>{
    return (
        <div>
            {children}
            <div >
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]
                    const imgSrc = FeaturedMedia({state: state, id: post.featured_media})
                    const date = dateTranslate(post.date)
                    return (
                        <div key={post.id}>
                            <ListContent  image={imgSrc} content={post.content.rendered} title={post.title.rendered}
                                              link={item.link} date={date}/>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default connect(List)