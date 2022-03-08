import mongoose from 'mongoose';

const goodsData = new mongoose.Schema({
    "id":{type:String},
        "name":{type:String,required:true},
        "desc":{type:String,required:true},
        "price":{type:Number,required:true},
        "image":{type:String,required:true},
        "full_desc":{type:String,required:true},
        "type_id":{type:String,required:true},
        "stones":{type:String,required:true},
        "metal_id":{type:String,required:true},      
})

export default mongoose.model('goodsData', goodsData)