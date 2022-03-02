import './styles/global.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Head from "next/head";
import NavigitionBar from '../components/NavigitionBar'
import HeadBannerGalaxy from '../components/HeadBannerGalaxy'
import Gameplay from '../components/Gameplay'
import DragonTypes from '../components/DragonTypes'
// import Tokenomics from '../components/Tokenomics'
import Roadmap from '../components/Roadmap'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

export default function App() {
  return (
    <main>
      <Head>
        <title>Naughty Dragon - Feed, Breed and Battle in the fantasy world of Naughty Dragon</title>
        <meta charSet="UTF-8" />
        <meta name="description" content='Naughty Dragon - Feed, Breed and Battle in the fantasy world of Naughty Dragon' />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Naughty Dragon Inc." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavigitionBar />
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
