import React, { cloneElement, useEffect, useState } from "react";
import { connect, styled } from "frontity";
import SwipeableViews from 'react-swipeable-views';
import { useMediaQuery } from 'react-responsive'
import { FeaturedMedia, splitArray } from "../helpers";
import { Level, SeeAllButton } from "./index";

const CarouselCard = ({ state, name, rawData, number, children, bulmaStyle, responsiveConfig }) => {

    let data = rawData?.items?.length !== undefined ? rawData?.items.slice(0, number) : []
    const [content, setContent] = useState(splitArray(data, responsiveConfig.isDesktop))
    const [numberOfDot, setNumberOfDot] = useState(Math.ceil(data?.length / responsiveConfig.isDesktop))
    const [index, setIndex] = useState(0)
    const isDesktop = useMediaQuery(
        { minDeviceWidth: state.theme.breakPoint.isDesktop.minWidth }
    )

    const isTablet = useMediaQuery(
        {
            minDeviceWidth: state.theme.breakPoint.isTablet?.minWidth,
            maxWidth: state.theme.breakPoint.isTablet?.maxWidth
        },
    )

    const isMobile = useMediaQuery(
        { maxWidth: state.theme.breakPoint.isMobile.maxWidth }
    )

    useEffect(() => {

        switch (true) {
            case isMobile === true:
                setContent(splitArray(data, responsiveConfig.isMobile))
                setNumberOfDot(Math.ceil(data?.length / responsiveConfig.isMobile))
                break;
            case isTablet === true:
                setContent(splitArray(data, responsiveConfig.isTablet))
                setNumberOfDot(Math.ceil(data?.length / responsiveConfig.isTablet))
                break;
            default:
                setContent(splitArray(data, responsiveConfig.isDesktop))
                setNumberOfDot(Math.ceil(data?.length / responsiveConfig.isDesktop))
                break;

        }

    }, [isDesktop, isMobile, isTablet])

    const handleChangeIndex = (val) => {

        setIndex(val)
    }
    // console.log("content:",content)
    return (
        <CarouselContainer>
            <Level leftChildren={<h3 className="title is-3">{name}</h3>}
                rightChildren={<SeeAllButton link={rawData.route} />} />


            <ScrollShow>
                {content.length !== 0 ? <SwipeableViews enableMouseEvents index={index} onChangeIndex={(i) => handleChangeIndex(i)}
                    resistance
                    slideStyle={{ slideContainer: { padding: "0 20px" } }}>
                    {content.map((data, i) => {
                        return (
                            <section key={`page-${i}`} className="columns is-mobile is-centered"
                                style={{ margin: "5px" }}>
                                {data.map((item) => {
                                    const post = state.source[item.type][item.id]
                                    const imgSrc = FeaturedMedia({ state: state, id: post.featured_media })

                                    return (

                                        <div key={`event-post-${post.id}`} className={bulmaStyle}>
                                            {cloneElement(children, {
                                                src: imgSrc,
                                                content: post.content.rendered,
                                                title: post.title.rendered,
                                                link: item.link,
                                                date: post.date
                                            })}
                                        </div>

                                    )
                                })}
                            </section>

                        )
                    })}
                </SwipeableViews> : <div className="has-text-grey has-text-centered my-auto">

                    <i className="far fa-2x fa-folder-open has-text-grey-light m-2 icon is-large"></i>

                    <h3 className="title is-3 has-text-grey-light ">Empty Data</h3>

                </div>}


            </ScrollShow>



            <DotContainer className="columns is-mobile is-centered" width={numberOfDot * 15}>
                {[...Array(numberOfDot).keys()].map((val) => {

                    return val === index ? (
                        <div className="column" key={`dot-${val}`}>
                            <DotActive />
                        </div>)
                        : (
                            <div className="column" key={`dot-active-${val}`}>
                                <Dot onClick={() => handleChangeIndex(val)} />
                            </div>
                        )
                })}
            </DotContainer>


        </CarouselContainer>

    )


}

export default connect(CarouselCard)


const CarouselContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

`

const ScrollShow = styled.div`
  margin: 15px auto 15px auto;
`

const DotContainer = styled.section`
  width: ${props => (props.width ? props.width : 200)}px;
  margin-right: auto;
  margin-left: auto;
`

const Dot = styled.span`
  height: 15px;
  width: 15px;
  max-width: 15px;
  max-height: 15px;
  background: linear-gradient(to bottom, rgba(255, 0, 0, 0) 0%, rgba(172, 23, 28, 0.8) 80%);
  border-radius: 50%;
  display: inline-block;

  &:hover {
    background: rgba(172, 23, 28, 0.8);
    transition-duration: 0.5s;
  }
`

const DotActive = styled(Dot)`
  background: rgba(172, 23, 28, 0.8);
`