// We're beginning by importing necessary libraries, components, images, and videos
import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Gallery from '../../Components/Gallery/Gallery';
import ProductCard from '../../Components/Card/ProductCard';
import Testimonials from '../../Components/Testimonials/Testimonials';
import PrivacyCertifications from '../../Components/PrivacyCertifications/PrivacyCertifications';
import FAQs from '../../Components/FAQs/FAQs';
import Keith_Hadi_Avatar from '../../assets/Images/Keith_Hadi_Avatar.png';
import Mark_Walz_Avatar from '../../assets/Images/Mark_Walz_Avatar.png';
import video1 from '../../assets/Videos/video1.mp4';
import video2 from '../../assets/Videos/video2.mp4';

const App = () => {
  const productData = {
    subTitle: 'CHOOSE THE RIGHT TOOL WITH CONFIDENCE',
    title: 'Product Evaluation Tool',
    list: [
      'Find alternatives for tools you use or suggestions of new ones',
      'Discover new product categories you might want to consider next',
      'Build product assessment matrices',
      'AI suggestions of evaluation criteria (CTQs) & weights; or define your own',
      'Learn what tools others like you considered; or define your list',
    ],
    videoSrc: video1,
    isReverse: true
  };

  const emailAssistantData = {
    subTitle: 'TAKE BACK CONTROL OF YOUR INBOX',
    title: 'Email Assistant',
    list: [
      'Intuitive UI to manage blocked items',
      'Personalized whitelists with smart AI-generated suggestions',
      'Companion Mode for smooth onboarding and worry-free setup',
      'Notification levels aligned to your needs, including never-miss-out',
      'Bite-sized insights on sender companies',
      'Full control of mail metadata stored',
    ],
    videoSrc: video2,
    isReverse: false
  };

  const testimonialData1 = {
    imgSrc: Keith_Hadi_Avatar,
    name: 'Keith Hadi',
    jobTitle: 'VP of Vehicle Engineering',
    companyName: 'May Mobility',
    message: "Neferdata has completely transformed my email experience. It efficiently filters out unwanted emails, ensuring my inbox remains clutter-free. I no longer waste time sifting through irrelevant emails, and I can focus on what's truly important.",
  };

  const testimonialData2 = {
    imgSrc: Mark_Walz_Avatar,
    name: 'Mark Walz',
    jobTitle: 'Chief Technology Officer',
    companyName: 'SpotOn',
    message: "Neferdata has completely transformed my email experience. It efficiently filters out unwanted emails, ensuring my inbox remains clutter-free. I no longer waste time sifting through irrelevant emails, and I can focus on what's truly important.",
    classes: '',
  };

  const questions = [
    {
      title: "question 1",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam quis voluptas fuga iusto eius cupiditate tenetur pariatur aliquam, quas quidem consequuntur ab quae incidunt ratione sapiente modi quam maiores?"
    },
    {
      title: "question 2",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam quis voluptas fuga iusto eius cupiditate tenetur pariatur aliquam, quas quidem consequuntur ab quae incidunt ratione sapiente modi quam maiores?"
    },
    {
      title: "question 3",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam quis voluptas fuga iusto eius cupiditate tenetur pariatur aliquam, quas quidem consequuntur ab quae incidunt ratione sapiente modi quam maiores?"
    },{
      title: "question 4",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam quis voluptas fuga iusto eius cupiditate tenetur pariatur aliquam, quas quidem consequuntur ab quae incidunt ratione sapiente modi quam maiores?"
    }
  ]

  // Returned JSX code is cleaner and easier to read
  return (
    <>
      <Hero />
      <Gallery />
      <ProductCard {...productData} />
      <ProductCard {...emailAssistantData} />
      <Testimonials {...testimonialData1} />
      <PrivacyCertifications />
      <Testimonials {...testimonialData2} />
      <FAQs questions={questions} />
    </>
  )
};

export default App;