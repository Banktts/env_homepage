import {styled} from "frontity";
import HtmlProcessing from "../../helpers/htmlProcessing";
import Link from "@frontity/components/link";
import {Image3by2} from "../image";
import {Text} from "../index";


export const ListContent = ({image, title, link, date, content}) => {
    return image !== null && image !== undefined ? (

        <div className={"my-4"}>

                <div className="">
                    <Image3by2 src={image} alt={title}/>
                </div>
                <div className="column">
                    {date !== undefined && <Text.Date date={date}/>}
                    {title !== undefined && <HtmlProcessing htmlText={`<h5>${title}</h5>`}/>}
                    <Content className="content">

                        {content !== undefined && <HtmlProcessing className={"has-text-black"} htmlText={content}/>}


                    </Content>
                    <Link link={link}>
                        <button className="button is-danger is-rounded is-small">See more</button>
                    </Link>
                </div>


            </div>


    ) : (

            <div>
                {date !== undefined && <Text.Date date={date}/>}
                {title !== undefined && <HtmlProcessing htmlText={`<h5>${title}</h5>`}/>}
                <Content className="content" >

                    {content !== undefined && <HtmlProcessing htmlText={content}/>}


                </Content>
                <Link link={link}>
                    <button className="button is-danger is-rounded is-small">See more</button>
                </Link>
            </div>

    )
}



const Content = styled.div`
  line-height: 2em;
  max-height: 10em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  overflow: hidden;
`


