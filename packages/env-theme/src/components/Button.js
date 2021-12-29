import Link from "@frontity/components/link/index";

const CustomButton = ({children, Style}) => {
    return (
        <button className={`button is-danger ${Style}`}>{children}</button>
    )
}

export const SeeAllButton = ({link}) => {
    return (
        <Link link={link}>
            <CustomButton Style={"is-rounded"}>
            <span className="icon">
                <i className="fas fa-forward"></i>
            </span>
                <span>SEE ALL</span>
            </CustomButton>
        </Link>

    )
}

export const NextButton = ({link}) => {
    return (
        <Link link={link}>
            <CustomButton Style={"is-rounded"}>
                <span>Next</span>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </CustomButton>
        </Link>
    )
}

export const PrevButton = ({link}) => {
    return (
        <Link link={link}>
            <CustomButton Style={"is-rounded"}>
            <span className="icon">
                <i className="fas fa-arrow-left"></i>
            </span>
                <span>Prev</span>
            </CustomButton>
        </Link>
    )
}


