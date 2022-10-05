import React from "react";
import CoinListComponent from "./coinListComponent";

export default function CoinList() {
  return (
    <>
      <div className="p-2 space-y-2 divide-y-[1px] shadow-md rounded-xl ">
        <CoinListComponent />
        <CoinListComponent />
        <CoinListComponent />
        <CoinListComponent />
        <CoinListComponent />
        <CoinListComponent />
        <CoinListComponent />
        <CoinListComponent />
        <CoinListComponent />
      </div>
    </>
  );
}
