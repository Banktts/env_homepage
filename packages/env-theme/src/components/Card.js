import { styled } from "frontity";
import { FullImageView } from "./image";
import Link from "@frontity/components/link";
import HtmlProcessing from "../helpers/htmlProcessing";

export const CardTextOnImage = ({ desc, src, link }) => {
    return (
        <CardEffect>
            <Link link={link}>
                <Card className="card ">
                    <div className="card-image">
                        <TextOnImage>{desc}</TextOnImage>
                        <FullImageView src={src} alt={desc} />
                    </div>
                </Card>
            </Link>
        </CardEffect>

    )

}

export const CardWithContent = ({ src, title, link, date, content }) => {

    return src !== null ? (
        <CardEffect>
            <Link link={link}>
                <div className="card is-centered is-shadowless" >
                    <div className="card-image">
                        {src !== null && <figure className="image is-16by9 is-rounded">
                            <img className="has-ratio" src={src} alt={title} />
                        </figure>}

                    </div>
                    <div className="card-content">
                        <div className="card-media" style={{ height: "60px", textOverflow: "ellipsis" }}>
                            <div className="content">
                                {title !== undefined && <HtmlProcessing htmlText={`<h5>${title}</h5>`} />}
                                {date !== undefined && <h6 className="subtitle is-6 ">{date}</h6>}
                            </div>
                        </div>


                    </div>

                </div>
            </Link>
        </CardEffect>

    ) : (
        <CardEffect >
            <Link link={link}>
                <div className="card is-centered is-shadowless" style={{height:"100%"}} >
                    <div className="card-content">
                        <div className="card-media" >
                            <div className="content" >
                                {title !== undefined && <HtmlProcessing htmlText={`<h5>${title}</h5>`} />}
                                {date !== undefined && <h6 className="subtitle is-6 ">{date}</h6>}
                                {content !== undefined && <HtmlProcessing htmlText={content} />}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </CardEffect>
    )
}


const Card = styled.div`
  height: 274px;
  position: relative;
  overflow: hidden;

`


const CardEffect = styled.div`
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
  :hover {
    transform: scale(1.01);
    transition-duration: 0.5s;
  }
`


const TextOnImage = styled.h1`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  padding: 25px;
  background: linear-gradient(to bottom, rgba(255, 0, 0, 0) 0%, rgba(172, 23, 28, 0.8) 100%);
`
