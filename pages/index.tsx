import type { NextPage } from 'next'
import Head from 'next/head'
import PosHeader from '../components/PosHeader'
import SidebarTransaction from '../components/sidebars/SidebarTranscations'
import SideBarTakeOrder from '../components/sidebars/SideBarTakeOrder'
import AddToCart from '../components/sidebars/AddToCart'
import PosBody from '../components/PosBody'
import { useRecoilState } from 'recoil'
import { orderDetailsState, itemDetailsState } from '../lib/recoil-atoms'
import _ from 'lodash'
import dbConnect from '../lib/dbConnect'
import Foods from '../models/Foods'

const Home: NextPage = (props) => {
  const [orderDetails] = useRecoilState(orderDetailsState)
  const [itemDetails] = useRecoilState(itemDetailsState)

  return (
    <div className="">
      <Head>
        <title>Sakani Restro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-row overflow-hidden">
        <div className="flex w-3/4 flex-col">
          <PosHeader />
          <PosBody allFood={props.allFood}/>
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
