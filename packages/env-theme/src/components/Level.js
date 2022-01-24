import React from "react";

export const Level = ({leftChildren,rightChildren,children}) => {
    return(
        <div>
            <nav className="columns is-mobile ">
                <div className="column has-text-left ">
                    {leftChildren}
                </div>

                <div className="column has-text-right ">
                    {rightChildren}
                </div>
            </nav>
            <div className={"has-text-centered"}>
                {children}
            </div>

        </div>
    )
}