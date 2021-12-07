import React, { useState } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";


const DropDown = ({ name, link }) => {
    console.log("link", link)
    return (
        <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-item" key={name} >
                {name}
            </a>

            <div className="navbar-dropdown" >
                {link.map(([name, link]) => {
                    return (
                        <Link link={link} className="navbar-item has-text-black" key={name} >
                            {name}
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

const NavItem = ({ name, link }) => {
    if (!Array.isArray(link)) {
        return (
            <Link link={link} className="navbar-item" key={name} >
                {name}
            </Link>
        )
    }
    else {
        return (
            <DropDown name={name} link={link} />
        );

    }
}

const Nav = ({ state }) => {
    console.log("Nav", state.router.link)
    const [burgerBar, setBurgerBar] = useState("")
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
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
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
                                <NavItem name={name} link={link} />

                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default connect(Nav);

