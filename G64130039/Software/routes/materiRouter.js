var express=require('express')
var materiController=require('./../controllers/materiController');
var materiRouter=express.Router();

// upload photo

materiRouter.route('/add')
	.post(materiController.addMateri);
materiRouter.route('/update')
	.post(materiController.updateMateri);
materiRouter.route('/delete')
	.post(materiController.delMateri);
materiRouter.route('/get')
	.get(materiController.getAllMateri);
materiRouter.route('/get/user/:user_id')
	.get(materiController.getMateriKu);
materiRouter.route('/get/:materi_id')
	.get(materiController.getOneMateri);

module.exports=materiRouter; 