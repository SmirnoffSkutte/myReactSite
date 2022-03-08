import React, { Component } from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import Menu from './BurgerMenu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import {
  clearCart,
  getTotals,
  removeFromCart,
} from "../cart/cartSlice";
import {
  addToLiked
} from "../liked/likedSlice";
export default function Header(){

  const dispatch=useDispatch()
  const {cartTotalQuantity}=useSelector(state=>state.cart)
  const {likedItems}=useSelector(state=>state.liked)
  const cart=useSelector(state=>state.cart)

  let likedQuantity=0
  likedQuantity=likedItems.length
  // (JSON.parse(localStorage.getItem('favorites'))).length

  useEffect(()=>{
    dispatch(getTotals())
    
  },[cart,dispatch])
  
    return (
    <div className='sticky'>
        <Row className='he60 header'>  
                <Menu></Menu>
                <Col className='grey dfc justify-content-center paddingNone'xs='6'><Link to='/' ><Image className='pointer' src='/img/svg/Logo.svg'></Image></Link></Col>
                <Col className='grey dfc justify-content-center paddingNone'xs='3'>
                  <Link to='/catalogePage'><Image className='pointer' src='/img/svg/Search.svg'/></Link>
  
                  <div className='df'>
                    <Link to='/likedPage' ><div className='pointer likedImage'><div className='cartCount'>{likedQuantity}</div></div></Link>
                  </div>

                  <div className='df'>
                    <Link to='/cart' ><div className='pointer cartImage'><div className='cartCount'>{cartTotalQuantity}</div></div></Link>
                  </div>

                  <Link to='/adminPage'><div className='pointer adminImage'/></Link>
                  
                  
                </Col>
               
        </Row>

    </div>
    )
  }

