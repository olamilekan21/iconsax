import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Iconsax</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
