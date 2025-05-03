import { NextResponse } from "next/server";
import Razorpay from "razorpay";

//api/create-subscription/route.js
export async function POST(req, res) {
  let instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });
  const result = await instance.subscriptions.create({
    plan_id: process.env.RAZORPAY_PLAN_ID,
    customer_notify: 1,
    total_count: 12, // 12 months or billing c
    addons: [],
    notes: {
      key1: "value1",
    },
  });
  return NextResponse.json(result);
}
