import { MdOutlineDone } from "react-icons/md";
import PricingCard from "../../Components/Card/PricingCard";
import FAQs from "../../Components/FAQs/FAQs";

function Pricing() {
  const pricingCardsData = [
    {
      className: "",
      title: "Standerd",
      price: "Free",
      renew: "Always",
      features: [
        "AI-powered email filter",
        "Snack-sized company insights",
        "SaaS product discovery",
        "Vendor assessment checklist",
        "Customizable 'My Company' page",
        "No adds or paid placement",
        "Hustle-free hosting in global instance",
      ],
      buttonText: "Create Account",
    },
    {
      className: "",
      title: "Self-hosted",
      price: "Free",
      renew: "Always",
      features: [
        "All features of Standard",
        "Full data protection of your environment",
        "Compatible with on-prem, private & public cloud",
        "Step-by-step documentation & instructions",
        "Integration with your existing OpenAI account",
        "Audit log & reports of extracted insights",
        "Access to upgrades & new features at your timeline",
      ],
      buttonText: "See Documentation",
    },
    // Enterprise pricing data
    {
      className: "!bg-sky-100",
      title: "Enterprise",
      price: "$ 5.99",
      renew: "per user per month",
      features: [
        "All features of Standard",
        "Full data protection & privacy",
        "Dedicated & isolated instance in our cloud",
        "All-in solution with no overhead",
        "Access to 24/7 product support",
        "Audit log & reports of extracted insights",
        "Immediate access to latest features",
      ],
      buttonText: "Purchase Now",
    },
  ];

  return (
    <div className='bg-gradient-to-b from-[#3092DB] to-[#FBFCFF]'>
      <div className='w-full justify-center flex pt-32 '>
        <div className='flex flex-col gap-6 text-white text-center  box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[890px]'>
          <h1
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
              fontWeight: "bold",
              lineHeight: "120%",
            }}
            className='text-4xl md:text-7xl font-bold leading-120%'>
            Neferdata Pricing Plans
          </h1>
          <p className='text-[24px] max-lg:text-[20px] max-mg:text-[18px] box-border px-[76px] max-lg:px-28 max-md:px-0 leading-[150%] text-gray-200'>
            Standard, Self-hosted, and Enterprise. Upgrade anytime for advanced
            features and capabilities.
          </p>
        </div>
      </div>
      <div className='w-full bg[#FBFCFF] py-20 flex flex-wrap box-border lg:flex-nowrap justify-center items-center gap-3 lg:gap-9'>
        {pricingCardsData.map((cardData, idx) => (
          // Using unique index as key for the mapped elements. And spread operator to pass props.
          <PricingCard {...cardData} key={idx} />
        ))}
      </div>

      <div className='w-full grid place-items-center  pt-32 '>
        <FAQs
          questions={[
            {
              title: "What is Neferdata?",
              discription:
                "Neferdata is a SaaS product that provides insights on the technology stack of any company. It uses AI to analyze the company's website and identify the technologies used to build it. It also provides insights on the company's SaaS products and vendors.",
            },
            {
              title: "How does Neferdata work?",
              discription:
                "Neferdata uses AI to analyze the company's website and identify the technologies used to build it. It also provides insights on the company's SaaS products and vendors.",
            },
            {
              title: "How do I get started with Neferdata?",
              discription:
                "Neferdata uses AI to analyze the company's website and identify the technologies used to build it. It also provides insights on the company's SaaS products and vendors.",
            },
            {
              title: "How do I get started with Neferdata?",
              discription:
                "Neferdata uses AI to analyze the company's website and identify the technologies used to build it. It also provides insights on the company's SaaS products and vendors.",
            },
            {
              title: "How do I get started with Neferdata?",
              discription:
                "Neferdata uses AI to analyze the company's website and identify the technologies used to build it. It also provides insights on the company's SaaS products and vendors.",
            },
          ]}


          faqs="FAQs"
          faqsP=" Here are some of the most common questions we get asked. If you have
          other questions, please"
        />
        </div>
    </div>
  );
}

export default Pricing;
