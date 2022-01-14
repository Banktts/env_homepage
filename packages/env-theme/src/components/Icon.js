const CustomIcon = ({icon, content}) => {
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

const DownloadFile = ({content}) => {
    return (
        <CustomIcon
            icon={<i className="far fa-3x fa-file-pdf"></i>}
            content={content}

        />
    )
}

const Address = ({content}) => {
    return (
        <CustomIcon
            icon={<i className="fas fa-lg fa-address-book"></i>}
            content={content}

        />
    )
}

const Mail = ({content}) => {
    return (
        <CustomIcon
            icon={<i className="far fa-lg fa-envelope"></i>}
            content={content}

        />
    )
}

const Tel = ({content}) => {
    return (
        <CustomIcon
            icon={<i className="fas fa-lg fa-phone-alt"></i>}
            content={content}

        />
    )
}

 const Fax = ({content}) => {
    return (
        <CustomIcon
            icon={<i className="fas fa-lg fa-fax"></i>}
            content={content}

        />
    )
}

const Resume = ({content}) => {
    return (
        <CustomIcon
            icon={<i className="far fa-lg fa-id-badge"></i>}
            content={content}

        />
    )
}

 const Link = ({content}) => {
    return (
        <CustomIcon
            icon={<i className="fas fa-link"></i>}
            content={content}

        />
    )

}

export const Icon = {
    DownloadFile, Address, Mail, Tel, Fax, Resume,Link
}