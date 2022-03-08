import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoodsButton from "../components/GoodsButton";
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'

const LikedPage=()=>{
    // JSON.parse(localStorage.getItem('favorites'))
    const {likedItems}=useSelector(state=>state.liked)
    return(
        <div>
        <Header/>
                    {likedItems.length === 0 ?(
                    <div>
                        <Container>
                        <h1 className='mt-5'>Избранное</h1>
                        <Row className='mt-5'>
                            <Col className='mt-5'>
                            <h3>Избранных товаров нет</h3>
                            <Link to='/'>
                            <h3 className='mt-5'>На главную</h3>
                            </Link>
                            </Col>
                        </Row>
                        </Container>
                        <div className='bottom-0'>
                        <Footer/>
                        </div>
                    </div>
                    ):(<>
                     <Container>
                     <h1>Избранное</h1>
                    <Row >
                
                <Col className='grey h1000' xs='12'>
                  <div className="arrivalGoods">
                    {likedItems.map(item=> <GoodsButton  _id={item._id} id={item.id} name={item.name} desc={item.desc} price={item.price} image={item.image}
            full_desc={item.full_desc} type_id={item.type_id} stones={item.stones} metal_id={item.metal_id} str_1={item.str_1} str_2={item.str_2}
            str_3={item.str_3} str_4={item.str_4} str_5={item.str_5} img_1={item.img_1} img_2={item.img_1}  img_3={item.img_3} key={item._id} />)}
                   </div>
                    </Col>
                </Row>
                </Container>
                <div className='bottom-01'>
                        <Footer/>
                </div>
                    </>)}
                  
    
        </div>
        
    )

}

export default LikedPage;