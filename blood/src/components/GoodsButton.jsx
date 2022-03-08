import React from "react";
import { useState,useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { addToCart} from "../cart/cartSlice";
import {
    addToLiked
  } from "../liked/likedSlice";


const GoodsButton = (props) => {

    useEffect(()=>{
        isLiked()
    })

    const dispatch=useDispatch()

    const addingToCart=(props)=>{
        dispatch(addToCart(props))
    }

    const [isLikedThis,setLikedThis]=useState(false)
    
    const [isHoveredThis,setHoveredThis]=useState(false)

    const [isHoveredBucket,setHoveredBucket]=useState(false)


    const toggleHoveredOn = () => {
        setHoveredThis(true)
    }

    const toggleHoveredOff = () => {
        setHoveredThis(false)
    }

    const isLiked=()=>{
        let check = (JSON.parse(localStorage.getItem('favorites')) || []).some(el=>el._id===props._id)
        if(check){
            setLikedThis(true)
        }
        else{
            setLikedThis(false)
        }
        
    }
   
    const hoveredBucketOn = () => {
        setHoveredBucket(true)
    }

    const hoveredBucketOff = () => {
        setHoveredBucket(false)
    }

    return (
        
            <div id={props.id} className={isHoveredThis ? "goodsButton goodsBorder" : "goodsButton"} onPointerEnter={toggleHoveredOn}  onPointerLeave={toggleHoveredOff}>
        <div className="goods_img">
           <Link to={`/goodsPage/${props._id}`}>
           <div className="back" style={{
          backgroundImage: `url(http://localhost:5000/${props.image})`}} >
              
                <div className="check_like" >
                    <input className={isLikedThis ? "liked_check l_on" : "liked_check l_off"} type="checkbox" onClick={(event)=>{
                          event.stopPropagation();
                          console.log('like')
                              dispatch(addToLiked(props))
                              setLikedThis(!isLikedThis)
                          }
                    }/>   
                </div>
            
            </div>
            </Link> 
            
        </div>
        <div className="content_blok">
            <ul className="content">
                <li href="#" className="goods_name">{props.name}</li>
                <li href="#" className="price_and_desc"> 
                    <div className="p_d_blok">
                        <div className="desc">{props.metal_id} Камни:{props.stones}</div>
                        <div className="price"> {props.price}₽</div>
                    </div>   

                </li>

            </ul>
        </div>
        <div className={isHoveredThis ? "dinamic_korzina_unhide" : "dinamic_korzina"}>
                <button className={isHoveredBucket ? "korzina_v_tovare_hovered" : "korzina_v_tovare"} data-key={props.id} onClick={()=>addingToCart(props)} onPointerEnter={hoveredBucketOn}  onPointerLeave={hoveredBucketOff}>
                    <span>Добавить в корзину</span>
                </button>

        </div>
        
    </div>
       

    
    );



};

export default GoodsButton;