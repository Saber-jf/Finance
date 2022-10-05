import React from "react";
import { FiShare2, FiStar } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { FaBalanceScaleLeft } from "react-icons/fa";
import Image from "next/image";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { GiPodium } from "react-icons/gi";
import { TiAttachment } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";

FiStar;

export default function CoindetailsDesktop() {
  return (
    <div className="mt-10">
      <div className="px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-1 border-r flex-col justify-between ">
            <FiStar />
            <FiShare2 />
            <FaBalanceScaleLeft />
            <BsGraphUp />
          </div>
          <div className="ml-4">
            <div className="col-span-11 grid grid-cols-2  h-auto ">
              <div className="flex items-center space-x-6 h-full ">
                <div className="flex flex-col content-between ">
                  <div className="flex items-center space-x-2">
                    <span className="w-[50px] h-[50px] relative ">
                      <Image src="/image/btc.png" layout="fill" alt="btc" />
                    </span>
                    <span className="text-[30px] font-bold">Bitcoin</span>
                    <span className="text-[18ox] font-semibold text-center">
                      (BTC)
                    </span>
                  </div>
                  <div className="flex items-center mt-6 space-x-2">
                    <GiPodium />
                    <span>Rank</span>
                    <span>#1</span>
                  </div>
                </div>

                <div className="flex gap-2 justify-center items-center border-b-2 pb-6  ">
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
              </div>
            </div>
            <div className="">
              <div>
                <div className="">
                  <TiAttachment />
                  <span>https://react-icons.github.io/</span>
                </div>
                <div>
                  <BsSearch />
                  <span>https://react-icons.github.io/</span>
                </div>
                <div>
                  <FiShare2 />
                  <span>https://react-icons.github.io/</span>
                </div>
                <div>
                  <HiOutlineCode />
                  <span>https://react-icons.github.io/</span>
                </div>
                {/* <div>coin</div> */}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
