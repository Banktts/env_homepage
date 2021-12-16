const CustomButton = ({children, Style}) => {
    return (
        <button className={`button is-danger ${Style}`}>{children}</button>
    )
}

export const SeeAllButton = ({href}) => {
    return (
        <CustomButton Style={"is-rounded"}>
            <span className="icon">
                <i className="fas fa-forward"></i>
            </span>
            <span>SEE ALL</span>
        </CustomButton>
    )
}

