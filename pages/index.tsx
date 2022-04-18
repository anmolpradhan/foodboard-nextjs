import type { NextPage } from 'next'
import Head from 'next/head'
import PosHeader from '../components/PosHeader'
import SidebarTransaction from '../components/sidebars/SidebarTranscations'
import SideBarTakeOrder from '../components/sidebars/SideBarTakeOrder'
import PosBody from '../components/PosBody'
import { useRecoilState } from "recoil";
import { orderDetailsState}  from '../lib/recoil-atoms';
import _ from "lodash";

const Home: NextPage = () => {
  const [orderDetails] = useRecoilState(orderDetailsState);
  return (
    <div className="">
      <Head>
        <title>Sakani Restro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row h-screen overflow-hidden">
        <div className='flex flex-col w-3/4'>
        <PosHeader />
        <PosBody />
        </div>
        {_.isEmpty(orderDetails)?<SideBarTakeOrder/>:<SidebarTransaction orderDetails={orderDetails}/>}
        </div>
    </div>
  )
}

export default Home
