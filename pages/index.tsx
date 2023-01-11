import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CenterStage_ from "../components/CenterStage_";
import LoginPage_ from "../components/LoginPage_";
import { useRecoilState } from "recoil";
import { Navi } from "../components/atoms/atoms";

const Home: NextPage = () => {
  const [navi_, setNavi_] = useRecoilState(Navi);
  return (
    <main
      className={`flex w-full h-screen flex-col items-center justify-center`}
    >
      {navi_ == "centerStage" ? <CenterStage_ /> : <LoginPage_ />}
    </main>
  );
};

export default Home;
