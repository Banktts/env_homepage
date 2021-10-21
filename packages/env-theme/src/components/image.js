import React from "react";
import {styled} from "frontity";

export const FullImageView = ({src, alt}) => {
    return (
        <FullImage src={src} alt={alt}/>
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