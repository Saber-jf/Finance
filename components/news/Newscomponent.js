import React from "react";
import news from "../photo/news.jpeg";

export default function NewsComponent() {
  return (
    <div className=" hover:scale-[1.031] transition-all bg-gray-100 rounded-xl ">
      <div className="w-full grid grid-cols-6 md:grid-cols-1 space-x-3 ">
        {/* <span className=" col-span-2 w-full rounded-xl overflow-hidden">
          <img className="w-full" src={news} alt="btc" />
        </span> */}

        <div className="col-span-4 md:mt-3">
          <span className="text-sm font-semibold flex flex-col">
            Coinbase CEO announces documentary on cryptocurrency ....
          </span>
          <div className=" divide-x-2 flex items-center">
            <span className="text-xs text-[#999999] pr-1">8 hours ago</span>
            <div className="pl-1 space-x-1">
              <span className="text-xs text-[#999999] ">Coinbase</span>
              <span className="text-xs text-[#999999] ">Dogecoin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
