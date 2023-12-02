import Gallery1 from "./Components/Gallery1";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProductCard1 from './Components/ProductCard1';
import video1 from '../assets/Videos/video1.mp4';
import video2 from '../assets/Videos/video2.mp4';

export default function App() {
  const productCardList1 = [
    'Find alternatives for tools you use or suggestions of new ones',
    'Discover new product categories you might want to consider next',
    'Build product assessment matrices',
    'AI suggestions of evaluation criteria (CTQs) & weights; or define your own',
    'Learn what tools others like you considered; or define your list',
  ]

  const productCardList2 = [
    'Intuitive UI to manage blocked items',
    'Personalized whitelists with smart AI-generated suggestions',
    'Companion Mode for smooth onboarding and worry-free setup',
    'Notification levels aligned to your needs, including never-miss-out',
    'Bite-sized insights on sender companies',
    'Full control of mail metadata stored',
  ]

  return (
    <>
      <Navbar />
      <Hero />
      <Gallery1 />
      <ProductCard1 subTitle='CHOOSE THE RIGHT TOOL WITH CONFIDENCE' title='Product Evaluation Tool' list={productCardList1} videoSrc={video1} />
      <ProductCard1 subTitle='TAKE BACK CONTROL OF YOUR INBOX' title='Email Assistant' list={productCardList2} videoSrc={video2} isReverse={true} />
    </>
  )
}