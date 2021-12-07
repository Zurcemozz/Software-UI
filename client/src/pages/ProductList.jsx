import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const ChoicesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 25px;
`
const Color = styled.div`
   display: flex;

    margin: 20px;
`


const SortByColor = styled.span`
    font-size: 20px;
    margin: 0 5px;
`

const Select = styled.select`
padding: 5px 5px;

`

const Option = styled.option`

`

const Price = styled.div`
   margin: 20px;

`
const Sorting = styled.span`
    font-size: 20px;
    margin: 0 5px;
`

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Title>Clothes</Title>
                <ChoicesContainer>
                    <Color> 
                    <SortByColor> Filtered By:  </SortByColor>

                            <Select>
                                <Option disable selected > White </Option>
                                <Option> Black </Option>
                                <Option> Orange </Option>
                                <Option> Green </Option>
                            </Select>
                        
                     </Color>



                     <Price> 
                        <Sorting> Filtered by Price:  </Sorting>
                            <Select>
                                <Option disable selected > Lowest </Option>
                                <Option> Highest </Option>
                            </Select>
                     </Price>
                    
                </ChoicesContainer>
                <Products />
        </Container>
    )
}

export default ProductList
