import React from "react";
import {styled} from "frontity";
import Phone from './phone.png'
import Mail from './message.png'
import Facebook from './facebook.png'
import Logo from '../image/LOGO.png'

const IconElement = ({type}) => {
    switch (type) {
        case "phone":
            return (
                <img src={Phone}/>
            )
        case "mail":
            return (
                <img src={Mail}/>
            )
        case "facebook":
            return (
                <img src={Facebook}/>
            )
        default:
            return (<div/>)
    }
}

export const Icon = ({type, handleClick}) => {
    return (
        <IconComponent className="icon">
            <IconElement type={type} onClick={handleClick}/>
        </IconComponent>
    )
}

const IconComponent = styled.span`
  margin: 5px;
`