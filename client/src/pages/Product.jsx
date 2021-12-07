import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Img2 from '../imgs/Clothes/img2.jpg';
const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  margin: 50px;
`
const ImageContainer = styled.div`
  flex: 1;
  height: 90vh;
  
`
const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const ItemInfo = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 50px;
  letter-spacing: .5px;
  font-weight: 600;
`
const Desc = styled.p`
  margin: 20px 0;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterDisplay = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
`


const FilterSizeContainer = styled.div`
  display: flex;
  align-items: center;
 
`
const FilterSizeName = styled.span`
  font-size: 20px;
`
const FilterSize = styled.select`
  margin-left: 5px;
  font-size: 20px
`
const FilterSizeOption = styled.option``




const FilterColorContainer = styled.div`
  display: flex;
  align-items: center;

`
const FilterColorName = styled.span`
  font-size: 20px;
`
const FilterColor = styled.select`
  margin-left: 5px;
  font-size: 20px
`
const FilterColorOption = styled.option``


const AddContainer = styled.div`
  margin: 10px;
  display:flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px #000 solid;
`

const AmountContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const Amount = styled.span`
  font-size: 25px;
  border-radius: 5px;
  padding: 0 15px;
  margin: 0 20px;
  border: 1px #6b6b6b solid;
`

const Button = styled.button`
  padding: .8rem 2rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: #0dc6ff39;
  }
`

const cursor = {cursor: 'pointer'};


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <ImageContainer>
                <ItemImage src={Img2} />
                </ImageContainer>
                <ItemInfo>
                    <Title> White Club Shirt </Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum quae, eveniet veritatis ipsum error soluta dolores harum blanditiis voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, culpa voluptatem. Pariatur cum quos maiores error omnis accusantium odit quas. </Desc>
                    <Price> Php 69.69 </Price>

                  <FilterDisplay>
                    <FilterSizeContainer>
                          <FilterSizeName>Sizes: </FilterSizeName>
                          <FilterSize>
                              <FilterSizeOption>S</FilterSizeOption>
                              <FilterSizeOption>M</FilterSizeOption>
                              <FilterSizeOption>L</FilterSizeOption>
                              <FilterSizeOption>XL</FilterSizeOption>
                          </FilterSize>
                    </FilterSizeContainer>

                    <FilterColorContainer>
                          <FilterColorName>Color: </FilterColorName>
                          <FilterColor> 
                            <FilterColorOption>Black</FilterColorOption>
                            <FilterColorOption>White</FilterColorOption>
                            <FilterColorOption>Red</FilterColorOption>
                          </FilterColor>
                    </FilterColorContainer>
                  </FilterDisplay>

                  <AddContainer>
                    <AmountContainer>
                        <AddIcon style={cursor} />
                          <Amount> 1 </Amount>
                        <RemoveIcon  style={cursor} />
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                  </AddContainer>
                </ItemInfo>
            </Wrapper>
        </Container>
    )
}

export default Product
