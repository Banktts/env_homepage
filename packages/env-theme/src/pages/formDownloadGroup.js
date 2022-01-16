import {connect} from "frontity";
import {Search, View} from "../components";
import HtmlProcessing from "../helpers/htmlProcessing";

const {useState} = require("react");

const FormDownloadGroup = ({state, actions}) => {
    const data = state.source.get(state.router.link)
    // console.log("data",data)
    const masterData = state.source[data.master.type][data.master.id]
    const doctorData = state.source[data.doctor.type][data.doctor.id]
    const interData = state.source[data.inter.type][data.inter.id]
    const [search, setSearch] = useState("")
    const tabsList = ["Master","Doctorate","International Student"]
    const [currentData,setCurrentData] = useState(masterData)
    const [currentDataName,setCurrentDataName] = useState(tabsList[0])

    const handlePage = ({name})=>{
        switch (name){
            case "Master":
                setCurrentData(masterData)
                setCurrentDataName("Master")
                break;
            case "Doctorate":
                setCurrentData(doctorData)
                setCurrentDataName("Doctorate")
                break;
            case "International Student":
                setCurrentData(interData)
                setCurrentDataName("International Student")
                break;
            default:
                setCurrentData(masterData)
                setCurrentDataName("Master")
                break;
        }
    }

    return (
        <View>
            <div>
                <h4 className="title is-4 ">{data.title}</h4>
                <div className="tabs is-centered">
                    <ul>
                        {tabsList.map((name) => {
                            return (
                                <li key={`tab-thesis-${name}`} className={name === currentDataName ? "is-active" : ""}
                                    onClick={() => handlePage({name: name})}>
                                    <a>{name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Search value={search} handlerValue={setSearch}/>

                <HtmlProcessing htmlText={currentData.content.rendered} filter={{file: search}}/>


            </div>
        </View>

    )
}

export default connect(FormDownloadGroup)