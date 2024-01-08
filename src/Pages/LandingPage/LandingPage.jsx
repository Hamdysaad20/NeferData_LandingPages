// import components
import Hero from "../../Components/Hero/Hero";
import Gallery2 from "../../Components/Gallery/Gallery2";
import Testimonials from "../../Components/Testimonials/Testimonials";
import PrivacyCertifications from "../../Components/PrivacyCertifications/PrivacyCertifications";
import FAQs from "../../Components/FAQs/FAQs";
import Features from "../../Components/Features/Features";
import CTAProduct from "../../Components/CTA/CTAProduct";

import questions from "../../Data/questions.json";
import tabs from "../../Data/featuresData";

import { MdEmail, MdProductionQuantityLimits } from "react-icons/md";
import SelfHosted from "../../Components/SelfHosted/SelfHosted";
import Scalability from "../../Components/SelfHosted/Scalability/Scalability";

const products = [
  {
    title: "Email Assistant",
    description:
      "A smart AI-powered email assistant that helps you manage your inbox efficiently.",
    icon: <MdEmail />,
    data: (
      <div className='bg-white p-4 rounded shadow h-full'>
        <p className='text-lg font-bold mb-2'>Email Assistant</p>
        <p className='text-gray-700'>
          A smart AI-powered email assistant that helps you manage your inbox
          efficiently. This is a more detailed description of the Email
          Assistant product, fully styled with Tailwind CSS based on the
          Neferdata identity.
        </p>
      </div>
    ),
  },
  {
    title: "Product Name",
    description:
      "Brief description of the product. This can be a range of 50 to 150 letters.",
    icon: <MdProductionQuantityLimits />,
    data: (
      <div className='bg-white p-4 rounded shadow h-full'>
        <p className='text-lg font-bold mb-2'>Product Name</p>
        <p className='text-gray-700'>
          Brief description of the product. This can be a range of 50 to 150
          letters. This is a more detailed description of the product, fully
          styled with Tailwind CSS based on the Neferdata identity.
        </p>
      </div>
    ),
  },
  {
    title: "Email Assistant",
    description:
      "A smart AI-powered email assistant that helps you manage your inbox efficiently.",
    icon: <MdEmail />,
    data: (
      <div className='bg-white p-4 rounded shadow h-full'>
        <p className='text-lg font-bold mb-2'>Email Assistant</p>
        <p className='text-gray-700'>
          A smart AI-powered email assistant that helps you manage your inbox
          efficiently. This is a more detailed description of the Email
          Assistant product, fully styled with Tailwind CSS based on the
          Neferdata identity.
        </p>
      </div>
    ),
  },
  {
    title: "Product Name",
    description:
      "Brief description of the product. This can be a range of 50 to 150 letters.",
    icon: <MdProductionQuantityLimits />,
    data: (
      <div className='bg-white p-4 rounded shadow h-full'>
        <p className='text-lg font-bold mb-2'>Product Name</p>
        <p className='text-gray-700'>
          Brief description of the product. This can be a range of 50 to 150
          letters. This is a more detailed description of the product, fully
          styled with Tailwind CSS based on the Neferdata identity.
        </p>
      </div>
    ),
  },
  {
    title: "Email Assistant 2",
    description:
      "A smart AI-powered email assistant that helps you manage your inbox efficiently.",
    icon: <MdEmail />,
    data: (
      <div className='bg-white p-4 rounded shadow h-full'>
        <p className='text-lg font-bold mb-2'>Email Assistant</p>
        <p className='text-gray-700'>
          A smart AI-powered email assistant that helps you manage your inbox
          efficiently. This is a more detailed description of the Email
          Assistant product, fully styled with Tailwind CSS based on the
          Neferdata identity.
        </p>
      </div>
    ),
  },
  {
    title: "Product Name 2",
    description:
      "Brief description of the product. This can be a range of 50 to 150 letters.",
    icon: <MdProductionQuantityLimits />,
    data: (
      <div className='bg-white p-4 rounded shadow h-full'>
        <p className='text-lg font-bold mb-2'>Product Name</p>
        <p className='text-gray-700'>
          Brief description of the product. This can be a range of 50 to 150
          letters. This is a more detailed description of the product, fully
          styled with Tailwind CSS based on the Neferdata identity.
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

      <PrivacyCertifications />
      <SelfHosted />
      <Testimonials />
      <Features tabs={tabs} />
      <Scalability />
      <FAQs
        faqs='FAQs'
        faqsP=' Here are some of the most common questions we get asked. If you have
      other questions, please'
        questions={questions}
      />

      <div className='pb-12 '>
        {" "}
        <CTAProduct />
      </div>
    </>
  );
};

export default App;
