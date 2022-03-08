import goodsData from "./goodsData.js";
import fileService from "./fileService.js";

class goodService{
    async create(createdGood,image){
        const fileName=fileService.saveFile(image)
        

        const createdGoodData = await goodsData.create({...createdGood,image:fileName});
        return createdGoodData;          
    }

    async getAll(){
        
            const goodsList = await goodsData.find();
            return goodsList;

      

    }
    async getOne(id){
       
            if (!id){
                throw new Error('не указан или не существует такого  id')
            }
            const goodOne= await goodsData.findById (id);
            return goodOne;

        
        
    }
    async update(updatedGood){
       
            
            if (!updatedGood._id){
                throw new Error('не указан или не существует такого id')
            }
            const updatedGoodData = await goodsData.findByIdAndUpdate(updatedGood._id,updatedGood,{new:true})
            return updatedGoodData;

        
    }
    async delete(id){  
            if (!id){
                throw new Error('не указан или не существует такого  id')
            }
            const deletedGood = await goodsData.findByIdAndDelete(id);
            return deletedGood;      
    }

}

export default new goodService();