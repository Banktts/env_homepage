import chula_logo from "./chula-logo-text.png"
import cover from "./cover.jpg"
import {styled} from "frontity";
import scholarship from "./scholarship.jpg"
export const Logo = () => {
    return (
        <LogoStyle> <img src={chula_logo} /></LogoStyle>


    )
}


export const Cover = () =>{
    return(
        <img src={ cover} />
    )
}

export const Scholarship = ( ) => {
    return(
        <img src={ scholarship} />
    )
}
const LogoStyle = styled.figure`
 overflow: hidden;
  max-height: 4rem;
  
`
