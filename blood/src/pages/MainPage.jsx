import React, { Component } from 'react';
import {Container,Row,Col,Image, Carousel} from 'react-bootstrap';
import Carusel from '../components/Carusel';
import Header from '../components/Header';
import Line from '../components/Line'
import GoodsList from '../containers/GoodsList';
import Footer from '../components/Footer';


const MainPage =()=> {
    return <div>
       <Header/>
       <Container>
          
            {/* (слайдер) */}
           
            <Row><Carusel></Carusel></Row>

            
            
            {/* блок new arrival */}
            <Row className='mt-3'>

              <div>
                <Row className='mt-3 justify-content-center'>
                   <Line/>
                   <Col className='grey dfc justify-content-center 'xs='12'>New Arrivals</Col>
                   <Line/>
                </Row>
              </div>

              <div>
                <Row>
                  <Col xs='6'>
                    <h1>Какая-то модель</h1>
                    <Image src='/img/png/mod1.png' className='w100 he600'></Image>
                    </Col>
                    <Col xs='6'>
                    <h1>Еще какая-то модель</h1>
                     <Image src='/img/png/mod2.png' className='w100 he600'></Image> 
                    </Col>
                </Row>
              </div>

              <div className='mt-3'>
                <Row className='justify-content-center'>
                  <Col className='grey h-60 justify-content-center dfc' xs='6'>Красивые svg-шки</Col>
                </Row>
              </div>
            </Row>

            <Row className='mt-3'>
              <Col className='grey he60 mt-3 justify-content-center dfc'xs='4'><Image src='/img/svg/Boss.svg'></Image></Col>
              <Col className='grey he60 mt-3 justify-content-center dfc'xs='4'><Image src='/img/svg/Prada.svg'></Image></Col>
              <Col className='grey he60 mt-3 justify-content-center dfc'xs='4'><Image src='/img/svg/Burb.svg'></Image></Col>
              <Col className='grey he60 mt-3 justify-content-center dfc'xs='4'><Image src='/img/svg/Catier.svg'></Image></Col>
              <Col className='grey he60 mt-3 justify-content-center dfc'xs='4'><Image src='/img/svg/Tiffany Co.svg'></Image></Col>
              <Col className='grey he60 mt-3 justify-content-center dfc'xs='4'><Image src='/img/svg/Gucci.svg'></Image></Col>

            </Row>

            <Row className='justify-content-center mt-3'>
              <Col className='grey he60 mt-3 jcc dfc' xs='6'><h1>Collections</h1></Col>
              <Col className='grey he260 mt-3 paddingNone' xs='12'><Image className='d-block he260 w-100' src='/img/png/col2.png'></Image></Col>
              <Col className='grey he260 mt-3 paddingNone' xs='12'><Image className='d-block he260 w-100' src='/img/png/col1.png'></Image></Col>
            </Row>

            <Row className='mt-3'>
              <Col className='grey he176 paddingNone'><iframe height="176" width="100%"src="https://www.youtube.com/embed/3jT_q7dt-cM" frameBorder="0" allowFullScreen></iframe></Col>
            </Row>

            <Row className='mt-3 justify-content-center'>
              <Col className='grey he60 mt-3 jcc dfc' xs='6'>Какое-то красивое видео</Col>
              <Line/>  
            </Row>

        </Container>
        <Footer/>
    </div>;
  }

  export default MainPage;
