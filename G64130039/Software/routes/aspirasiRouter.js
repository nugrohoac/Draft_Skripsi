var express=require('express')
var aspirasiController=require('./../controllers/aspirasiController');
 
var aspirasiRouter=express.Router();

aspirasiRouter.route('/add')
	.post(aspirasiController.postAspirasi);
aspirasiRouter.route('/update')
	.post(aspirasiController.updateAspirasi);
aspirasiRouter.route('/delete')
	.post(aspirasiController.delAspirasi);
aspirasiRouter.route('/pendukung/add')
	.post(aspirasiController.dukung_aspirasi);
aspirasiRouter.route('/pendukung/delete')
	.post(aspirasiController.batalDukung);
aspirasiRouter.route('/tanggapan/add')
	.post(aspirasiController.postTanggapan);
aspirasiRouter.route('/tanggapan/delete')
	.post(aspirasiController.delTanggapan);

aspirasiRouter.route('/get/page/:page')
	.get(aspirasiController.allAspirasi);
aspirasiRouter.route('/get')
	.get(aspirasiController.allAspirasi);
aspirasiRouter.route('/get/:aspirasi_id')
	.get(aspirasiController.oneAspirasi);
aspirasiRouter.route('/get/user/:user_id')
	.get(aspirasiController.aspirasiKu);
aspirasiRouter.route('/pendukung/get/:aspirasi_id')
	.get(aspirasiController.getPendukung);
aspirasiRouter.route('/tanggapan/get/:aspirasi_id')
	.get(aspirasiController.getTanggapan);

module.exports=aspirasiRouter; 
