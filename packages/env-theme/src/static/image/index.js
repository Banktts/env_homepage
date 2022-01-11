import chula_logo from "./chula-logo-text.png"
import {styled} from "frontity";

export const Logo = () => {
    return (
        <LogoStyle> <img src={chula_logo} /></LogoStyle>


    )
}

const LogoStyle = styled.figure`
 overflow: hidden;
  max-height: 4rem;
  
`
