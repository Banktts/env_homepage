import React from "react";
import {styled} from "frontity";


export const View = ({children}) => {
    return (

        <ViewStyle className="container is-desktop">{children}</ViewStyle>


    )
}

export const ViewContent = ({children}) => {
    return (<ViewStyle className="container is-max-desktop">{children}</ViewStyle>)
}

export const BackgroundView = ({children}) => {
    return (
        <BackgroundViewStyle>
            {children}
        </BackgroundViewStyle>
    )
}


const ViewStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 14px;
  margin: 50px auto;
  width: 100%;
  background: #f7f7f7;

`

const BackgroundViewStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: #f7f7f7;

`