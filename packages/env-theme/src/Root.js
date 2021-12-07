import React from "react";
import {connect,Global} from "frontity";
import {CustomSwicth} from "./helpers";
import bulmaStyle from './sass/myStyle.css';
import Nav from "./components/Nav";
import Home from './pages/home'
import Footer from "./components/Footer";
import People from "./pages/people";

const Root = ({state, actions}) => {

    const data = state.source.get(state.router.link)
    console.log("data: ",data)
    return (
        <div style={{minHeight: "100vh",display:"flex",flexDirection:"column"}}>
            <Global styles={bulmaStyle}/>
            <section className="hero is-danger">
                <Nav/>
            </section>

            <CustomSwicth data={data}>
                <Home when={data.isHome}/>
                <People when={data.isPeople}/>
            </CustomSwicth>

            <Footer/>


        </div>
    );
};


export default connect(Root)



