import React, {useEffect} from "react";
import {connect,Global} from "frontity";
import {CustomSwicth} from "./helpers";
import bulmaStyle from './sass/myStyle.css';
import Nav from "./components/Nav";
import Home from './pages/home'
import Footer from "./components/Footer";
import People from "./pages/people";
import Source from "@fortawesome/fontawesome-free/js/all"
import {BackgroundView} from "./components";
const Root = ({state, actions}) => {

    const data = state.source.get(state.router.link)
    return (
        <BackgroundView >

            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Global styles={bulmaStyle}/>
            <script defer src={Source}></script>
            <section className="hero is-danger">
                <Nav/>
            </section>

            <CustomSwicth data={data}>
                <Home when={data.isHome}/>
                <People when={data.isPeople}/>
            </CustomSwicth>
            <div style={{alignContent:"flex-end"}}>
                <Footer/>
            </div>



        </BackgroundView>
    );
};


export default connect(Root)



