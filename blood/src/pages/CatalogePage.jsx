import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useGetGoodsQuery} from '../RTKredux/goodsAPI'
import GoodsButton from "../components/GoodsButton";
import { useState } from 'react';
import { useEffect } from 'react';
import CatalogeFilterButton from '../components/CatalogeFilterButton';
import FilterSelector from '../components/FilterSelector';
import SingleSelect from '../components/SingleSelect';

function CatalogePage (){

    const {data=[]} = useGetGoodsQuery()

    useEffect(()=>{
        if (dataState.length===0){
            setDataState(data)
        }
    })

    const [dataState,setDataState]=useState([])

    const [priceFilter,setPriceFilter]=useState('')

    const getCurrentPrice=(currentPrice)=>{
        setPriceFilter(currentPrice)
    }

    return(
        <div>
            <Header/>
            <Container>
            <div>
                <Row>
                    <Col className='paddingNone'>
                    <div className='dfc mt-5 sb'>
                        <h1>Каталог</h1>
                        {/* <div className='filtrButtonOut'>По умолчанию</div> */}
                        <FilterSelector giveCurrentPrice={getCurrentPrice}/>
                    </div>
               
                    </Col>
                </Row>

            <div>
                <Row>
                   <Col xs='12' className='mt-5 paddingNone'>
                        <div className='grey he90 dfc sb b1g'>
                            <h2 className='ml3'>Фильтр</h2>
                            
                        </div>
                   </Col>

                </Row>

                </div>

                <CatalogeFilterButton priceFilter={priceFilter}/>
                          
            </div>
            
            <div>
    
            </div>
                
            </Container>
           
            <Footer/>

            
        </div>

    );
}

export default CatalogePage;