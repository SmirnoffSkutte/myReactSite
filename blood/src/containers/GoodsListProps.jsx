import React  from "react";
import GoodsButton from "../components/GoodsButton";

function GoodsListProps(props){
    
    const data = props.goods
    
    return (
        <div className="arrivalGoods">
            {data.length === 0 ?(
                <h2>Товаров с такими фильтрами не найдено</h2>

            ) : (
                data.map(item => <GoodsButton _id={item._id} id={item.id} name={item.name} desc={item.desc} price={item.price} image={item.image}
                    full_desc={item.full_desc} type_id={item.type_id} stones={item.stones} metal_id={item.metal_id} str_1={item.str_1} str_2={item.str_2}
                    str_3={item.str_3} str_4={item.str_4} str_5={item.str_5} img_1={item.img_1} img_2={item.img_1}  img_3={item.img_3} key={item._id}
                     /> )    

            )}
        
          
        </div>       
    );
}

export default GoodsListProps;