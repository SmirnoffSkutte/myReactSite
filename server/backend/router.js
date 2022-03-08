import  Router from "express";
import goodsDataController from "./goodsDataController.js";

const router = new Router()

router.post('/goods_page', goodsDataController.create)
router.get('/goods_list', goodsDataController.getAll)
router.get('/goods_page/:id', goodsDataController.getOne)
router.put('/goods_page', goodsDataController.update)
router.delete('/goods_page/:id', goodsDataController.delete)

export default router;