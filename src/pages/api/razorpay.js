// import { nanoid } from "nanoid";
const Razorpay = require("razorpay");

export default async function handler(req, res) {
  const orderBody = JSON.parse(req.body);
  if (req.method === "POST") {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const payment_capture = 1;
    const amount = orderBody.total;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: orderBody._id,
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}
