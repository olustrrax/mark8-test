import App from "next/app"
import React from "react"
import Head from "next/head"

import "../style/index.less"
import '../style/fonts.less'
class MyApp extends App {
  render(){
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Mark 8</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
           <link
            href="/fonts/DB Helvethaica X v3.2_1.ttf"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
