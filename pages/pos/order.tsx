import type { NextPage } from 'next'
import Head from 'next/head'
import _ from 'lodash'
import { useRecoilState } from 'recoil'
import { orderDetailsState, itemDetailsState } from '../../lib/recoil-atoms'

import dbConnect from '../../lib/dbConnect'
import OrderDetails from '../../models/OrderDetails'

import PosHeader from '../../components/pos-components/PosHeader'
import OrderContent from '../../components/pos-components/OrderContent'
import SideBarTemplate from '../../components/pos-components/sidebars/SideBarTemplate'
import SideBarOrderDetails from '../../components/pos-components/sidebars/SideBarOrderDetails'

const Order: NextPage = (props) => {
  const [orderDetails] = useRecoilState(orderDetailsState)  
  return (
    <div>
      <Head>
        <title>Sakani Restro | Order</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-row overflow-hidden">
        <div className="flex w-3/4 flex-col">
          <PosHeader />
          <input
            type="text"
            className="primary-input ml-2 mt-2"
            placeholder="Search...."
          />
          <OrderContent
            allOrderDetails={props.allOrderDetails}
          />
        </div>
        {_.isEmpty(orderDetails) ? (
          <SideBarTemplate />
        ) : (
          <SideBarOrderDetails orderDetails={orderDetails} />
        )}
      </div>
    </div>
  )
}
export async function getServerSideProps() {
  await dbConnect()

  const result = await OrderDetails.find({})
  const datas = result.map((doc) => {
    const data = doc.toObject()
    data._id = data._id.toString()
    return data
  })

  return { props: { allOrderDetails: datas, status: 'Got Data' } }
}
export default Order
