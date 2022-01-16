import {connect} from "frontity";
import {View} from "../components";
import Link from "@frontity/components/link";

const PageNotFound = ({state, actions}) => {
    return (
        <View>
            <div className="has-text-grey has-text-centered my-auto">

                <i className="far fa-2x fa-frown has-text-grey-light m-2 icon is-large"></i>

                <h1 className="title is-1 has-text-grey ">404</h1>
                <h1 class Name="subtitle is-1 has-text-grey-light ">Page not found</h1>
                <Link link={"/"}>
                    <button className="button is-danger is-medium my-5">Go back to Home</button>
                </Link>


            </div>
        </View>

    )
}

export default connect(PageNotFound)