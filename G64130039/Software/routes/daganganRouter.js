var express=require('express')
var daganganController=require('./../controllers/daganganController');
var daganganRouter=express.Router();

// upload photo

daganganRouter.route('/get')
	.get(daganganController.getAll);
daganganRouter.route('/get/user/:user_id')
	.get(daganganController.getDaganganKu);
daganganRouter.route('/get/:dagangan_id')
	.get(daganganController.getOneDagangan);
daganganRouter.route('/update')
	.post(daganganController.updateDagangan);
daganganRouter.route('/add')
	.post(daganganController.postDagangan);
daganganRouter.route('/delete')
	.post(daganganController.delDagangan);

module.exports=daganganRouter; 