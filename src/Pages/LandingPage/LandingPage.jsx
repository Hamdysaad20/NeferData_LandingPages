import React from "react";

// import components
import Hero from "../../Components/Hero/Hero";
import Gallery2 from "../../Components/Gallery/Gallery2";
import ProductCard from "../../Components/Card/ProductCard";
import Testimonials from "../../Components/Testimonials/Testimonials";
import PrivacyCertifications from "../../Components/PrivacyCertifications/PrivacyCertifications";
import FAQs from "../../Components/FAQs/FAQs";
import Features from "../../Components/Features/Features";
import CTAProduct from "../../Components/CTA/CTAProduct";


import questions from "../../Data/questions.json";
import tabs from "../../Data/featuresData";

const App = () => {
  return (
    <>
      <Hero />
      <Gallery2 /> 
      <Features tabs={tabs} />

      <Testimonials />
      <PrivacyCertifications />
      
      <CTAProduct />
      <FAQs
        faqs='FAQs'
        faqsP=' Here are some of the most common questions we get asked. If you have
      other questions, please'
        questions={questions}
      />
    </>
  );
};

export default App;
