'use client";';
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { Button } from "@/components/ui/button";
import { db } from "@/public/utils/db";
import { AIOutput } from "@/public/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect, useState } from "react";

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );
  const [maxWords, setMaxWords] = useState(0);

  useEffect(() => {
    user && GetData();
    user && IsUserSubscribe();
  }, [user]);
  const GetData = async () => {
    const result: any = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
    GetTotalUsage(result);
  };
  const IsUserSubscribe = async () => {
    const result = await db
      .select()
      .from(userSubscription)
      .where(
        eq(userSubscription.email, user?.primaryEmailAddress?.emailAddress)
      );
    if (result) {
      setUserSubscription(true);
      setMaxWords(100000);
    }
  };
  const GetTotalUsage = (result: any) => {
    let total: number = 0;
    result.forEach((element: any) => {
      total = total + Number(element.aiResponse?.length);
    });
    setTotalUsage(total);
  };
  return (
    <div className="m-5">
      <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: (totalUsage / maxWords) * 100 + "%" }}
          ></div>
        </div>
        <h2 className="text-sm my-2">
          {totalUsage}/{maxWords}Credit Used
        </h2>
      </div>
      <Button variant={"secondary"} className="w-full my-3 text-[#9981f9] ">
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;
