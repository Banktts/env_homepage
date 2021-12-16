import {styled} from "frontity";
import HtmlProcessing from "../../helpers/htmlProcessing";
import Link from "@frontity/components/link";
import {Image3by2} from "../image";
import {Text} from "../index";

export const ListContent = ({image, title, link, date, content}) => {
    console.log("[listContent]:", image)
    return image !== null && image !== undefined ? (
        <Link link={link}>
            <Container>
                <div className="columns is-mobile">
                    <div className="column is-one-quarter">
                        <Image3by2 src={image} alt={title}/>
                    </div>
                    <div className="column">
                        {date !== undefined && <Text.Date date={date}/>}
                        {title !== undefined && <HtmlProcessing htmlText={`<h5>${title}</h5>`}/>}
                        <Content className="content is-hidden-touch">

                            {content !== undefined && <HtmlProcessing htmlText={content}/>}


                        </Content>
                    </div>
                </div>

            </Container>
        </Link>

    ) : (
        <Link link={link}>
            <Container>
                {date !== undefined && <Text.Date date={date}/>}
                {title !== undefined && <HtmlProcessing htmlText={`<h5>${title}</h5>`}/>}
                <Content className="content" >

                    {content !== undefined && <HtmlProcessing htmlText={content}/>}


                </Content>
            </Container>
        </Link>
    )
}

const Container = styled.div`
  margin: 44px;
  
`

const Content = styled.div`
  line-height: 2em;
  max-height: 6em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`