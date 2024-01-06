// import components
import Hero from '../../Components/Hero/Hero';
import Gallery2 from '../../Components/Gallery/Gallery2';
import ProductCard from '../../Components/Card/ProductCard';
import Testimonials from '../../Components/Testimonials/Testimonials';
import PrivacyCertifications from '../../Components/PrivacyCertifications/PrivacyCertifications';
import FAQs from '../../Components/FAQs/FAQs';
import Features from '../../Components/Features/Features';
import CTAProduct from '../../Components/CTA/CTAProduct';

// import data
import productData from '../../Data/productData';
import emailAssistantData from '../../Data/emailAssistantData';
import questions from '../../Data/questions.json';
import tabs from '../../Data/featuresData';
import Products from '../../Components/Products/Products';


import { MdEmail, MdProductionQuantityLimits } from 'react-icons/md'; 

const products = [
  {
    title: 'Email Assistant',
    description: 'A smart AI-powered email assistant that helps you manage your inbox efficiently.',
    icon: <MdEmail />,
    data: (
      <div className="bg-white p-4 rounded shadow h-full">
        <p className="text-lg font-bold mb-2">Email Assistant</p>
        <p className="text-gray-700">
          A smart AI-powered email assistant that helps you manage your inbox efficiently. This is a more detailed description of the Email Assistant product, fully styled with Tailwind CSS based on the Neferdata identity.
        </p>
      </div>
    ),
  },
  {
    title: 'Product Name',
    description: 'Brief description of the product. This can be a range of 50 to 150 letters.',
    icon: <MdProductionQuantityLimits />,
    data: (
      <div className="bg-white p-4 rounded shadow h-full">
        <p className="text-lg font-bold mb-2">Product Name</p>
        <p className="text-gray-700">
          Brief description of the product. This can be a range of 50 to 150 letters. This is a more detailed description of the product, fully styled with Tailwind CSS based on the Neferdata identity.
        </p>
      </div>
    ),
  },
  {
    title: 'Email Assistant',
    description: 'A smart AI-powered email assistant that helps you manage your inbox efficiently.',
    icon: <MdEmail />,
    data: (
      <div className="bg-white p-4 rounded shadow h-full">
        <p className="text-lg font-bold mb-2">Email Assistant</p>
        <p className="text-gray-700">
          A smart AI-powered email assistant that helps you manage your inbox efficiently. This is a more detailed description of the Email Assistant product, fully styled with Tailwind CSS based on the Neferdata identity.
        </p>
      </div>
    ),
  },
  {
    title: 'Product Name',
    description: 'Brief description of the product. This can be a range of 50 to 150 letters.',
    icon: <MdProductionQuantityLimits />,
    data: (
      <div className="bg-white p-4 rounded shadow h-full">
        <p className="text-lg font-bold mb-2">Product Name</p>
        <p className="text-gray-700">
          Brief description of the product. This can be a range of 50 to 150 letters. This is a more detailed description of the product, fully styled with Tailwind CSS based on the Neferdata identity.
        </p>
      </div>
    ),
  },
  {
    title: 'Email Assistant 2',
    description: 'A smart AI-powered email assistant that helps you manage your inbox efficiently.',
    icon: <MdEmail />,
    data: (
      <div className="bg-white p-4 rounded shadow h-full">
        <p className="text-lg font-bold mb-2">Email Assistant</p>
        <p className="text-gray-700">
          A smart AI-powered email assistant that helps you manage your inbox efficiently. This is a more detailed description of the Email Assistant product, fully styled with Tailwind CSS based on the Neferdata identity.
        </p>
      </div>
    ),
  },
  {
    title: 'Product Name 2',
    description: 'Brief description of the product. This can be a range of 50 to 150 letters.',
    icon: <MdProductionQuantityLimits />,
    data: (
      <div className="bg-white p-4 rounded shadow h-full">
        <p className="text-lg font-bold mb-2">Product Name</p>
        <p className="text-gray-700">
          Brief description of the product. This can be a range of 50 to 150 letters. This is a more detailed description of the product, fully styled with Tailwind CSS based on the Neferdata identity.
        </p>
      </div>
    ),
  },
];

const App = () => {
  return (
    <>
      <Hero />
      <Gallery2 />
      <ProductCard {...productData} />
      <ProductCard {...emailAssistantData} />
      <PrivacyCertifications />
      <Testimonials />
      <Features tabs={tabs} />
      <FAQs
        faqs="FAQs"
        faqsP=" Here are some of the most common questions we get asked. If you have
      other questions, please"
        questions={questions} />
      <CTAProduct />

      <Products products={products}/>
    </>

  );
};

export default App;

