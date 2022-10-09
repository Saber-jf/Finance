import React from "react";

export default function Header() {
  return (
    <div className="grid grid-cols-4 h-24 items-center ">
      <div className=" bg-[#fcf5ea] flex justify-center h-full items-center">
        FinaceCafe
      </div>
      <div className=" bg-[#9644e4] flex justify-center items-center h-full ">
        Coins
      </div>
      <div className=" bg-[#b86262] flex justify-center h-full items-center ">
        News
      </div>
      <div className=" bg-[#798019] flex justify-center h-full items-center">
        Contect
      </div>
    </div>
  );
}
