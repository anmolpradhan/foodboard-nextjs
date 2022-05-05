// @ts-nocheck
import dbConnect from '../../lib/dbConnect'
import OrderDetails from '../../models/OrderDetails'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
      try {
        const orderDetails = await OrderDetails.find({})
        res.status(200).json({ success: true, data: orderDetails })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const orderDetails = await OrderDetails.create(req.body)
        res.status(200).json({ success: true, data: orderDetails })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
  }
}
