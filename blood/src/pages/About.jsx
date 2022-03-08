import React, { Component } from 'react';
import {Container,Row,Col,Image, Carousel} from 'react-bootstrap';
import Carusel from '../components/Carusel';
import Header from '../components/Header';
import Line from '../components/Line'
import GoodsList from '../containers/GoodsList';
import Footer from '../components/Footer';

function About(){

    return(
       <div>

           <Header/>
           <Container>
               <Row>
                   <Col xs='12'>Почта: smirnov967@gmail.com</Col>
                   <Col xs='12'>VK: https://vk.com/smirnoffskutte</Col>
                   <Col xs='12'>Telegram: 1418123031</Col>
                   
               </Row>

           </Container>
           <div className='bottom-0'>
                        <Footer/>
                </div>
       </div> 
    )

}

export default About;