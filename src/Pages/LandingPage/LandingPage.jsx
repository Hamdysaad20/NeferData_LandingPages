import React from 'react';

// import components
import Hero from '../../Components/Hero/Hero';
import Gallery2 from '../../Components/Gallery/Gallery2';
import ProductCard from '../../Components/Card/ProductCard';
import Testimonials from '../../Components/Testimonials/Testimonials';
import PrivacyCertifications from '../../Components/PrivacyCertifications/PrivacyCertifications';
import FAQs from '../../Components/FAQs/FAQs';
import Features from '../../Components/Features/Features';
import UseAnimations from "react-useanimations";
import CTAProduct from '../../Components/CTA/CTAProduct';
import Chart from '../../Components/Chart/Chart';

// import data
import chartData from '../../Data/chartData.json';
import productData from '../../Data/productData';
import emailAssistantData from '../../Data/emailAssistantData';
import questions from '../../Data/questions.json';
import featuresData from '../../Data/featuresData';

const App = () => {
  return (
    <>
      <Hero />
      <Gallery2 />
      <ProductCard {...productData} />
      <ProductCard {...emailAssistantData} />
      <PrivacyCertifications />
      <Testimonials />
      <Features tabs={featuresData} />
      <FAQs
        faqs="FAQs"
        faqsP=" Here are some of the most common questions we get asked. If you have
      other questions, please"
        questions={questions} />
      <CTAProduct />
      <Chart chartData={chartData} />
    </>

  );
};

export default App;

