import React, { Component,useEffect,useContext } from 'react';
import {Container,Row,Col,Image, Carousel} from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { addToCart } from "../cart/cartSlice";
import {
    addToLiked
  } from "../liked/likedSlice";


const GoodsPage = () =>{

    const dispatch=useDispatch()

    const {id}=useParams()

    const [goodsData,setGoodsData]=useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/api/goods_page/${id}`)
        .then(res=>res.json())
        .then(data => {setGoodsData(data)
            console.log(goodsData)
        })
    },[])

    const [isHoveredBucket,setHoveredBucket]=useState(false)

    const hoveredBucketOn = () => {
        setHoveredBucket(true)
    }

    const hoveredBucketOff = () => {
        setHoveredBucket(false)
    }
 
    const cartGood={
        "_id":goodsData._id,
        "id":goodsData.id,
        "name":goodsData.name,
        "desc":goodsData.desc,
        "price":goodsData.price,
        "image":goodsData.image,
        "full_desc":goodsData.full_desc,
        "type_id":goodsData.type_id,
        "stones":goodsData.stones,
        "metal_id":goodsData.metal_id,
      
    }

    const likedGood={
        "_id":goodsData._id,
        "id":goodsData.id,
        "name":goodsData.name,
        "desc":goodsData.desc,
        "price":goodsData.price,
        "image":goodsData.image,
        "full_desc":goodsData.full_desc,
        "type_id":goodsData.type_id,
        "stones":goodsData.stones,
        "metal_id":goodsData.metal_id,
      
    }

    const addingToCart=(cartGood)=>{
        dispatch(addToCart(cartGood))
    }

    const [isLikedThis,setLikedThis]=useState(false)

    const isLiked=()=>{
        let check = (JSON.parse(localStorage.getItem('favorites')) || []).some(el=>el._id===likedGood._id)
        if(check){
            setLikedThis(true)
        }
        else{
            setLikedThis(false)
        }  
    }

    useEffect(()=>{
        isLiked()
    })

    return(
        <div>
        <Header/>
        <Container className='mt-5'>
        <Row>
            <Col xs='12' md='6'><Image className='imageGoodPage' src={"http://localhost:5000/"+goodsData.image}/></Col>
            <Col xs='12' md='6'>
                <div className='nameGoodPage'>
                    <h1>{goodsData.name}</h1>
                    <Image onClick={(event)=>{
                        event.stopPropagation();
                            dispatch(addToLiked(likedGood))
                            setLikedThis(!isLikedThis)
                    }} className='likeGoodPage'  src={isLikedThis ? '/img/svg/liked.svg' : '/img/svg/liked_off.svg'}></Image>
                </div>
                <div>
                    <Row className='mt-3'>
                        <h3>{goodsData.desc}</h3>
                    </Row>
                    <Row className='mt-3'>
                        <h3>{goodsData.full_desc}</h3>
                    </Row>
                    <Row className='mt-3'>
                        <h3>Состав: {goodsData.metal_id},{goodsData.stones}</h3>
                    </Row>
                    <Row className='mt-3'>
                        <h3>{goodsData.price}₽</h3>
                    </Row>
                </div>
                <div>
                    <button  className={isHoveredBucket ? "cartGoodPageHovered" : "cartGoodPage"} onClick={()=>addingToCart(cartGood)} onPointerEnter={hoveredBucketOn}  onPointerLeave={hoveredBucketOff}>Добавить в корзину</button>
                </div>
            </Col>
        </Row>

        </Container>
      
        <div>
                        <Footer/>
                </div>
        </div>

    )
}

export default GoodsPage;
