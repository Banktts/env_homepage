import React from "react";
import {connect} from "frontity";
import Link from "@frontity/components/link";
import {Icon} from "../static/icon";


const FooterMenuList = ({name, link}) => {
    console.log("link", link)
    return (
        <aside className="column is-one-third-desktop is-one-third-tablet is-half-mobile menu">
            <p className="menu-label has-text-white" key={`footer-header-dropdown-${name}`}>
                {name}
            </p>
            <ul className="menu-list">

                {link.map(([name, link]) => {
                    return (
                        <li key={`footer-dropdown-item-${name}`} >
                            <Link link={link} >
                                <p className="has-text-white is-spaced">{name}</p>
                            </Link>
                        </li>


                    );
                })}

            </ul>

        </aside>


    )
}

const FooterItem = ({name, link}) => {

    if (!Array.isArray(link)) {
        if (link !== "/") {
            return (
                <aside className="column is-one-third-desktop is-one-third-tablet is-half-mobile menu">
                    <Link link={link}>
                        <p className="menu-label has-text-white">
                            {name}
                        </p>
                    </Link>
                </aside>
            )
        } else {
            return (<div/>)
        }
    } else {
        return (
            <FooterMenuList name={name} link={link}/>
        );

    }
}

const Footer = ({state}) => {
    return (
        <footer className="footer"  >

            <nav className="columns is-multiline container is-fluid is-8" >
                <div className="column is-two-fifths">
                    <div>
                        <p className="heading is-6 has-text-white">CONTACT US</p>
                        <span className="icon-text">
                                <Icon type="phone"/>
                                <Icon type="mail"/>
                                 <Icon type="facebook"/>
                                </span>
                        <span/>
                        <div>
                            <text className="has-text-white">Department of Environmental Engineering,
                                Faculty of Engineering, Chulalongkorn University
                                Phayathai Rd., Wangmai Pratumwan, Bangkok 10330,
                                THAILAND


                            </text>
                        </div>

                    </div>
                </div>
                <div className="column is-three-fifths">

                    <nav className="columns container is-mobile is-multiline ">
                        {state.theme.menu.map(([name, link]) => {

                            return (
                                <FooterItem key={`footer-item-${name}`} name={name} link={link}/>

                            );
                        })}

                    </nav>
                </div>

            </nav>

        </footer>
    )
}

export default connect(Footer);

