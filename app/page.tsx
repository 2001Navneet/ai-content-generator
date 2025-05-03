// app/page.tsx
// import { redirect } from "next/navigation";

// export default function Home() {
//   redirect("/dashboard");
// }
"use client";

import { useRouter } from "next/navigation";
import { Sparkles, Bot, FileText, Rocket } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          <div className="relative inline-block text-center">
            <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400 relative z-10">
              AI Content Generator
            </span>

            {/* Rotating Circle with Flash of Light */}
          </div>
        </h1>
        <p className="font-medium mb-3 text-lg text-gray-400 max-w-2xl">
          Transforming Ideas into Words, Powered by AI
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-200"
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 border-t border-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          <Feature
            icon={<Sparkles className="w-10 h-10 text-yellow-400 mx-auto" />}
            title="Creative Output"
            desc="Unique and engaging content using Gemini's advanced language model."
          />
          <Feature
            icon={<Bot className="w-10 h-10 text-cyan-400 mx-auto" />}
            title="Gemini API"
            desc="Integrated with Google’s Gemini API for powerful AI results."
          />
          <Feature
            icon={<FileText className="w-10 h-10 text-green-400 mx-auto" />}
            title="Multi-format Support"
            desc="Generate blogs, ads, captions, and product descriptions."
          />
          <Feature
            icon={<Rocket className="w-10 h-10 text-pink-400 mx-auto" />}
            title="Instant Results"
            desc="Fast generation for real-time productivity."
          />
        </div>
      </section>
    </div>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <div>
      {icon}
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-400">{desc}</p>
    </div>
  );
}
