import { MdOutlineDone } from "react-icons/md";
import PricingCard from "../../Components/Card/PricingCard";
import FAQs from "../../Components/FAQs/FAQs";
import CTAsignIn from "../../Components/CTA/CTAsignIn";
import Lottie from "lottie-react";
import CreditCards from "../../Lottie/creditcards.json";

function Pricing() {
  const pricingCardsData = [
   { className: "",
    title: "Global Instance",
    price: "Free",
    renew: "",
    features: [
      "Includes Al Email Assistant & Product Discovery",
      "Full control of stored metadata + no-ads guarantee",
      "Compatible with & certified by Google Gmail & Microsoft 0365",
    ],
    buttonText: "Create Account",
  },
  {
    className: "!bg-[#3092DB] text-white",
    title: "Managed Service",
    price: "$299",
    textColor: "text-white/80",
    renew: "",
    features: [
      "Worry-free setup, "+
      "administration & maintenance",
      "Dedicated, encrypted & secure instance in Neferdata cloud",
      "Access to 24/7 support & all latest features",
    ],
    buttonText: "Purchase Now",
  },
  {
    className: "",
    title: "Self-hosted",
    price: "Free",
    renew: "",
    features: [
      "Cloud agnostic ... compatible with AWS, AZURE, GCP, or on-prem",
      "Step-by-step documentation & instructions for self-guided install",
      "Self-managed operations, upgrades & maintenance",
    ],
    buttonText: "See Documentation",
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
          <p className='text-[24px] md:text-2xl text-base font-normal max-lg:text-[20px] max-mg:text-[18px] box-border px-[76px] max-lg:px-28 max-md:px-0 leading-[150%] text-gray-700'>
            Standard, Self-hosted, and Managed Service. Upgrade anytime for advanced
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
            title: "Which Neferdata offering is the right for me?",
            discription:
              " All Neferdata hosting options offer the same AI-powered features to discover, evaluate and manage your SaaS subscriptions. If you want to ensure your data is separated we recommend the 'Managed Service' which is a worry-free option where we handle all maintenance for you wile ensuring highest level of privacy and security.",
          },
          {
            title:
              "What are the features of Neferdata's free versions, and how are they different from the paid option?",
            discription:
              "There is no difference in features between free and paid options of Neferdata. In the 'Global Instance' option your data is securely stored in a shared database, which might be acceptable for many companies. For those that require logical separation of data 'Self-Hosted' offers the ability to deploy Neferdata in the comfort of your own infrastructure, but it does not offer maintenance or support.",
          },

          {
            title: "How does Neferdata ensure data privacy and security in private instance?",

            discription:
              "Neferdata ensures the privacy of user data by extracting insights in an aggregated and anonymized manner. The insights are always anonymized and cannot be traced back to the user. Additionally, Neferdata invests in privacy features to safeguard confidential information, and user data is never utilized for targeted ads or sold to vendors. Users have the ability to review all insights generated from their data using online reports.",
          },
          {
            title:
              "How do I get my secure instance created?",
            discription:
              "In 'Managed Service' we will created the instance for you based on the provided information. This typically takes <1 working day. We will also manage, upgrade and support the instance. In 'Self-Hosted' we offer comprehensive documentation and Terraform/helm automation scripts that enable you to get started quickly. ",
          },
          {
            title:
              "How much does it cost to operate Neferdata Self-Hosted?",
            discription:
              "The estimated monthly cloud costs for self-hosted Neferdata are around $200-$300, including Kubernetes/EKS, Cloud SQL/RDS, Redis cache, OpenAI Enterprise and/or local Llama2 infrastructure. These costs are estimates and may vary based on usage and your cloud provider pricing.",
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
          mainLink={import.meta.env.VITE_EVALUATION_URL}
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
