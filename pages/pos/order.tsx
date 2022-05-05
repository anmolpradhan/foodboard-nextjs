import type { NextPage } from 'next'
import Head from 'next/head'
import PosHeader from '../../components/PosHeader'
import OrderContent from '../../components/OrderContent'
import SideBarTemplate from '../../components/sidebars/SideBarTemplate'
import dbConnect from '../../lib/dbConnect'
import OrderDetails from '../../models/OrderDetails'

const Order: NextPage = (props) => {
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
          <OrderContent allOrderDetails={props.allOrderDetails}/>
        </div>
        <SideBarTemplate />
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
