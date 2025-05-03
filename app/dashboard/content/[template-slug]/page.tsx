"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { db } from "@/public/utils/db";
import { AIOutput } from "@/public/utils/schema";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

interface Template {
  params: {
    "template-slug": string;
  };
  slug: string;
}

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY as string;

function CreateNewContent(prop: Template) {
  const selectedTemplate: any | TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === prop.params["template-slug"]
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const router = useRouter();
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );
  const GenerateAIContent = async (formData: any) => {
    if (totalUsage >= 10000 && !userSubscription) {
      router.push("/dashboard/billing");
      return;
    }
    setLoading(true);

    const SelectedPrompt = selectedTemplate?.aiPrompt ?? "";
    const FinalAIPrompt = `${JSON.stringify(formData)}, ${SelectedPrompt}`;

    // ✅ Correct Gemini API usage
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const chat = await model.startChat(); // start a new chat session

    const result = await chat.sendMessage(FinalAIPrompt);
    const response = result.response;
    const text = response.text();

    setAiOutput(result?.response.text() || "No response from AI");

    // setAiOutput("Something went wrong while generating content.");
    await SaveInDb(formData, selectedTemplate?.slug, result?.response.text());

    setLoading(false);
  };
  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData || "",
      templateSlug: slug || "",
      aiResponse: aiResp || "",
      createdBy: user?.primaryEmailAddress?.emailAddress || "unknown",
      createdAt: moment().format("DD/MM/YYYY ") || "",
    });
    console.log(result);
  };
  return (
    <div>
      <Link href={"/dashboard"}>
        <Button className="bg-gradient-to-br from-blue-500 to-purple-500 my-2 mx-2 cursor-pointer hover:scale-105 transition-all">
          <ArrowLeft />
          Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
