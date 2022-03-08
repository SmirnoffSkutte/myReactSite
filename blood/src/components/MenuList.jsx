import React from "react";
import { useState } from "react";
import menuArr from '../data/menuListItem.json';
import MenuListItem from "./MenuListItem";

const MenuList=()=>{
    
    const[menuListState,menuListSetState]=useState(menuArr);

    return(

    <ul className="menuList">
        {menuListState.map(item=>
        <MenuListItem info={item.info} key={item.key} router={item.router}/>
    
    )}
         
    </ul>



    )
}

export default MenuList;