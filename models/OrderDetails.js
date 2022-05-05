import mongoose from 'mongoose'
const OrderDetailsSchema = new mongoose.Schema({
  customername: String,
  ordertype: String,
  itemDetails: mongoose.Schema.Types.Mixed,
  token:Number
})


export default mongoose.models?.OrderDetails ||
  mongoose.model('OrderDetails', OrderDetailsSchema)
