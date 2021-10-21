import React,{useState,cloneElement} from "react";
import {styled} from "frontity";



export const CarouselCard = ({data,n,children}) => {
    const [currentState,setCurrentState] = useState(0)
    const N = Math.ceil(data.length / n)
    return (
        <CarouselContainer>
            <ScrollShow className="columns is-mobile ">
                <Item data={data} currentState={currentState} nState={n}>
                    {children}
                </Item>

            </ScrollShow>
            <DotContainer className="level is-mobile is-centered" width={N*30}>
                <DotComponent N={N} currentState={currentState} setCurrentState={setCurrentState}/>
            </DotContainer>
        </CarouselContainer>

    )
}

const DotComponent = ({N,currentState,setCurrentState}) => {
    let res = []
    for (let i = 0; i < N; i++) {
        if(i===currentState){
            res.push(
                <div className="level-item" key={i}>
                    <DotActive/>
                </div>)
        }
        else{
            res.push(
                <div className="level-item" key={i}>
                    <Dot onClick={()=>setCurrentState(i)}/>
                </div>)
        }

    }
    return res
}

const Item = ({data,currentState,nState,children}) => {
    let res = []
    if (nState*currentState<data.length-nState){
        for (let i = 0; i < nState; i++) {
            res.push(
                <div className="column">
                    {cloneElement(children,{src:data[nState*currentState+i].image,desc:data[nState*currentState+i].content})}

                </div>
            )
        }
    }

    else {
        for (let i = data.length-nState; i < data.length; i++) {
            res.push(
                <div className="column">
                    {cloneElement(children,{src:data[i].image,desc:data[i].content})}
                </div>
            )
        }
    }

    console.log(res)
    return res
}

const CarouselContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  
`

const ScrollShow = styled.div`
  overflow-y: visible;
  max-width: 1024px;
  margin: 15px auto 15px auto;
`

const DotContainer = styled.section`
  width: ${props => (props.width ? props.width : 200)}px;
  margin-right: auto;
  margin-left: auto;
`

const Dot = styled.span`
  height: 15px;
  width: 15px;
  max-width: 15px;
  max-height: 15px;
  background: linear-gradient(to bottom, rgba(255, 0, 0, 0) 0%, rgba(172, 23, 28, 0.8) 80%);
  border-radius: 50%;
  display: inline-block;
  &:hover{
    background:  rgba(172, 23, 28, 0.8);
    transition-duration: 0.5s;
  }
`

const DotActive = styled(Dot)`
  background:  rgba(172, 23, 28, 0.8);
`