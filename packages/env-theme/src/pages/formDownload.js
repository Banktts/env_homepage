import {connect} from "frontity";
import {Search, View} from "../components";
import HtmlProcessing from "../helpers/htmlProcessing";

const {useState} = require("react");

const FormDownload = ({state, actions}) => {
    const data = state.source.get(state.router.link)
    const formData  = state.source.get(data.endpoint)
    const rawData = state.source[formData.type][formData.id]
    const [search, setSearch] = useState("")
    return (
        <View>
            <div>
                <h4 className="title is-4 ">{rawData?.title.rendered}</h4>
                <Search value={search} handlerValue={setSearch}/>

                <HtmlProcessing htmlText={rawData.content.rendered} filter={{file: search}}/>


            </div>
        </View>

    )
}

export default connect(FormDownload)