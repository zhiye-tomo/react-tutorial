import "../styles/globals.css";
import Head from "next/head";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBGLightblue } from "src/hooks/useBGLightblue";

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();

  const foo = 123;
  useBGLightblue();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} foo={123} />
    </>
  );
}

export default MyApp;
