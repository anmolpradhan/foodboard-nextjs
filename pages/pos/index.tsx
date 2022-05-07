import type { NextPage } from 'next'
import Head from 'next/head'

import _ from 'lodash'

import { useRecoilState } from 'recoil'
import { orderDetailsState, itemDetailsState } from '../../lib/recoil-atoms'

import dbConnect from '../../lib/dbConnect'
import Foods from '../../models/Foods'

import PosHeader from '../../components/pos-components/PosHeader'
import SidebarTransaction from '../../components/pos-components/sidebars/SidebarTranscations'
import SideBarTakeOrder from '../../components/pos-components/sidebars/SideBarTakeOrder'
import AddToCart from '../../components/pos-components/sidebars/AddToCart'
import PosContent from '../../components/pos-components/PosContent'

const Home: NextPage = (props) => {
  const [orderDetails] = useRecoilState(orderDetailsState)
  const [itemDetails] = useRecoilState(itemDetailsState)
  return (
    <div className="">
      <Head>
        <title>Sakani Restro | POS</title>
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
          <PosContent allFood={props.allFood} />
        </div>
        {_.isEmpty(orderDetails) ? (
          <SideBarTakeOrder />
        ) : _.isEmpty(itemDetails) ? (
          <SidebarTransaction orderDetails={orderDetails} />
        ) : (
          <AddToCart itemDetails={itemDetails} />
        )}
      </div>
    </div>
  )
}
export async function getServerSideProps() {
  await dbConnect()

  const result = await Foods.find({})
  const foods = result.map((doc) => {
    const food = doc.toObject()
    food._id = food._id.toString()
    return food
  })

  return { props: { allFood: foods, status: 'Got Data' } }
}
export default Home
