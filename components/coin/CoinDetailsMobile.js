import React from "react";
import Image from "next/image";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineArrowDropUp } from "react-icons/md";

export default function CoinDetails() {
  return (
    <div className="md:hidden">
      <h1 className="text-[24px] font-bold text-center py-4">
        ani bitcoin fiyat
      </h1>
      <div className="flex items-center justify-between bg-[#e2edf15e] py-4 ">
        <div className="flex items-center space-x-2">
          <span>
            <Image src="/image/btc.png" width={40} height={40} alt="btc" />
          </span>
          <span className="text-[24px] font-bold">Bitcoin</span>
          <span className="text-[18ox] font-semibold text-center">(BTC)</span>
        </div>
        <div className="text-[32px]">
          <FiShare2 />
        </div>
      </div>

      <div className="flex gap-2 justify-center items-center mt-4 ">
        <div className="h-[55px] w-[55px] rounded-full bg-[#06302b] bg-opacity-[.50] text-[12px] text-white text-center flex flex-col justify-center items-center border border-[#14d199]">
          <span>3.97%</span>
          <div className="text-base">
            <MdOutlineArrowDropUp />
          </div>
        </div>
        <div>
          <p className="text-[26px] font-semibold">$19.920</p>
          <p className="text-[22px] text-[#666666]">&#8378;506120</p>
        </div>
      </div>
      <div className="w-full h-[200px] relative">
        <Image src="/image/bit.png" layout="fill" alt="btc" />
      </div>
      <ul className="flex text-[15px] text-[#666666] font-bold space-x-4 justify-center ">
        <li>24h</li>
        <li>1w</li>
        <li>1m</li>
        <li>3m</li>
        <li>1y</li>
        <li>ALL</li>
      </ul>
      <div className="grid grid-cols-2 gap-2  ">
        <div className="flex justify-center ">
          <div className="px-2 h-[40px] bg-green-700 rounded-l-full  text-white  font-bold flex justify-center items-center ">
            BTC
          </div>
          <input className="bg-gray-100 rounded-r-full h-[40px] w-[70%] max-w-[150px] " />
        </div>
        <div className="flex justify-center">
          <div className="px-2 h-[40px] bg-green-700 rounded-l-full  text-white  font-bold flex justify-center items-center ">
            BTC
          </div>
          <input className="bg-gray-100 rounded-r-full h-[40px] w-[70%] max-w-[150px] " />
        </div>
      </div>
    </div>
  );
}
