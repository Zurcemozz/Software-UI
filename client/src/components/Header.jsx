import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { sliderItems } from '../data';



const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
overflow: hidden;
position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f4865d;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    z-index: 2;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props => props.slideIndex * -100}vw);
transition: all 1s ease-in-out;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Img = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    padding: 50px;
    flex: 1;

`

const Title = styled.h1`
    font-size: 80px;
`
const Desc = styled.p`
    margin: 50px 20px;
    letter-spacing: 3px;
    font-size: 20px;
`
const Button = styled.button`
    background-color: #bb81db;
    padding: .8rem 2rem;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    &:active{
        transform: scale(.98);
    }
`



const Header = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) =>{
        
        if(direction === "left"){
            //si sliderIndex ay equal to zero, so if is Slider Index ay greater than Zero. mag minus one ka, pero dahil naka indicate sa else na ksi slider intex ay automatic na 2, autmatic sa left na mag miminus siya
            //ang inital value ni slideIndex ay 0, so if pinress ung left. ang mangyayari ay zero = zero, which ang condtion ay magiging 2 automatiuc kung hindi greater than 0 si slideIndex
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
            console.log(slideIndex)
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1  : 0)
            console.log(slideIndex)
        }
    }
    console.log(slideIndex);
    return (
        <Container>
            <Arrow direction="left" onClick={() =>handleClick('left')}>
                <ArrowBackIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex} > 
                {sliderItems.map((item) => (

                    <Slide bg={item.bg} key={item.id}> 
                    <ImgContainer>
                        <Img src={item.img}/>
                    </ImgContainer>

                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Link to="/products">
                        <Button>Shop  Now </Button>
                        </Link>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right"  onClick={() =>handleClick('right')} >
                <ArrowForwardIcon  />
            </Arrow>
        </Container>
    )
}

export default Header
