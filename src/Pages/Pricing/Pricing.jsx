import { MdOutlineDone } from "react-icons/md";
import PricingCard from "../../Components/Card/PricingCard";
import FAQs from "../../Components/FAQs/FAQs";
import CTAsignIn from "../../Components/CTA/CTAsignIn";
import Lottie from "lottie-react";
import CreditCards from "../../Lottie/creditcards.json";

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
        "No ads or paid placement",
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
    <div
      style={{
        backgroundImage: `url(${"/docs@30.8b9a76a2.avif"})`,
        boxShadow: "0 0 30px 12px white inset",
        backgroundRepeat: "no-repeat",
      }}
      className='bg-gradient-to-b from-[#3092DB] to-[#FBFCFF]'>
      <div className='w-full justify-center flex pt-32 '>
        <div className='flex flex-col gap-6 text-black text-center  box-border px-0 lg:px-16 max-lg:px-2 max-md:px-0 max-w-[890px]'>
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
          <p className='text-[24px] max-lg:text-[20px] max-mg:text-[18px] box-border px-[76px] max-lg:px-28 max-md:px-0 leading-[150%] text-gray-700'>
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

      <FAQs
        questions={[
          {
            title: "Estimated monthly cloud costs for self-hosted Neferdata?",
            discription:
              " The estimated monthly cloud costs for self-hosted Neferdata are around $185-$280, including Kubernetes/EKS, Cloud SQL/RDS, Redis cache, OpenAI Enterprise, and Local Llama2. These costs are estimates and may vary based on usage",
          },
          {
            title:
              "How does Neferdata ensure data privacy and security in Private Instance?",
            discription:
              "Neferdata stores sensitive data in the user's database, which only the user can access. Additionally, the body of emails is obfuscated after insights extraction, and data is never used for AI training with Enterprise OpenAI or local LLM model deployment. Users can also control what metadata gets retained, and insights sent to Neferdata are anonymized and cannot be traced back to an individual ",
          },

          {
            title: "How does Neferdata protect user data privacy?",

            discription:
              "Neferdata ensures the privacy of user data by extracting insights in an aggregated and anonymized manner. The insights are always anonymized and cannot be traced back to the user. Additionally, Neferdata invests in privacy features to safeguard confidential information, and user data is never utilized for targeted ads or sold to vendors. Users have the ability to review all insights generated from their data using online reports",
          },
          {
            title:
              "What is the role of AI in Neferdata's decision-making process?",
            discription:
              " Neferdata emphasizes the use of AI to enhance and accelerate the decision-making process rather than replacing it. The company leverages AI to provide supercharged recommendations tailored to specific business needs, aiming to optimize workflow processes through well-applied AI ",
          },
          {
            title:
              "What are the features of Neferdata's free version, and how are they meant to be used?",
            discription:
              "The Neferdata free Standard grants users access to AI Email Assistant and Product Discovery features, ensuring control over stored metadata with no ads. It empowers users with AI productivity tools for data-driven decisions, contract management, relationship tracking, usage trend analysis, and future preparation.",
          },
        ]}
        faqs='FAQs'
        faqsP=' Here are some of the most common questions we get asked. If you have
          other questions, please'
      />

      <div className='w-full bg-[#3092DB] rounded-t-3xl py-12 mt-12 -mb-12 '>
        <CTAsignIn
          title={
            <span className='text-white capitalize'>
              {" "}
              Try Neverdata&apos;s AI powered tools &amp; for free{" "}
            </span>
          }
          subtitle={
            <span className='text-white'>
              Neferdata is a suite of AI-powered tools and solutions that help
              you grow your business and achieve your goals.
            </span>
          }
          buttonText='Start For Free'
          buttonTextSecondary={
            <span className='text-white capitalize'>Try Demo</span>
          }
          bg='bg-white'
        />
        <span className='w-full grid place-items-center  pt-2'>
          <div className='text-gray-300 flex  justify-center gap-2 select-none'>
            <MdOutlineDone className='inline-block mt-[6px]' />
            No credit card required
            <div className=' h-6 w-6  '>
              <Lottie
                animationData={CreditCards}
                autoplay
                loop
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Pricing;
