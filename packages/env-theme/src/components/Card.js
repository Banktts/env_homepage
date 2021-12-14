import { styled } from "frontity";
import { FullImageView } from "./image";
import Link from "@frontity/components/link";

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

export const CardWithContent = ({ desc, src, title, link }) => {
  return (
    <CardEffect>
      <Link link={link}>
        <div className="card is-shadowless is-centered">
          <div className="card-image">
            <figure className="image is-4by3">
              <img className="imageis-4by3" src={src} alt={desc} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content ">
                <p className="title is-6 has-text-black ">{title}</p>
              </div>
            </div>

            <div className="content">
              {desc}
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
:hover{
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
