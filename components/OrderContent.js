import OrderDetails from '../models/OrderDetails'
import OrderBox from './OrderBox'

const OrderContent = (props) => {
  return (
    <div className="m-2 grid grid-cols-5 gap-4">
      {props.allOrderDetails.map((orderDetail) => (
        <OrderBox orderDetail={orderDetail}/>
      ))}
    </div>
  )
}

export default OrderContent
