import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useState ,useRef} from "react";
import useOutsideClick from "../customHooks/useOutsideClick";
import { useEffect } from "react";

function BurgerMenu(){

    useEffect(()=>{ 
        var el = document.querySelector('.burgerMenu');
        var checkbox = document.getElementById('menuCheck')
   
        document.addEventListener('click', outsideEvtListener);
       
        function outsideEvtListener(event) {
            const click=event.composedPath().includes(el)
            if (!click) {
                checkbox.checked=false
         }
       
        // document.removeEventListener('click',outsideEvtListener);
        }
    })

    return(
        <Col className='grey dfc paddingNone'xs='3'>
       
        <div id="menuToggle" className="burgerMenu">
        <input type="checkbox" id='menuCheck'/>
             <span></span>
             <span></span>
             <span></span>    
          <ul  id="menu" >
             <Link to='/' ><li>Главная</li></Link>
             <Link to='/catalogePage' ><li>Каталог</li></Link>
             <Link to='/cart' ><li>Корзина</li></Link>
             <Link to='/likedPage' ><li>Избранное</li></Link>
             <Link to='/adminPage' ><li>Админ-панель</li></Link>
             <Link to='/about' ><li>Создатель :)</li></Link>

             
          </ul>
        </div>
       

        </Col>

    )
}

export default BurgerMenu;