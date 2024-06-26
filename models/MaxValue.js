import { Schema, model, models } from 'mongoose';

const MaxValueSchema = new Schema({

  collectionName:{
    type:String,
  },
  maxValue:{
    type:Number,
  },
},{_id:false});
const MaxValue = models.maxvalue || model("maxvalue", MaxValueSchema);

export default MaxValue;