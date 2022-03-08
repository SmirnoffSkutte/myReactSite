//API method add

class API{
    location = 'http://localhost:5000/api/'
    
    //GET /list
    async getGoodsList(){
    return await fetch(this.location + 'goods_list').then(res=>res.json())
    }
    
    //GET /:id
    async getGood({goods_id}){
        return await fetch(this.location+'goods_page/'+goods_id).then(res=>res.json())
    }
   
    //POST /:id
    async addProduct({good}){
     return await fetch(this.location + good, {method:'post'}).then(res=>res.json())
    }
    
    }
    export default new API()