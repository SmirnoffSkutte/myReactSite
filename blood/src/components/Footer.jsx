import React, { Component } from 'react';
import Line from '../components/Line'

import {Container,Row,Col,Image,Carousel} from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return <div>
        <Row>
              <div>
                  <Row className='mt-3 justify-content-center bt'>
                     <Col className='he60 grey dfc jcc' xs='2'><Image src='/img/svg/Twitter.svg'></Image></Col>
                     <Col className='he60 grey dfc jcc' xs='2'><Image src='/img/svg/Instagram.svg'></Image></Col>
                     <Col className='he60 grey dfc jcc' xs='2'><Image src='/img/svg/Youtube.svg'></Image></Col>
                  </Row>
           
              </div>

              <div>
                <Line/>
                <Row className='justify-content-center'>
                  <Col className='justify-content-center grey dfc' xs='6'>smirnovivan963@gmail.com</Col>
                </Row>
                <Row className='mt-3 justify-content-center'>
                  <Col className='justify-content-center grey dfc' xs='6'>+7 777 777</Col>
                </Row>
                <Row className='mt-3 justify-content-center'>
                  <Col className='justify-content-center grey dfc' xs='6'>08-22 Каждый день</Col>
                </Row>
                <Line/>
              </div>

              <div>
                  <Row className='mt-3 justify-content-center'>
                     <Col className='he60 grey jcc dfc b1g' xs='4'>О нас</Col>
                     <Col className='he60 grey jcc dfc b1g' xs='4'>Контакты</Col>
                     <Col className='he60 grey jcc dfc b1g' xs='4'>Блог</Col>
                  </Row>
           
              </div>

            </Row>
    </div>;
  }
}
