import React, {useEffect, useState} from "react";
import {connect} from "frontity";

import {CarouselCard} from "../components/Carousel";
import {CardTextOnImage, CardWithContent} from "../components/Card";
import {useMediaQuery} from 'react-responsive'
import {View} from "../components/View";

const data = [{
    image: "https://bulma.io/images/placeholders/1280x960.png",
    content: "hi1"
}, {
    image: "https://bulma.io/images/placeholders/1280x960.png",
    content: "hi2"
}, {
    image: "https://bulma.io/images/placeholders/1280x960.png",
    content: "hi3"
}, {
    image: "https://bulma.io/images/placeholders/1280x960.png",
    content: "hi4"
}, {
    image: "https://bulma.io/images/placeholders/1280x960.png",
    content: "hi5"
}, {
    image: "https://bulma.io/images/placeholders/1280x960.png",
    content: "hi6"
}, {
    image: "https://bulma.io/images/placeholders/1280x960.png",
    content: "hi7"
}, {
    image: "https://bulma.io/images/placeholders/1280x960.png",
    content: "hi8"
}, {
    image: "https://bulma.io/images/placeholders/1280x960.png",
    content: "hi9"
}, {
    image: "https://bulma.io/images/placeholders/1280x960.png",
    content: "hi10"
}, {
    image: "https://bulma.io/images/placeholders/1280x960.png",
    content: "hi11"
}, {
    image: "https://bulma.io/images/placeholders/1280x960.png",
    content: "hi12"
}, {
    image: "https://bulma.io/images/placeholders/1280x960.png",
    content: "hi13"
}, {image: "https://bulma.io/images/placeholders/1280x960.png", content: "hi14"}]


const Home= ({state, actions}) => {

    const [dynamicCarousel, SetDynamicCarousel] = useState({cardTextOnImage: 4, cardWithContent: 2})
    const isDesktop = useMediaQuery(
        {minDeviceWidth: 801}
    )

    const isTablet = useMediaQuery(
        {minDeviceWidth: 620, maxWidth: 800},
    )

    const isMobile = useMediaQuery(
        {maxWidth: 619}
    )

    useEffect(() => {
        // Update the document title using the browser API
        if (isMobile) {
            SetDynamicCarousel({cardTextOnImage: 2, cardWithContent: 1})
        } else if (isTablet) {
            SetDynamicCarousel({cardTextOnImage: 3, cardWithContent: 2})
        } else {
            SetDynamicCarousel({cardTextOnImage: 4, cardWithContent: 2})
        }
    }, [isDesktop, isMobile, isTablet, SetDynamicCarousel]);


    return (
        <>

            <div>
                <section className="hero is-danger is-medium">


                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <p className="title">
                                Title sfdsfsdfsd2
                            </p>
                            <p className="subtitle">
                                Subtitle
                            </p>
                        </div>
                    </div>


                </section>
                <View>
                    <p className="title is-spaced has-text-weight-bold">ประกาศสำคัญ</p>
                    <CarouselCard data={data} n={dynamicCarousel.cardTextOnImage}>
                        <CardTextOnImage></CardTextOnImage>
                    </CarouselCard>
                    <p className="title is-spaced is-family-sans-serif">Title 1</p>
                    <CarouselCard data={data} n={dynamicCarousel.cardWithContent}>
                        <CardWithContent></CardWithContent>
                    </CarouselCard>
                    <p className="title is-spaced is-family-sans-serif">Title 1</p>
                    <CarouselCard data={data} n={dynamicCarousel.cardTextOnImage}>
                        <CardTextOnImage></CardTextOnImage>
                    </CarouselCard>
                    <p className="title is-spaced is-family-sans-serif">Title 1</p>
                    <CarouselCard data={data} n={dynamicCarousel.cardWithContent}>
                        <CardWithContent></CardWithContent>
                    </CarouselCard>
                </View>


            </div>
        </>
    );
};

export default connect(Home);




