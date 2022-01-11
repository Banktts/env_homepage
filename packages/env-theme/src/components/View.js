import React from "react";
import {styled} from "frontity";


export const View = ({children}) => {
    return (

        <ViewStyle className="container is-desktop  p-6">{children}</ViewStyle>


    )
}

export const ViewContent = ({children}) => {
    return (<ViewStyle className="container is-max-desktop has-background-white-bis p-6">{children}</ViewStyle>)
}

export const BackgroundView = ({children}) => {
    return (
        <BackgroundViewStyle className={"has-background-light"}>
            {children}
        </BackgroundViewStyle>
    )
}


const ViewStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  
  
  width: 100%;
  

`

const BackgroundViewStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
 

`