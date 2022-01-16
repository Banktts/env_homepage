import {connect} from "frontity";
import {View} from "../components";


const Loading = ({state, actions}) => {
    return (
        <View>
            <div>
                {/*<h4 className="title is-4 ">{rawData?.title.rendered}</h4>*/}


                <progress className="progress is-danger" max="100">30%</progress>


            </div>
        </View>

    )
}

export default connect(Loading)