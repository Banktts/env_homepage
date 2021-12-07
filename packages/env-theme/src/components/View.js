import React from "react";
import {styled} from "frontity";


export const View = ({children}) => {
    return (
        <ViewStyle className="container is-widescreen ">{children}</ViewStyle>
    )
}

const ViewStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 64px;
  margin: auto;
  width: 100%;

`