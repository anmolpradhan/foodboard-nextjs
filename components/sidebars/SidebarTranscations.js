import { SideBarUserDetails } from './SideBarUserDetails';
import React from 'react'
import FoodListItem from '../FoodListItem'

function SidebarTransactions(props) {
  return (
    <div className="sidebar">
      <SideBarUserDetails     />
      <div className="grid h-fit w-full grid-cols-3 text-xs font-light text-white text-opacity-70 items-center pt-5">
        <span className="grid-row-2 grid gap-1">
          Order Number
          <span className="text-sm font-normal text-white">#0003</span>
        </span>
        <span className="grid-row-2 grid gap-1">
          Customer{' '}
          <span className="text-sm font-normal text-white">{props.orderDetails.customername}</span>
        </span>
        <span className="grid-row-2 grid gap-1">
          {props.orderDetails.ordertype=="dinein"?(<>Table Number</>):(<>Takeaway</>)}
          <span className="text-sm font-normal text-white">A10</span>
        </span>
      </div>
      <div className='flex flex-col pt-8 gap-4'>
      <FoodListItem /><FoodListItem />
      </div>
    </div>
  )
}

export default SidebarTransactions
