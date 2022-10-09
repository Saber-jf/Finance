import axios from "axios";
import React, { useEffect, useState } from "react";
import CoindetailsList from "./CoindetailsList";

export default function CoinList() {
  const [coins, setCoins] = useState("");
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "776db0c613msh80f83f8336ecc9ap1dd3c6jsn071b2a28693e",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
  console.log(coins);
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-5 items-center  w-full mt-5">
        <div className=" flex space-x-2 items-center justify-center ">
          İŞLEM
        </div>
        <div className=" text-center text-[#1e2329] text-sm flex flex-col ">
          fiyat
        </div>
        <span className="flex justify-center">24S DEĞİŞİM</span>
        <span className="hidden md:flex justify-center">haftalik DEĞİŞİM</span>
        <div className="hidden md:flex justify-center  ">FİYAT GRAFiĞi</div>
      </div>
      <div className="p-2 space-y-2 divide-y-[1px] shadow-md rounded-xl h-full ">
        <CoindetailsList />
        <CoindetailsList />
        <CoindetailsList />
        <CoindetailsList />
        <CoindetailsList />
        <CoindetailsList />
        <CoindetailsList />
        <CoindetailsList />
        <CoindetailsList />
      </div>
    </>
  );
}
