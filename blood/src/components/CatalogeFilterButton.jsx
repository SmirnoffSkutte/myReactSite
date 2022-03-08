import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Container,Row,Col} from 'react-bootstrap';
import GoodsListProps from "../containers/GoodsListProps";

function CatalogeFilterButton({priceFilter}){

    const [typeCatState,setTypeCat]=useState([])
    const [stonesCatState,setStonesCat]=useState([])
    const [metalCatState,setMetalCat]=useState([])

    const [type,setType]=useState([])
    const [stones,setStones]=useState([])
    const [metal,setMetal]=useState([])

    let goodsData = []
    let [filteredGoods,setFilteredGoods]=useState([])

    useEffect(()=>{

        const abortController = new AbortController();

        fetch('http://localhost:5000/api/goods_list',{signal:abortController.signal})
        .then(res=> res.json())
        .then(res=> {  
            setMetalCat(Array.from(new Set(res.map(item=>{return item.metal_id}))))
            setTypeCat(Array.from(new Set(res.map(item=>{return item.type_id}))))
            setStonesCat(Array.from(new Set(res.map(item=>{return item.stones}))))
            return goodsData = res           
        })
        .then(res => {
          if (priceFilter==='default'){
            setFilteredGoods (
              goodsData.filter(n => (
                (!type.length || type.includes(n.type_id)) && (!stones.length || stones.includes(n.stones)) && (!metal.length || metal.includes(n.metal_id))      
              )))
          }

          if (priceFilter===''){
            setFilteredGoods (
              goodsData.filter(n => (
                (!type.length || type.includes(n.type_id)) && (!stones.length || stones.includes(n.stones)) && (!metal.length || metal.includes(n.metal_id))      
              )))
          }

          if (priceFilter==='up'){
            setFilteredGoods (
              goodsData.filter(n => (
                (!type.length || type.includes(n.type_id)) && (!stones.length || stones.includes(n.stones)) && (!metal.length || metal.includes(n.metal_id))      
              )).sort((a, b) => a.price - b.price)
              )
          }

          if (priceFilter==='down'){
            setFilteredGoods (
              goodsData.filter(n => (
                (!type.length || type.includes(n.type_id)) && (!stones.length || stones.includes(n.stones)) && (!metal.length || metal.includes(n.metal_id))      
              )).sort((a, b) => a.price - b.price).reverse()
              )
          }
            
        })
            return () => abortController.abort()         
    },[type,stones,metal,filteredGoods])


    const onTypeChange = ({ target: { checked, value } }) => {
        setType((!type.includes(value) && checked)
          ? [ ...type, value ]
          : type.filter(n => n !== value)
        );
      };
    const onStonesChange = ({ target: { checked, value } }) => {
        setStones((!stones.includes(value) && checked)
          ? [ ...stones, value ]
          : stones.filter(n => n !== value)
        );
      };
    const onMetalChange = ({ target: { checked, value } }) => {
        setMetal((!metal.includes(value) && checked)
          ? [ ...metal, value ]
          : metal.filter(n => n !== value)
        );
      };

    return(
        <div>
        <Row >
            <Col xs='12'  md='4' className='grey b1g paddingNone '>
                
            <h3 className='mtl3'>Тип Изделия</h3>
            <div className='filtrGrid'>
            {typeCatState.map((itemtype,index)=><label className="filtrButton">
                <input className="check-button" type="checkbox" key={index} value={itemtype} onChange={onTypeChange}></input>
                <span className="filtr-item">{itemtype}</span>
                </label>)}
        </div>      

        
            </Col>
            <Col xs='12'md='4'  className='grey  b1g paddingNone'>

                <h3 className='mtl3'>Камни</h3>

                <div className='filtrGrid'>
                {stonesCatState.map((itemtype,index)=><label className="filtrButton">
                <input className="check-button" type="checkbox" key={index} value={itemtype} onChange={onStonesChange}></input>
                <span className="filtr-item">{itemtype}</span>
                </label>)} 
        </div>    
                
            </Col>
            <Col xs='12' md='4' className='grey b1g paddingNone'>
            <h3 className='mtl3'>Металл</h3>

            <div className='filtrGrid'>
            {metalCatState.map((itemtype,index)=><label className="filtrButton">
                <input className="check-button" type="checkbox" key={index} value={itemtype} onChange={onMetalChange}></input>
                <span className="filtr-item">{itemtype}</span>
                </label>)}
        </div>    

                
            </Col>

        </Row>
        
        <GoodsListProps goods={filteredGoods}/>
    </div>
        
    )
}

export default CatalogeFilterButton;