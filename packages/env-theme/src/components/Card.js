import {styled} from "frontity";
import {FullImageView} from "./image";


export const CardTextOnImage = ({desc, src}) => {
    return (
        <Card className="card ">
            <div className="card-image">
                <TextOnImage>{desc}</TextOnImage>
                <FullImageView src={src} alt={desc}/>
            </div>
        </Card>
    )

}

export const CardWithContent = ({desc, src}) => {
    return (
        <CardWithContentContainer className="card">
            <div className="card-image">
                <ImageContent className="image is-fullwidth" src={src}
                     alt={desc}/>
            </div>
            <CardContent className="card-content">
                <div className="content">
                    {desc}
                </div>
            </CardContent>
        </CardWithContentContainer>
    )
}


const Card = styled.div`
  height: 274px;
  max-width: 220px;
  position: relative;
  overflow: hidden;
  :hover{
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`

const CardContent = styled.div`
  min-height: 120px;
`

const ImageContent = styled.img`
  height: 300px;
`

const CardWithContentContainer = styled(Card)`
  max-width: 450px;
  height: 450px;
  margin-left: auto;
  margin-right: auto; 
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
