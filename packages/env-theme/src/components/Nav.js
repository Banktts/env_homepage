import React from "react";
import {connect} from "frontity";

const DropDown = ({name,link}) => {
    return(
        <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-item" key={name} >
                {name}
            </a>

            <div className="navbar-dropdown" >
                <a className="navbar-item is-active">
                    Overview
                </a>
                <a className="navbar-item has-text-black">
                    Elements
                </a>
                <a className="navbar-item has-text-black">
                    Components
                </a>

            </div>
        </div>
    )
}

const Nav = ({state}) => {
    console.log("Nav", state.router.link)
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>
                    </a>
                    <span className="navbar-burger" data-target="navbarMenuHeroA">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">

                        {state.theme.menu.map(([name, link]) => {
                            // Check if the link matched the current page url
                            const isCurrentPage = state.router.link === link;
                            return (
                                <DropDown name={name}/>

                            );
                        })}
                        <span className="navbar-item">
                            <a className="button is-primary is-inverted">
                                <span className="icon">
                                    <i className="fab fa-github"></i>
                                </span>
                                <span>Download</span>
                            </a>
                        </span>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default connect(Nav);

