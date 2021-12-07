import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`
margin:20px;`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    border:  ${props=>props.type === "filled" && "none"};
    background-color:  ${props=>props.type === "filled" ? "black": "transparent"};
    color:  ${props=>props.type === "filled" && "white"};
    cursor: pointer;
`
const TopTexts = styled.div`

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
`
const ProductDetail = styled.div`
flex: 2;
    display: flex;
`


const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductID = styled.span``
const ProductSize = styled.span`
    font-size: 16px ;
`
const PriceDetail = styled.div`
   flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`


const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount= styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200px;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`


const Summary = styled.div`
    flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryTitle = styled.h1`
    font-weight: 300;
    `
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.div`
      width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
    `

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>CART </Title>
                <Top>
                <TopButton> Contiunue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your  Wishlist (2)</TopText>
                </TopTexts>
                <TopButton type="filled"> Check Out Now </TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.ibb.co/LQz9xwS/217583322-337164201401105-7085131122206820791-n.png" />
                                <Details>
                                    <ProductName>
                                       <b>Product: </b> Chaeryeoung
                                    </ProductName>
                                    <ProductID>
                                       <b>ID: </b> Chaeryeoung
                                    </ProductID>
                                    <ProductSize>
                                       <b>Size: </b> Chaeryeoung
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount> 2 </ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice> $ 30 </ProductPrice>
                            </PriceDetail>
                        </Product>
                            <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.ibb.co/LQz9xwS/217583322-337164201401105-7085131122206820791-n.png" />
                                <Details>
                                    <ProductName>
                                       <b>Product: </b> Chaeryeoung
                                    </ProductName>
                                    <ProductID>
                                       <b>ID: </b> Chaeryeoung
                                    </ProductID>
                                    <ProductSize>
                                       <b>Size: </b> Chaeryeoung
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount> 2 </ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice> $ 30 </ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>         ORDER SUMMARY           </SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice> $ 80 </SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shopping</SummaryItemText>
                                <SummaryItemPrice> $ 5 </SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount Shopping</SummaryItemText>
                                <SummaryItemPrice> $ -5.90 </SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total" >
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice> $ -5.90 </SummaryItemPrice>
                            </SummaryItem>
                            <SummaryButton>CHECKOUT</SummaryButton>
   
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart
