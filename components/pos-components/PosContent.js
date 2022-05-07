import React from 'react'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import _ from 'lodash'
import { useRecoilState } from 'recoil'
import { itemDetailsState, orderDetailsState } from '../../lib/recoil-atoms'
import FoodBox from "./FoodBox"
import data from "../../data.json"

function PosContent(props) {
  const categories = data.categories
  const [itemDetails, setItemDetails] = useRecoilState(itemDetailsState)
  const [orderDetails] = useRecoilState(orderDetailsState)
  const allFood=props.allFood
  const foodDetails=allFood
  function addItems(foodDetail) {
    if (!_.isEmpty(orderDetails)) {
      setItemDetails({ name: foodDetail.name, price: foodDetail.price })
    }
  }
  return (
    <div className="mt-2 flex h-full flex-row gap-5">
      <div className="flex w-32 flex-col gap-4 ">
        {categories.map((category) => (
          <button
            key={category.key}
            className="group flex flex-row items-center gap-3 rounded-3xl px-3 py-2 text-sm active:bg-primary active:text-white"
          >
            <LocalDiningIcon className="rounded-full p-1 group-active:bg-white group-active:text-secondary" />
            {category.name}
          </button>
        ))}
      </div>
      <div
        className="food-list grid h-5/6 w-full grid-cols-5 gap-4 overflow-y-auto"
        style={{ scrollbarWidth: 'none', backgroundColor: '' }}
      >
        {foodDetails.map(foodDetail=>{
          return <FoodBox foodDetail={foodDetail} onPress={()=>addItems(foodDetail)} key={foodDetail._id}/>
        })}
        
      </div>
    </div>
  )
}

export default PosContent
