import { SideBarUserDetails } from './SideBarUserDetails'

const SideBarPayment = () => {
  return (
    <div className="sidebar">
      <SideBarUserDetails />
      <div className="flex h-full w-full flex-col place-content-center gap-7">
        <h1 className="text-center text-sm font-light">
          Payment
        </h1>
        <button className="primary-button" name="dinein" >Pay Now</button>
        <button className="primary-button" name="takeaway">Pay Later</button>
</div>
    </div>
  )
}

export default SideBarPayment
