import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>LwaziNF :: Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
