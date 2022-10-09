import React from "react";

export default function tests() {
  return (
    <div className="grid grid-cols-1">
      <div className=" w-full grid grid-cols-2 h-screen ">
        <div className="col-span-1 bg-zinc-500 h-full w-full "></div>
        <div className="col-span-1 bg-amber-400 "></div>
      </div>
      <div className=" w-full grid grid-cols-2 h-screen ">
        <div className="col-span-1 bg-yellow-900 "></div>
        <div className="col-span-1 bg-red-400 "></div>
      </div>
    </div>
  );
}
