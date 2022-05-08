import { SideBarUserDetails } from './SideBarUserDetails'
import { useRecoilState } from 'recoil'
import { sidebarSwitcherState } from '../../../lib/recoil-atoms'

const SideBarPaymentMethod = () => {
  const [sidebarSwitcher, setSideBarSwitcher] =
    useRecoilState(sidebarSwitcherState)
  return (
    <div className="sidebar gap-3 text-sm">
      <SideBarUserDetails />
      <hr />
      <div className="mt-8 grid w-full grid-cols-5 border-2 border-dashed border-primary py-2 px-1 text-xs">
        <span>Add Note</span>
        <span></span>
        <span className="text-primary">Discount</span>
        <span className="text-primary">Coupon</span>
        <span className="text-primary">Note</span>
      </div>
      <div className="grid w-full grid-cols-2 font-normal">
        <span>Sub Total</span>
        <span className="justify-self-end">Rs. 200/-</span>
      </div>
      <div className="grid w-full grid-cols-2 font-normal">
        <span>Discount</span>
        <span className="justify-self-end">Rs. 200/-</span>
      </div>
      <div className="grid w-full grid-cols-2 font-normal">
        <span>Coupon</span>
        <span className="justify-self-end">Rs. 200/-</span>
      </div>
      <hr />
      <div className="grid w-full grid-cols-2 text-base font-medium">
        <span>Payable Amount</span>
        <span className="justify-self-end">Rs. 200/-</span>
      </div>
      <hr />
      <button className="primary-button mt-10" name="cash">
        Cash
      </button>
      <button
        className="primary-button"
        name="card"
        onClick={() => alert('This feature is in developing phase')}
      >
        Card
      </button>
    </div>
  )
}

export default SideBarPaymentMethod
