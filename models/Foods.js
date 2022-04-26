import mongoose from 'mongoose'

const FoodSchema = new mongoose.Schema({
  name: String,
  price: String
})

export default mongoose.models?.Foods || mongoose.model("Foods", FoodSchema)
