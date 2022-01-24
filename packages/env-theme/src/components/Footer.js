import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";


const FooterMenuList = ({ name, link }) => {
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

const FooterItem = ({ name, link }) => {

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
            return (<div />)
        }
    } else {
        return (
            <FooterMenuList name={name} link={link} />
        );

    }
}

const Footer = ({ state }) => {
    return (
        <footer className="footer"  >

            <nav className="columns is-multiline container is-fluid is-8" >
                <div className="column is-two-fifths">
                    <div>
                        <p className="heading is-6 has-text-white">CONTACT US</p>
                        <span className="icon-text">
                            <Link link={`tel:${state.theme.contactData.tel}`}>
                                <button className="button is-danger mx-2 is-medium "><span className="icon is-medium"><i
                                    className="fas fa-phone-alt " /></span></button>
                            </Link>
                            <Link link={`mailto:${state.theme.contactData.mail}`}>
                                <button className="button is-danger mx-2 is-medium "><span className="icon is-medium"><i
                                    className="fas fa-envelope " /></span></button>
                            </Link>

                            <Link link={`${state.theme.contactData.facebook}`}>
                                <button className="button is-danger mx-2 is-medium ">
                                    <span className="icon is-medium">
                                        <i className="fab fa-facebook-square" /></span></button>
                            </Link>
                        </span>
                        <span />
                        <div>

                            <text className="has-text-white">
                                Tel : {state.theme.contactData.tel}
                                <br/>
                                Mail : {state.theme.contactData.mail}
                                <br/>
                                <br/>
                                Department of Environmental Engineering,
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
                                <FooterItem key={`footer-item-${name}`} name={name} link={link} />

                            );
                        })}

                    </nav>
                </div>

            </nav>

        </footer>
    )
}

export default connect(Footer);

