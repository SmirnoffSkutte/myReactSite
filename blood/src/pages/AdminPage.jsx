import React, {useState,useCallback} from 'react';
import {Button, Container} from "react-bootstrap";
import Header from '../components/Header';
import Footer from '../components/Footer';
import useFormField from '../customHooks/useFormField';
import * as uuid from 'uuid';
  
      export function AdminPage() {
        const nameField = useFormField();
        const priceField = useFormField();
        const descField = useFormField();
        const fullDescField = useFormField();
        const typeField = useFormField();
        const stonesField = useFormField();
        const metalField = useFormField();
        const deleteField = useFormField();
        const [file,setFile]=useState(null)
      
        const selectFiles=e=>{
          // setFile(e.target.files[0])
          resize()
        }
        const data = { 
        "image":file,
        "name":nameField.value,
        "desc":descField.value,
        "price":Number(priceField.value),
        "full_desc":fullDescField.value,
        "type_id":typeField.value,
        "stones":stonesField.value,
        "metal_id":metalField.value, 
        };

        function dataURLtoFile(dataurl, filename) {
          let arr = dataurl.split(','),
              mime = arr[0].match(/:(.*?);/)[1],
              bstr = atob(arr[1]), 
              n = bstr.length, 
              u8arr = new Uint8Array(n);   
          while(n--){
              u8arr[n] = bstr.charCodeAt(n);
          }
          return new File([u8arr], filename, {type:mime});
      }

        function resize(){
          let resize_width = 600;
          let item = document.querySelector('#uploader').files[0];
          let reader = new FileReader();
          reader.readAsDataURL(item);
          reader.name = item.name;
          reader.size = item.size; 
          reader.onload = function(event) {
            let img = new Image();
            img.src = event.target.result;
            img.name = event.target.name;
            img.size = event.target.size;
            img.onload = function(el) {
              let elem = document.createElement('canvas');   
              let scaleFactor = resize_width / el.target.width;
              elem.width = resize_width;
              elem.height = resize_width; 
              let ctx = elem.getContext('2d');
              ctx.drawImage(el.target, 0, 0, elem.width, elem.height);      
              let srcEncoded = ctx.canvas.toDataURL('image/png', 1);            
              let resizedImage=dataURLtoFile(srcEncoded,"resizedGoodsImage.png")
              setFile(resizedImage)
            }
          }
        }
      
        function sendRequest(method, url, body = null) {
            // const headers = {
            //   'Content-Type': 'application/json'
            // }
            return fetch(url, {
              method: method,
              body: body,
              // headers: headers
            })
          }

          // console.log(data)
          
          function sendData(e){
              //  e.preventDefault()
            const url = 'http://localhost:5000/api/goods_page';
            const formData = new FormData()
            formData.append('name', nameField.value)
            formData.append('price', Number(priceField.value))
            formData.append('image', file)
            formData.append("type_id",typeField.value)
            formData.append("stones",stonesField.value)
            formData.append("metal_id",metalField.value)
            formData.append("full_desc",fullDescField.value)
            formData.append("desc",descField.value)
            sendRequest('POST', url, formData)
            .then(data => console.log(data))
            .catch(err => console.log(err))

          }

          function deleteData(e){
            const deleteUrl= `http://localhost:5000/api/goods_page/${deleteField.value}`;
            sendRequest('DELETE',deleteUrl)
            .then(res=>console.log(res))
          }

          const [check,setCheck]=useState(false)
        return (
            <div>
                <Header/>
                <Container>
            <form className='mt-5'>
                <div className='mt-3'>
              <label htmlFor='goodsName'>Название украшения</label>
              <input type='goodsName' id='goodsName' {...nameField} />
                </div>
                <div className='mt-3'>
              <label htmlFor='goodsPrice'>Цена украшения</label>
              <input type='number' id='goodsPrice' {...priceField} />
                </div>
                <div className='mt-3'>
              <label htmlFor='goodsDesc'>Краткое описание украшения</label>
              <input type='goodsDesc' id='goodsDesc' {...descField} />
                </div>
                <div className='mt-3'>
              <label htmlFor='goodsFullDesc'>Полное описание украшения</label>
              <input type='goodsFullDesc' id='goodsFullDesc' {...fullDescField} />
                </div >
                <div className='mt-3'>
              <label htmlFor='goodsType'>Тип украшения</label>
              <input type='goodsType' id='goodsType' {...typeField} />
                </div>
                <div className='mt-3'>
              <label htmlFor='goodsStones'>Камень украшения</label>
              <input type='goodsStones' id='goodsStones' {...stonesField} />
                </div>
                <div className='mt-3'>
              <label htmlFor='goodsMetal'>Металл украшения</label>
              <input type='goodsMetal' id='goodsMetal' {...metalField} />
                </div>
                <div className='mt-3'>
              {/* <input type='file' id='goodsImage' onChange={selectFiles}/> */}
                     Загрузите картинку украшения: <input type="file" onChange={selectFiles} id="uploader"/>
                   <img id="image" className='imgHide'></img>

                </div>

                    <button  className='adminSubmit mt-3' onClick={sendData}>Добавить украшение в магазин</button>
            </form>

            <form>
            <div className='mt-3'>
              <label htmlFor='goodsDelete'>Удалить украшение из магазина(введите _id товара)</label>
              <input type='goodsDelete' id='goodsDelete'  {...deleteField} />
                </div>
                <button  className='adminSubmit mt-3' onClick={deleteData}>Удалить</button>
            </form>           

                </Container>
                <div className='bottom-0'>
                        <Footer/>
                </div>
            </div>
         
        );
      }


export default AdminPage;