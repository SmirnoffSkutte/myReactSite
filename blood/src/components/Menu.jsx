import React,{useState, useEffect, useRef } from "react";
import {Container,Row,Col,Image} from 'react-bootstrap';
import MenuList from "./MenuList";
import lottie from 'lottie-web'

const Menu = () => {

    const[menuActive,menuActiveState]=useState(false);
    
    function toggleMenu(){
        menuActiveState(!menuActive)
    }

    var el = document.getElementById('burgerMenu');

    document.addEventListener('click', outsideEvtListener);

    function outsideEvtListener(event) {
    if (event.target === el || el.contains(event.target)) {
        return;
    } else {
        menuActiveState(false)
    }
    document.removeEventListener('click',outsideEvtListener);
    }

    const container = useRef(null)
    useEffect(() => {
        lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('../animations/burger-anim.json')
        })
      }, [])

    //   <Image className="he60" src='/img/svg/Close.svg'></Image>

    return(
    <Col id="burgerMenu" className='grey dfc paddingNone'xs='3'>
        <Image className='pointer marg-l12' src='/img/svg/Menu.svg' onClick={toggleMenu}></Image>
        <div  className={menuActive ? 'menuActive' : 'menuDisabled'}>
            <Row>
            <Col className="menuBlock paddingNone" xs='3'>
            <div className="close pointer" onClick={toggleMenu} ><div ref={container}></div ></div>
            <MenuList></MenuList>
            </Col>

            </Row>
            
            

        </div>
        

        
    </Col>
   
    )
    

}

export default Menu;