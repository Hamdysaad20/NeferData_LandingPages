// Import necessary dependencies and components
import React from 'react';
import Gallery from '../Components/Gallery/Gallery';
import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';
import ProductCard from '../Components/Card/ProductCard';
import PrivacyCertifications from '../Components/PrivacyCertifications/PrivacyCertifications'
import video1 from '../assets/Videos/video1.mp4';
import video2 from '../assets/Videos/video2.mp4';

// App component
const App = () => {
  const productEvaluationList = [
    'Find alternatives for tools you use or suggestions of new ones',
    'Discover new product categories you might want to consider next',
    'Build product assessment matrices',
    'AI suggestions of evaluation criteria (CTQs) & weights; or define your own',
    'Learn what tools others like you considered; or define your list',
  ]

  const emailAssistantList = [
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
      <Gallery />
      <ProductCard
        subTitle='CHOOSE THE RIGHT TOOL WITH CONFIDENCE'
        title='Product Evaluation Tool'
        list={productEvaluationList}
        videoSrc={video1}
        isReverse={false}
      />
      <ProductCard
        subTitle='TAKE BACK CONTROL OF YOUR INBOX'
        title='Email Assistant'
        list={emailAssistantList}
        videoSrc={video2}
        isReverse={true}
      />
      <PrivacyCertifications />
    </>
  )
};

export default App;