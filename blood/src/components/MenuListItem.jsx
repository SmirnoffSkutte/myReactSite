import React,{useState} from "react";
import { Link } from 'react-router-dom';
const MenuListItem=(props)=>{

    const[itemState,itemSetState]=useState(false);
    
    function activeItem(){
        itemSetState(true)
    }

    function disabledItem(){
        itemSetState(false)
    }

    return(
        <Link to={`${props.router}`}>
        <li className={itemState ? 'jcc dfc itemHovered' : 'menuListItem jcc dfc'} onPointerEnter={activeItem} onPointerLeave={disabledItem}>{props.info}</li>
        </Link>

    )
}

export default MenuListItem;

