import Head from "next/head";
import Image from "next/image";
import CoinBoxContainer from "../components/coin/coinBoxContainer";
import CoinCard from "../components/coin/CoinCart";
import CoindetailsDesktop from "../components/coin/CoindetailsDesktop";
import CoinDetailsMobile from "../components/coin/CoinDetailsMobile";
import Header from "../components/modules/Header";
import SearchBox from "../components/modules/SearchBox";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="mb-[500px]">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchBox />
      <div className="max-w-7xl mx-auto pt-20 px-2">
        <CoinBoxContainer />
        <CoinDetailsMobile />
        <CoindetailsDesktop />
      </div>
    </div>
  );
}
