import { SideBarUserDetails } from './SideBarUserDetails'
import { useRecoilState } from 'recoil'
import { sidebarSwitcherState } from '../../../lib/recoil-atoms'
const SideBarPayment = () => {
  const [sidebarSwitcher, setSideBarSwitcher] =
  useRecoilState(sidebarSwitcherState)

  return (
    <div className="sidebar">
      <SideBarUserDetails />
      <div className="flex h-full w-full flex-col place-content-center gap-7">
        <h1 className="text-center font-light">Payment</h1>
        <button className="primary-button" name="dinein" onClick={()=>setSideBarSwitcher("paymentmethod")}>
          Pay Now
        </button>
        <button className="primary-button" name="takeaway">
          Pay Later and Print Invoice
        </button>
      </div>
    </div>
  )
}

export default SideBarPayment
