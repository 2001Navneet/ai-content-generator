// "use client";
// import React from "react";
// import axios from "axios";
// import { Loader2Icon } from "lucide-react";
// export default function BillingCard({ title, price, description, planId }) {
//   const [loading, setLoading] = React.useState(false);
//   const CreateSubscription = () => {
//     setLoading(true);
//     axios.post("/app/api/create-subscription", { planId }).then(
//       (res) => {
//         console.log(res.data);
//         OnPayment(res.data.id);
//       },
//       (error) => {
//         setLoading(false);
//       }
//     );
//   };
//   const OnPayment = (planId) => {
//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//       subscription_id: planId,
//       name: "Navneet_verma Apps",
//       description: `Monthly Subscription for ${title}`,
//       handler: async (res) => {
//         console.log(res);
//         setLoading(false);
//       },
//     };
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div className="p-6 border rounded-lg shadow-md text-center w-full md:w-1/2">
//       <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
//       <h2 className="text-2xl font-bold">{title}</h2>
//       <p className="text-gray-500">{description}</p>
//       <p className="text-3xl mt-4">{price}</p>
//       {price !== "Free" && (
//         <button
//           disabled={loading}
//           onClick={() => CreateSubscription()}
//           className="mt-6 px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
//         >
//           {loading && <Loader2Icon className="animate-spin" />}
//           Buy Now
//         </button>
//       )}
//     </div>
//   );
// }
"use client";
import React, { useContext } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import Script from "next/script";
import { UserSubscription } from "@/public/utils/schema";
import { join } from "path";
import moment from "moment";
import { useUser } from "@clerk/nextjs";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

export default function BillingCard({ title, price, description, planId }) {
  const { UserSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );
  const [loading, setLoading] = React.useState(false);
  const { user } = useUser();
  const CreateSubscription = () => {
    setLoading(true);
    axios.post("/api/create-subscription", { planId }).then(
      (res) => {
        console.log(res.data);
        OnPayment(res.data.id);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );
  };

  const OnPayment = (subscriptionId) => {
    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load.");
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subscriptionId,
      name: "Navneet_verma Apps",
      description: `Monthly Subscription for ${title}`,
      handler: async (res) => {
        console.log("Payment Success", res);
        if (res) {
          SaveSubscription(res.Razorpay_payment_id);
        }
        setLoading(false);
      },
      theme: {
        color: "#14b8a6",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  const SaveSubscription = async (paymentId) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format("DD-MM-YYYY"),
    });
    if (result) {
      window.location.reload();
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
      />
      <div className="p-6 border rounded-lg shadow-md text-center w-full md:w-1/2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <p className="text-3xl mt-4">{price}</p>
        {price !== "Free" && (
          <button
            disabled={loading}
            onClick={CreateSubscription}
            className="mt-6 px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 flex items-center justify-center gap-2"
          >
            {UserSubscription ? "Active plan" : "Buy Now"}
          </button>
        )}
      </div>
    </>
  );
}
