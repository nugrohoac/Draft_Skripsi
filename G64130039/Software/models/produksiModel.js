var User = require('./userModel');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
	autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/PortalHarga");

autoIncrement.initialize(connection);

var produksiModel = new Schema({
	user_id:{type:String,ref:'User'},
	komoditas_id:String,
	longitude:String,
	latitude:String,
	alamat:String,
	datePost:Number,
	luas_lahan:Number,
	date_tanam:Number,
	date_panen:Number,
	jumlah:Number,
	keterangan:String
});
produksiModel.plugin(autoIncrement.plugin, { model: 'Produksi', field: 'produksi_id' });
module.exports=mongoose.model('Produksi',produksiModel);