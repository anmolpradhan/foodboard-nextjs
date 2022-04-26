import mongoose from 'mongoose'

const CategoriesSchema = new mongoose.Schema({
  name: String,
  key: String
})
const Categories= mongoose.model('Categories', CategoriesSchema)
module.exports = Categories