const Icon = ({icon, content}) => {
    return (
        <div>
            <span className="columns is-mobile is-gapless">
                <div className="column is-1 m-3 " >
                    {icon}
                </div>

                <div className="column is-11 m-3" >
                    {content}
                </div>
            </span>

        </div>
    )
}

export const DownloadFile = ({content}) => {
    return (
        <Icon
            icon={<i className="far fa-3x fa-file-pdf"></i>}
            content={content}

        />
    )
}

export const Address = ({content}) => {
    return (
        <Icon
            icon={<i className="fas fa-lg fa-address-book"></i>}
            content={content}

        />
    )
}

export const Mail = ({content}) => {
    return (
        <Icon
            icon={<i className="far fa-lg fa-envelope"></i>}
            content={content}

        />
    )
}

export const Tel = ({content}) => {
    return (
        <Icon
            icon={<i className="fas fa-lg fa-phone-alt"></i>}
            content={content}

        />
    )
}

export const Fax = ({content}) => {
    return (
        <Icon
            icon={<i className="fas fa-lg fa-fax"></i>}
            content={content}

        />
    )
}

export const Resume = ({content}) => {
    return (
        <Icon
            icon={<i className="far fa-lg fa-id-badge"></i>}
            content={content}

        />
    )
}