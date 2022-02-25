import './styles/global.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavigitionBar from '../components/NavigitionBar'
import HeadBanner from '../components/HeadBanner'
import Gameplay from '../components/Gameplay'
import DragonTypes from '../components/DragonTypes'
import Tokenomics from '../components/Tokenomics'
import Roadmap from '../components/Roadmap'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

export default function App() {
  return (
    <main>
      <NavigitionBar />
      <HeadBanner />
      <Gameplay />
      <DragonTypes />
      <Tokenomics />
      <Roadmap />
      <Partners />
      <Footer />
    </main>
  )
}
