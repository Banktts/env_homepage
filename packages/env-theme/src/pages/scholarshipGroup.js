import {connect} from "frontity";
import {Search, View} from "../components";
import HtmlProcessing from "../helpers/htmlProcessing";
import {Scholarship} from "../static/image";

const {useState} = require("react");

const ScholarshipGroup = ({state, actions}) => {
    const data = state.source.get(state.router.link)
    // console.log("data",data)
    const thaiData = state.source[data.thai.type][data.thai.id]
    const interData = state.source[data.inter.type][data.inter.id]
    const tabsList = ["Thai Student","International Student"]
    const [currentData,setCurrentData] = useState(thaiData)
    const [currentDataName,setCurrentDataName] = useState(tabsList[0])

    const handlePage = ({name})=>{
        switch (name){
            case "Thai Student":
                setCurrentData(thaiData)
                setCurrentDataName("Thai Student")
                break;
            case "International Student":
                setCurrentData(interData)
                setCurrentDataName("International Student")
                break;
            default:
                setCurrentData(thaiData)
                setCurrentDataName("Thai Student")
                break;
        }
    }

    return (
        <View>
            <Scholarship className="m-auto"/>
            <div className="my-6">

                <div className="tabs is-centered ">
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

                <HtmlProcessing htmlText={currentData.content.rendered} />


            </div>
        </View>

    )
}

export default connect(ScholarshipGroup)