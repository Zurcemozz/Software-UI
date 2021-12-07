import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import styled from 'styled-components';


const Info = styled.div`
opacity: 0;
height: 100%;
width: 100%;
position:  absolute;
z-index: 3;
display: flex;
align-items: center;
background-color: #00000021;
justify-content: center;
transition: all .5s ease;
`

const Container = styled.div`
flex: 1;
margin: 5px;
height: 350px;
min-width: 280px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5f5db;
position: relative;
&:hover ${Info}{
    opacity: 1;
}

`


const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`



const Image = styled.img`
  height: 75%;
  z-index: 2;
`



const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

const Product = ({item}) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartIcon />
                </Icon>
                <Icon>
                    <SavedSearchIcon />
                </Icon>
                <Icon>
                    <FavoriteBorderIcon />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
