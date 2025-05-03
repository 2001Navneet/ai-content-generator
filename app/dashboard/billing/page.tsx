import BillingCard from "../_components/BillingCard";

export default function BillingPage() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 justify-center">
      <BillingCard
        title="Free Plan"
        price="Free"
        description="Access to limited features"
        planId=""
      />
      <BillingCard
        title="Pro Plan"
        price={`₹399/month`}
        description="Access to all premium features"
        planId="plan_QQ7pCpR19RiPaL" // Replace with your actual Razorpay Plan ID
      />
    </div>
  );
}
