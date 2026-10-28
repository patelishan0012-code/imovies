import mongoose from 'mongoose';
const schema=new mongoose.Schema({show:{type:mongoose.Schema.Types.ObjectId,ref:'Show',required:true},seat:{type:String,required:true},booking:{type:mongoose.Schema.Types.ObjectId,ref:'Booking',required:true}},{timestamps:true});
schema.index({show:1,seat:1},{unique:true});
export default mongoose.model('SeatClaim',schema);