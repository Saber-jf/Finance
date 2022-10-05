import React from "react";
import { MdOutlineArrowDropUp } from "react-icons/md";
import Image from "next/image";

export default function CoinCard() {
  return (
    <div className="w-full  bg-[#30505c] bg-opacity-[.1] flex items-center justify-center rounded-lg py-2 ">
      <div className="p-4 flex flex-col gap-4 justify-center items-center">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8">
            <Image src="/image/btc.png" width={100} height={100} alt="btc" />
          </span>
          <span className="font-bold text-[17px] text-[#30505c]">BiteCoin</span>
        </div>
        <div className="flex gap-2 justify-center items-center ">
          <div className="h-12 w-12 rounded-full bg-[#00796B] bg-opacity-[.50] text-[12px] text-white text-center flex flex-col justify-center items-center border border-[#14d199]">
            <span>3.97%</span>
            <div className="text-base">
              <MdOutlineArrowDropUp />
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold">$19.920</p>
            <p>&#8378;506120</p>
          </div>
        </div>
        {/* <span className="text-xs">
          <img className="" src={btcChart} alt="btcChart" />
        </span> */}
        <p className="text-xs text-[#666666]">Martket Size: $46,000,000,000</p>
      </div>
    </div>
  );
}
