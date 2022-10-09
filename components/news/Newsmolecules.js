import React from "react";

import Image from "next/image";

export default function NewSMolecules() {
  return (
    <div className=" gird grid-cols-1 xl:grid-cols-2  hover:scale-[1.031] transition-all bg-gray-100 rounded-xl mx-4 ">
      <div className="w-full grd grid-cols-6 md:grid-cols-1 space-x-3 ">
        <div className=" col-span-2 rounded-xl w-full h-[130px] overflow-hidden relative  ">
          <Image src="/image/news.jpeg" layout="fill" alt="btc" />
        </div>

        <div className="col-span-4 md:mt-3">
          <span className="text-sm font-semibold flex flex-col">
            Coinbase CEO announces documentary on cryptocurrency ....
          </span>
          <div className=" divide-x-2 flex items-center">
            <span className="text-xs text-[#999999] pr-1">8 hours ago</span>
            <div className="pl-1 space-x-1">
              <span className="text-xs text-[#999999] ">Coinbase</span>
              <span className="text-xs text-[#513486] ">Dogecoin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
