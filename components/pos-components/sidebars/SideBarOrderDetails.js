import FoodListItem from '../FoodListItem'
import { SideBarUserDetails } from './SideBarUserDetails'

const SideBarOrderDetails = (props) => {
    const itemDetails=props.orderDetails.itemDetails
  return (
    <div className="sidebar">
      <SideBarUserDetails />
      <div className="grid h-fit w-full grid-cols-3 items-center py-3 text-xs font-light text-white text-opacity-70">
        <span className="grid-row-2 grid gap-1">
          Order Number
          <span className="text-sm font-normal text-white">#0003</span>
        </span>
        <span className="grid-row-2 grid gap-1">
          Customer{' '}
          <span className="text-sm font-normal text-white">
            {props.orderDetails.customername}
          </span>
        </span>
        <span className="grid-row-2 grid gap-1">
          {props.orderDetails.ordertype == 'dinein' ? (
            <>Table Number</>
          ) : (
            <>Takeaway</>
          )}
          <span className="text-sm font-normal text-white">A10</span>
        </span>
      </div>
      <hr />

      <div className="mt-4 flex h-full flex-col gap-2">
        {itemDetails.map((itemDetail, index) => {
          return (
            <FoodListItem
              itemDetail={itemDetail}
              id={index}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SideBarOrderDetails
