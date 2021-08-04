import Router from "express";
import userController from "../controller/user.controller";

const router = new Router();


router.post('/line', userController.createLine);
router.get('/line', userController.getLines);
router.delete('/line/:id', userController.deleteLine);
router.put('/line', userController.updateLine);

export default router;
