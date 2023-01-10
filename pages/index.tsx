import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CenterStage_ from "../components/CenterStage_";

const Home: NextPage = () => {
  return (
    <main
      className={`flex w-full h-screen flex-col items-center justify-center`}
    >
      <CenterStage_/>
    </main>
  );
};

export default Home;
