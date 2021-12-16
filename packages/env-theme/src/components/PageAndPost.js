import HtmlProcessing from "../helpers/htmlProcessing";
import {connect} from "frontity";
import {View,ViewContent} from ".";
import {dateTranslate, FeaturedMedia} from "../helpers";

const PageAndPost = ({state, actions}) => {

    const data = state.source.get(state.router.link)
    const rawData = state.source[data.type][data.id]
    console.log("Raw data:",rawData)
    console.log("data:",data)

    switch(true){
        case data.isPage :
            return (
                <View>
                    <div>
                        <HtmlProcessing htmlText={`<h4>${rawData?.title.rendered}</h4>`}/>
                        <HtmlProcessing htmlText={rawData.content.rendered}/>
                    </div>
                </View>

            )
        case data.isPost:
            const catName = state.source.category[rawData.categories].name
            const bannerImgSrc = FeaturedMedia({state: state, id: rawData.featured_media})
            console.log("Category:",state.source.category[rawData.categories].name)
            return (
                <ViewContent>
                    <div>
                        <h5 className="title is-5">{catName.toUpperCase()}</h5>
                        {bannerImgSrc !== undefined && <figure className="image is-16by9 is-mobile">
                            <img className="has-ratio" src={bannerImgSrc} alt={rawData?.title.rendered} />
                        </figure>}
                        <HtmlProcessing htmlText={`<h4>${rawData?.title.rendered}</h4>`}/>
                        <h6 className="subtitle is-6 ">{dateTranslate(rawData?.date)}</h6>
                        <HtmlProcessing htmlText={rawData.content.rendered}/>
                    </div>
                </ViewContent>

            )

    }



}

export default connect(PageAndPost)