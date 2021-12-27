import React, { useState } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";


const DropDown = ({ name, link }) => {
    return (
        <div className="navbar-item has-dropdown is-hoverable">
            <p className="navbar-item" key={name} >
                {name}
            </p>

            <div className="navbar-dropdown" >
                {link.map(([name, link]) => {
                    return (
                        <Link link={link} className="navbar-item has-text-black" key={`navbar-dropdown-item-${name}`} >
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
            <Link link={link} className="navbar-item" key={`navbar-item-${name}`} >
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
                                <NavItem key={`navbar-list-${name}`} name={name} link={link} />

                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default connect(Nav);

