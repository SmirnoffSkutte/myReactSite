import React, { useContext } from 'react';
import {Container,Row,Col,Image, Carousel} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartsGood from '../components/CartsGood';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    clearCart,
    getTotals,
    removeFromCart,
  } from "../cart/cartSlice";
import { useEffect } from 'react';
const CartPage=()=>{

   

    const cart=useSelector(state=>state.cart)

    console.log(cart)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getTotals())
    },[cart,dispatch])

    const deleteCart = () => {
        dispatch(clearCart());
      };

    const alertF=()=>{
        alert('Вы оформили заказ')
        dispatch(clearCart());
    }

    return(
        <div>
        <Header/>
                    {cart.cartItems.length === 0 ?(
                    <div>
                        <Container>
                        <h1 className='mt-5'>Корзина</h1>
                        <Row className='mt-5'>
                            <Col className='mt-5'>
                            <h3>Корзина пуста</h3>
                            <Link to='/'>
                            <h3 className='mt-5'>На главную</h3>
                            </Link>
                            </Col>
                        </Row>
                        </Container>
                        <div className='bottom-0'>
                           <Footer/>
                        </div>
                    </div>   
                    ):(<>
                     <Container>
                     <h1>Корзина</h1>
                    <Row >
                {/* <Col className='grey he1000' xs='4'></Col> */}
                <Col className='grey h1000' xs='12'>
                    <div className='cartFinal'>
                    <h2>Товары в корзине</h2>
                    <div className='cartInfo'><span></span><span>Товар</span><span>Цена</span><span>Кол-во</span><span>Итого</span></div>
                    <div className='cartGoods'>
                       {cart.cartItems.map(item => <CartsGood full_desc={item.full_desc} stones={item.stones} metal_id={item.metal_id} type_id={item.type_id} price={item.price} image={item.image} id={item.id} _id={item._id} desc={item.desc} cartQuantity={item.cartQuantity}  name={item.name} key={item.id}/>)}
                    </div>
                    <div className='itogo'><span className='clearCart mt-4 ' onClick={deleteCart}>Очистить корзину</span><span className='span_2'/><span/><span className='mt-4'>Итого:</span><span className='mt-4'>{cart.cartTotalAmount} ₽</span></div>
                    <div className='oform'><span></span><span/><span/><span></span><span className='mt-4 cartSubmit mb-4' onClick={alertF}>Оформить заказ </span></div>
                    </div>
                </Col>
                </Row>
                </Container>
                <div>
                        <Footer/>
                </div>
                    </>)}
                  
    
        </div>
        
    )

}

export default CartPage;