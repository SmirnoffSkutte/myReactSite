import React, { Component } from 'react';
import {Container,Row,Col,Image, Carousel} from 'react-bootstrap';

export default class Line extends Component {
  render() {
    return <div>
        <Col className='grey he16 dfc justify-content-center' xs='12'><Image src='/img/svg/Line.svg'></Image></Col>
    </div>;
  }
}
