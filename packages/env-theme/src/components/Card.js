import {styled} from "frontity";
import {FullImageView} from "./image";
import Link from "@frontity/components/link";
import HtmlProcessing from "../helpers/htmlProcessing";
import {dateShortTranslate, dateTranslate} from "../helpers";

export const CardTextOnImage = ({src, title, link, date, content}) => {
    return (
        <CardEffect>
            <Link link={link}>
                <CardColor className="card">


                    <div className="card-content">
                        <h6 className="title is-6 has-text-white">{title}</h6></div>
                    <Date>
                        <p className="has-text-danger is-justify-content-left is-justify-content-flex-end">{dateShortTranslate(date)}</p>
                    </Date>



                </CardColor>
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
                                {date !== undefined && <h6 className="subtitle is-6 ">{dateTranslate(date)}</h6>}
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

const CardColor = styled(Card)`
  background: linear-gradient(to top, white 20%, rgba(172, 23, 28,1 ) 90%)
`

const TextOnImage = styled.h1`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 25px;
  background: linear-gradient(to top, black 20%, rgba(172, 23, 28,0.5 ) 80%)
`

const Date = styled.div`
  position: absolute;
  height: 3rem;
  right: 1rem;
  bottom: 0rem;
  
`
