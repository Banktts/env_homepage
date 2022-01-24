import React, {useState} from "react";
import {connect, styled} from "frontity";
import Link from "@frontity/components/link";
import {Logo} from "../static/image";


const Nav = ({state}) => {
    const [burgerBar, setBurgerBar] = useState("")


    const DropDown = ({name, link}) => {
        return (
            <div className="navbar-item has-dropdown is-hoverable has-shadow">
                <p className="navbar-item" key={name}>
                    {name}
                </p>

                <div className="navbar-dropdown">
                    {link.map(([name, link]) => {
                        return (
                            <div>
                                <Link link={link} onClick={handleBurger} className="navbar-item has-text-white is-hidden-desktop"
                                      key={`navbar-dropdown-item-${name}`}>
                                    {name}
                                </Link>

                                <Link link={link} className="navbar-item has-text-black is-hidden-touch"
                                      key={`navbar-dropdown-item-${name}`}>
                                    {name}
                                </Link>


                            </div>

                        );
                    })}
                </div>
            </div>
        )
    }



    const NavItem = ({name, link}) => {
        if (!Array.isArray(link)) {
            return (
                <Link link={link} onClick={handleBurger} className="navbar-item" key={`navbar-item-${name}`}>
                    {name}
                </Link>
            )
        } else {
            return (
                <DropDown name={name} link={link}/>
            );

        }
    }

    const handleBurger = () => {
        if (burgerBar == "") {
            setBurgerBar("is-active")
        } else {
            setBurgerBar("")
        }

    }
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">

                    <a className="navbar-item">
                        <Link link="/">
                            <div className="is-flex is-flex-direction-row mx-4">


                                    <Logo/>


                                <div className="my-5 mx-2 is-hidden-mobile">
                                    <p>Department of Environmental Engineering</p>
                                    <p>Faculty of Engineering, Chulalongkorn University</p>
                                </div>
                            </div>

                        </Link>

                    </a>


                    <span className={"navbar-burger " + burgerBar} data-target="navbarMenu" onClick={handleBurger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenu" className={"navbar-menu " + burgerBar}>
                    <div className="navbar-end">

                        {state.theme.menu.map(([name, link]) => {
                            return (
                                <NavItem key={`navbar-list-${name}`} name={name} link={link}/>

                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default connect(Nav);

