export const Search = ({value, handlerValue}) => {
    return (
        <div className="control has-icons-left ">
            <input className="input  mb-5 is-rounded" type="text" placeholder="Search" value={value}
                   autoFocus="autoFocus"
                   onChange={event => handlerValue(event.target.value)} id="search-bar"/>
            <span className="icon is-small is-left ml-1">
                <i className="fas fa-search"></i>
            </span>
        </div>
    )
}