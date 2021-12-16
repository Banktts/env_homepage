import React from "react";
import {styled} from "frontity";

export const FullImageView = ({src, alt}) => {
    return (
        <FullImage src={src} alt={alt}/>
    )

}

export const Image3by2 = ({src, alt}) => {
    return (
        <RoundImage className="image is-3by2">
            <img className="has-ratio" src={src} alt={alt}/>
        </RoundImage>
    )
}

const FullImage = styled.img`
  object-fit: fill;
  height: 274px;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const RoundImage = styled.figure`
  border-radius: 16px;
  overflow: hidden;
`