import OrderBox from './OrderBox'

import { useRecoilState } from 'recoil'
import { orderDetailsState } from '../../lib/recoil-atoms'
const OrderContent = (props) => {
  const [orderDetails,setOrderDetails] = useRecoilState(orderDetailsState)

  function viewOrder(orderDetail){
    setOrderDetails(orderDetail)
  }
  return (
    <div className="m-2 grid grid-cols-5 gap-4">
      {props.allOrderDetails.map((orderDetail) => (
        <OrderBox orderDetail={orderDetail} onPress={()=>viewOrder(orderDetail)} key={orderDetail._id}/>
      ))}
    </div>
  )
}

export default OrderContent
