import React, { useState } from "react";
import { BiNews } from "react-icons/bi";
import { FaCoins } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BsNewspaper } from "react-icons/bs";

export default function SIdeNavbar() {
  const [show, setShow] = useState("");
  console.log(show);
  return (
    <div className=" w-[150px] z-10 h-[300px] sticky top-[20%] left-0 mr-2  bg-white shadow-xl border rounded-xl grid grid-cols-1  ">
      <div className=" mx-2 flex items-center mt-4 space-x-1 font-bold ">
        <span className="text-xl text-orange-600 ">
          <FaCoins />
        </span>
        <span className="text-sm whitespace-nowrap ">Cripto paralar</span>
      </div>
      <div className=" mx-2 flex items-center mt-4 space-x-1 font-bold ">
        <span className="text-xl text-orange-600 ">
          <BiNews />
        </span>
        <span className="text-sm">Haberler</span>
      </div>
      <div className=" mx-2 flex items-center mt-4 space-x-1 font-bold ">
        <span className="text-xl text-orange-600 ">
          <BsFillInfoSquareFill />
        </span>
        <span className="text-sm whitespace-nowrap ">Hakkimizda</span>
      </div>
    </div>
  );
}
