import React from "react";
import CoinBoxContainer from "./coin/coinBoxContainer";
import CoindetailsList from "./coin/CoindetailsList";
import CoinList from "./coin/CoinList";

import NewsContainer from "./news/NewContainer";
import NewSMolecules from "./news/Newsmolecules";
import Image from "next/image";
import SIdeNavbar from "./modules/SIdeNavbar";

export default function HomeTemplate() {
  return (
    <div className="flex">
      <div className="col-span-1 relative">
        <SIdeNavbar />
      </div>
      <div className=" w-full grid grid-cols-12 ">
        <div className="col-span-12">
          <div className=" w-full grid grid-cols-5 h-[70vh] ">
            <div className="col-span-3 bg-[#fcf5ea] h-full w-full overflow-hidden ">
              <CoinList />
            </div>
            <div className="col-span-2 bg-[#9644e4] ">
              <div className="flex flex-col justify-start px-5 w-full h-full max-w-7xl mx-auto ">
                <div className="">
                  <h1 className="text-[1.6rem] md:text-[3rem] font-bold text-white">
                    WelCome.
                  </h1>
                  <p className=" text-[1.2rem] md:text-[2em] font-semibold text-white  ">
                    Finance cafe'te 350'den fazla kripto parayı satın alın,
                    saklayın ve alım-satım yapın
                  </p>
                  <div className=" relative w-full text-[15px] md:text-[20px] mt-8  ">
                    <input
                      placeholder="ara ve başla......."
                      className=" p-4 mb-8 w-full h-10 md:h-14 rounded-full focus:outline-none"
                    />

                    <div className=" absolute top-0 right-0 w-28 search h-10 md:h-14 rounded-full flex items-center justify-center ">
                      <h1 className="text-white font-semibold text-[15px] md:text-[20px]">
                        Search
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full grid grid-cols-2 h-screen ">
            <div className="col-span-1 bg-[#e2d5d5] ">
              <NewsContainer />
            </div>
            <div className="col-span-1 bg-[#f1ecec] ">
              <div>
                <div className="w-full h-[200px] relative">
                  <Image src="/image/btc-chart.svg" layout="fill" alt="btc" />
                </div>
                <ul className="flex text-[15px] text-[#666666] font-bold space-x-4 justify-center ">
                  <li>24h</li>
                  <li>1w</li>
                  <li>1m</li>
                  <li>3m</li>
                  <li>1y</li>
                  <li>ALL</li>
                </ul>
                <CoinBoxContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
