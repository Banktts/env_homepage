import {connect} from "frontity";
import {Search, View} from "../components";
import HtmlProcessing from "../helpers/htmlProcessing";

const {useState} = require("react");

const FormDownload = ({state, actions}) => {
    const data = state.source.get(state.router.link)

    const rawData = state.source[data.type][data.id]
    const [search, setSearch] = useState("")
    console.log("data form",data )
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