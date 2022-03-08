import goodsData from "./goodsData.js"
import goodService from "./goodService.js"

class goodsDataController{
    async create(req,res){
        try{
            
            const createdGood = await goodService.create(req.body,req.files.image)
            res.json(createdGood)
        
        
            } catch(e){
                res.status(500).json(e.message)
        
            }

    }

    async getAll(req,res){
        try{
            const goodsList = await goodService.getAll();
            return res.json(goodsList);

        }catch(e){
            res.status(500).json(e.message)
        }

    }
    async getOne(req,res){
        try{
            const goodOne= await goodService.getOne(req.params.id)
            return res.json(goodOne)

        }catch(e){
            res.status(500).json(e.message)
        }

        
    }
    async update(req,res){
        try{
            const updatedGood = await goodService.update(req.body)
            return res.json(updatedGood);
            
        }catch(e){
            res.status(500).json(e.message)
        }

        
    }
    async delete(req,res){
        try{
            const deletedGood = await goodService.delete(req.params.id)
            return res.json(deletedGood)

        }catch(e){
            res.status(500).json(e.message)
        }

        
    }
}

export default new goodsDataController();