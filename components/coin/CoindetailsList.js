import React from "react";
import Image from "next/image";

export default function CoindetailsList() {
  return (
    <div className="w-full hover:scale-[1.09] transition-all  ">
      <div className="grid grid-cols-3 md:grid-cols-5 items-center w-full">
        <div className=" flex space-x-2 items-center justify-center ">
          <span className="text-xs text-[#707070] mx-1">1</span>
          <div className="w-6 h-6">
            <Image src="/image/btc.png" width={24} height={24} alt="btc" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-600 ">BTC</span>
            <span className="text-xs text-[#707070]">Bitcoin</span>
          </div>
        </div>
        <div className=" text-center text-[#1e2329] text-sm flex flex-col ">
          <span className="text-sm font-semibold text-[#1f1f1f] ">$19,935</span>
          <span className="text-xs text-[#707070]">&#8378;506120</span>
        </div>
        <span className="mx-auto  text-white text-sm flex items-center justify-center w-[65px] h-[26px] bg-[#14D199] rounded-r-full rounded-l-full">
          +2,20%
        </span>
        <span className="hidden md:flex justify-center">+2,20%</span>
        <div className="hidden md:flex justify-center">
          <Image src="/image/btc-chart.svg" width={100} height={50} alt="btc" />
        </div>
      </div>
    </div>
  );
}
