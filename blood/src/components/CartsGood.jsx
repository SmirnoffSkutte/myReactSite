import React from "react";
import { useState,useContext } from "react";
import {Col,Image} from 'react-bootstrap';
import { useDispatch} from "react-redux";
import { addToCart, decreaseCart, removeFromCart } from "../cart/cartSlice";


const CartsGood=(props)=>{

  const dispatch=useDispatch()

  const cartItem={
      "_id": props._id,
      "id": props.id,
      "name": props.name,
      "desc": props.desc,
      "price": props.price,
      "image": props.image,
      "full_desc": props.full_desc,
      "type_id":props.type_id ,
      "stones": props.stones,
      "metal_id":props.metal_id ,  
  }

  const likedItem={
    "_id": props._id,
    "id": props.id,
    "name": props.name,
    "desc": props.desc,
    "price": props.price,
    "image": props.image,
    "full_desc": props.full_desc,
    "type_id":props.type_id ,
    "stones": props.stones,
    "metal_id":props.metal_id ,  
}

  function increase(){
    dispatch(addToCart(cartItem))
  }


  function decrease(cartItem){
    dispatch(decreaseCart(cartItem))
  }

  const removeFromCartFunction = (cartItems) => {
    dispatch(removeFromCart(cartItem));
  };

  const total=props.price*props.cartQuantity


    return(
    <Col id='cartsGoodContainer' className='cartsGood dfc sb'>
      <div className="good" id='goodCol'>
        <Image className='cartsGoodImage' src={"http://localhost:5000/"+props.image}/>
        <div className="name_id">
          
          <h3>{props.name}</h3>

        </div>
        <div className='cartsGoodPrice'>{props.price} ₽</div>
        <div ><span className="am_it pointer" onClick={()=>decrease(cartItem)}>-</span><span className="am_it">{props.cartQuantity}</span><span className="am_it pointer" onClick={()=>increase(cartItem)}>+</span></div>
        <div className="cena">{props.cartQuantity*props.price} ₽
        <div className="deleteFromCart mb-2" onClick={()=>removeFromCartFunction(cartItem)}>Удалить</div>
        </div>
      </div>
        


    </Col>


    )
}

export default CartsGood;