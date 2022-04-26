// @ts-nocheck

import dbConnect from '../../lib/dbConnect';


const Categories = require('../../models/Categories');
const data = require('../../data.json');
const Foods = require('../../models/Foods');

export default async function(req,res){
    await dbConnect();
    await Foods.remove({});
    const createdFoods=await Foods.insertMany(data.foods);    
    await Categories.remove({});
    const createdCategories=await Categories.insertMany(data.categories);    
    res.send({createdFoods,createdCategories})
}