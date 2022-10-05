import React from "react";
import btc from "../photo/btc.png";
import btcChart from "../photo/btc-chart.svg";

export default function CoinListComponent() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 md:grid-cols-5 items-center w-full">
        <div className=" flex space-x-2 items-center justify-center ">
          <span className="text-xs text-[#707070] mx-1">1</span>
          {/* <span className="w-6 h-6">
            <img className="" src={btc} alt="btc" />
          </span> */}
          <div className="flex flex-col">
            <span className="font-semibold">BTC</span>
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
        {/* <div className="hidden md:flex justify-center">
          <img className="" src={btcChart} alt="btcChart" />
        </div> */}
      </div>
    </div>
  );
}
