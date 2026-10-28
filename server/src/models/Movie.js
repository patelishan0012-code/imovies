import mongoose from 'mongoose';
const schema=new mongoose.Schema({title:{type:String,required:true},description:String,genre:[String],durationMinutes:{type:Number,default:120},rating:{type:Number,default:7},posterUrl:String,backdropUrl:String,featured:{type:Boolean,default:false}},{timestamps:true});
export default mongoose.model('Movie',schema);