"use client";
import { FileClock, Home, Settings, Wallet, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const menuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/History",
    },

    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  const path = usePathname();
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <div className="h-screen relative p-5 shadow-md border">
      <div className="flex justify-center ">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={100}
          height={100}
          className="w-16 h-16"
        />
      </div>
      <hr className="my-5 border " />
      <div className="mt-10">
        {menuList.map((menu, index) => (
          <div
            key={index}
            onClick={() => router.push(menu.path)}
            className={`flex gap-2 mb-2 p-3 hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-400 hover:text-white rounded-lg cursor-pointer items-center ${
              path === menu.path &&
              "bg-hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-400 "
            }`}
          >
            <menu.icon className="h-6 w-6" />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
