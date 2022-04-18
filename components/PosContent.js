import React from 'react'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import FoodBox from './FoodBox'
import data from '../data.json'
function PosContent() {

  const categories = data.categories
  const foodDetails=data.foods
  return (
    <div className="mt-2 flex flex-row gap-5 h-full">
      <div className="flex w-32 flex-col gap-4 ">
        {categories.map((category) => (
          <button key={category.key} className="group flex flex-row items-center gap-3 rounded-3xl px-3 py-2 text-sm active:bg-primary active:text-white">
            <LocalDiningIcon className="rounded-full p-1 group-active:bg-white group-active:text-secondary" />
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid w-full grid-cols-5 gap-4 h-5/6 overflow-y-auto" style={{scrollbarWidth:"none"}}>
      {foodDetails.map(foodDetail=>{
          return <FoodBox foodDetail={foodDetail}/>
        })}{foodDetails.map(foodDetail=>{
          return <FoodBox foodDetail={foodDetail}/>
        })}
        
      </div>
    </div>
  )
}

export default PosContent
