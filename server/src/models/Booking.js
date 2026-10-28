import mongoose from 'mongoose';
const schema=new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},show:{type:mongoose.Schema.Types.ObjectId,ref:'Show',required:true},seats:[String],totalAmount:{type:Number,required:true},status:{type:String,enum:['confirmed','cancelled'],default:'confirmed'}},{timestamps:true});
export default mongoose.model('Booking',schema);