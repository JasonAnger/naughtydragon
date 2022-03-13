import Head from "next/head";
import Image from 'next/image';
import NavigitionBar from '../components/NavigitionBar'
import HeadBannerGalaxy from '../components/HeadBannerGalaxy'
import Gameplay from '../components/Gameplay'
import DragonTypes from '../components/DragonTypes'
// import Tokenomics from '../components/Tokenomics'
import Roadmap from '../components/Roadmap'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import React, { useState, useEffect } from 'react';

import './styles/global.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/fonts.css'

export const config = { amp: true }

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main>
      <Head>
        <title>Naughty Dragon - Feed, Breed and Battle in the fantasy world of Naughty Dragon</title>
        <meta charSet="UTF-8" />
        <meta name="description" content='Naughty Dragon - Feed, Breed and Battle in the fantasy world of Naughty Dragon' />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Naughty Dragon Inc." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="tags" content='NaughtyDragon, Metaverse, MetaFi, P2E, BSC' />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <meta name="google" content="notranslate" />
        <link
          rel="preload"
          href="/fonts/Space Comics.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Heavitas.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
      </Head>
      <NavigitionBar />
      <div className={`pointer fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 ${scrollPosition > 100 ? 'flex' : 'hidden'}`} onClick={() => { window.scrollTo(0, 0); }}>
        <Image src='/totop.png' width={80} height={80}/>
      </div>
      <HeadBannerGalaxy />
      <Gameplay />
      <DragonTypes />
      {/* <Tokenomics /> */}
      <Roadmap />
      <Partners />
      <Footer />
    </main>
  )
}
