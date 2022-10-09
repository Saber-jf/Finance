import React from "react";
import CoinSlider from "./CoinSlider";
// import ad from "../../public/ad.gif";
import had from "../../public/image/h-ad.png";
import Image from "next/image";

// import ad from "../photo/ad.gif";
// import had from "../photo/h-ad.png";

export default function CoinBoxContainer() {
  return (
    <div>
      <div className="grid space-y-2 grid-cols-1 md:grid-cols-12 shadow-xl py-4 rounded-xl">
        <div className="hidden md:block col-span-2 border-8">
          {/* <Image
            src="/ad.gif"
            layout="fill"
            width={150}
            height={100}
            alt="btc"
          /> */}
        </div>
        <div className="col-span-4 space-y-4 ml-3">
          <p className="font-bold">Popüler kripto paralar</p>
          <div className="space-y-4 text-base">
            <p>Tum işlem hacmi: $997.253 biliion</p>
            <p>24 saatlik işlem hacmi: $57.182 biliion</p>
            <p>BTC Piyasa Değeri : $57.182 biliion</p>
            <p>BTC Piyasa Değeri : $57.182 biliion</p>
          </div>
          <div className="space-x-3">
            <button className="w-[90px] h-8 bg-[#30505c] bg-opacity-60 rounded-r-full rounded-l-full ">
              Tum Liste
            </button>
            <button className="w-[90px] h-8 bg-[#f6c120] bg-opacity-60 rounded-r-full rounded-l-full ">
              Convertor
            </button>
          </div>
        </div>
        <div className="col-span-6">
          <CoinSlider />
        </div>
        <div>
          {/* <div className="border-2 w-full h- md:hidden">
            <img className="w-full" src={had} alt="ad" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
