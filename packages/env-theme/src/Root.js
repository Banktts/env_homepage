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
import FormDownload from "./pages/formDownload";
import FormDownloadGroup from "./pages/formDownloadGroup";
import ScholarshipGroup from "./pages/scholarshipGroup";
const Root = ({state, actions}) => {
    useEffect(()=>{
        actions.source.fetch(state.router.link)
    },[])
    const data = state.source.get(state.router.link)
    console.log("data:",data,data.isForm)
    return (
        <BackgroundView  >

            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Global styles={bulmaStyle}/>

            <section className="hero is-danger">
                <Nav/>
            </section>

            <CustomSwicth data={data} >
                <Home when={data.isHome}/>
                <People when={data.isPeople}/>
                <FormDownload when={data.isForm}/>
                <FormDownloadGroup when={data.isFormGroup}/>
                <ScholarshipGroup when={data.isScholarshipGroup}/>
            </CustomSwicth>
            <div className="is-justify-content-flex-end">
                <Footer/>
            </div>



        </BackgroundView>
    );
};


export default connect(Root)



