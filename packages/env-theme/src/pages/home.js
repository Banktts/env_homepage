import React from "react";
import {connect} from "frontity";

import {CarouselCard} from "../components";
import {CardTextOnImage, CardWithContent} from "../components/Card";
import {View} from "../components/View";
import {getPostFromCategory} from "../helpers";
import {Cover} from "../static/image";


const Home = ({state, actions}) => {
    const EventsData = getPostFromCategory({state: state, actions: actions, params: `events`})
    const itemEventsData = EventsData?.items
    return (

            <div>
                <div className="m-auto">
                    <Cover/>
                </div>

                <View>
                    <CarouselCard rawData={EventsData}
                                  name="News"
                                  number={8}
                                  bulmaStyle={"column is-one-quarter-desktop is-one-third-tablet is-half-mobile is-centered"}
                                  responsiveConfig={
                                      {
                                          isMobile: 2,
                                          isTablet: 3,
                                          isDesktop: 4
                                      }

                                  }>
                        <CardTextOnImage/>
                    </CarouselCard>
                    <CarouselCard rawData={EventsData}
                                  name="Event"
                                  number={8}
                                  bulmaStyle={"column is-two-third-desktop is-half-tablet is-centered"}
                                  responsiveConfig={
                                      {
                                          isMobile: 1,
                                          isTablet: 2,
                                          isDesktop: 2
                                      }

                                  }>
                        <CardWithContent/>
                    </CarouselCard>


                </View>
            </div>

    );
};

export default connect(Home);




