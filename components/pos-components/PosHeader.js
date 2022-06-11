import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

function PosHeader() {
  const router = useRouter();
  return (
    <div className="g-gray-300 flex flex-row space-x-4 bg-white py-2 pl-20 font-sans text-sm">
      <Link href="/pos/table">
        <a className="topbar-link">Table</a>
      </Link>
      <Link href="/pos">
        <a className={router.pathname == '/pos' ? 'text-primary topbar-link' : 'topbar-link'}>POS</a>
      </Link>
      <Link href="/pos/order">
        <a className={router.pathname == '/pos/order' ? 'text-primary topbar-link' : 'topbar-link'}>Order Status</a>
      </Link>
      <Link href="/pos/payment">
        <a className="topbar-link">Payment</a>
      </Link>
    </div>
  )
}

export default PosHeader
