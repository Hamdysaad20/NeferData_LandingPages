import { SiGoogleanalytics } from "react-icons/si";
import  Lottie  from 'lottie-react';
import { MdMarkEmailUnread } from "react-icons/md";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { BsHandIndexThumbFill } from "react-icons/bs";
import Sparkels from "../Components/Spark/spark";
import { FaFileContract } from "react-icons/fa6";
import EmailLottie from "../Lottie/Email.json";
import AILottie from "../Lottie/ai.json";
import SaaSLottie from "../Lottie/SaaS.json";
import Contract from "../Lottie/Contract.json";
import AIBot from "../Lottie/AIBot.json";
import ProductsCard from "../Components/Products/ProductsCard";





const products = [
    {
      index: 1,
      title: "AI-Powered Email Assistant Efficiency",
      description:
        "A smart AI-powered email assistant that helps you manage your inbox efficiently.",
      icon: <MdMarkEmailUnread />,
      data: (
        <ProductsCard
          title='AI-Powered Email Assistant Efficiency'
          discription='A smart AI-powered email assistant that helps you manage your inbox efficiently.'
          LOTTIEanimationData={EmailLottie}
        />
      ),
    },
    {
      index: 2,
      title: "Products Discovery ",
      description:
        "AI powers your search for perfect SaaS tools, helping you make informed business choices.",
      icon: <RiCompassDiscoverFill />,
      data: (
        <ProductsCard
          title='Products Discovery Customized for You'
          discription='AI powers your search for perfect SaaS tools, helping you make informed business choices.'
          LOTTIEanimationData={AILottie}
        />
        ),
    },
    {
      index: 3,
      title: "SaaS Picks",
      description:
        "Smart SaaS picks with AI. No more Excel hassles. No more manual work. Just get Suggestion, Fill, get Score.",
      icon: <BsHandIndexThumbFill />,
      data: (
        <ProductsCard
          title='SaaS Picks with AI'
          discription='Smart SaaS picks with AI. No more Excel hassles. No more manual work. Just get Suggestion, Fill, get Score.'
          LOTTIEanimationData={SaaSLottie}
        />
        ),
    },
    {
      index: 4,
      title: (
        <span className='flex relative w-full justify-between items-center gap-2'>
          <span className='w-[70%]'>Contract Manager</span>

          <span className='text-white absolute top-0 right-0 px-4 py-[6px]     text-sm bg-gray-700/40 animate-pulse grid place-items-center w-20 rounded-full '>
            soon
            <span className='absolute h-12 w-12 -top-5 right-0'>
              <Sparkels />
            </span>
          </span>
        </span>
      ),

      description:
        " Never miss a deadline. AI tracks & optimizes your SaaS agreements. Easy automation, boosted compliance. ",
      icon: <FaFileContract />,
      data: (
        <ProductsCard
          title='Be on Top of Your Contracts '
          discription='Never miss a deadline. AI tracks & optimizes your SaaS agreements. Easy automation, boosted compliance. '
          LOTTIEanimationData={Contract}
        />
        ),
    },
    {
      index: 5,
      title: (
        <span className='flex  relative w-full justify-between items-center gap-2'>
          <span className='w-[70%] '>AI Usage Analytics</span>

          <span className='text-white px-4 absolute top-0 right-0 py-[6px]    text-sm bg-gray-700/40 animate-pulse grid place-items-center w-20 rounded-full '>
            soon
            <span className='absolute h-12 w-12 -top-5 right-0'>
              <Sparkels />
            </span>
          </span>
        </span>
      ),
      description:
        "A smart AI-powered email assistant that helps you manage your inbox efficiently.",
      icon: <SiGoogleanalytics />,
      data: (
        <ProductsCard
          title='Use Ai To Better Understand Your Data'
          discription='A smart AI-powered email assistant that helps you manage your inbox efficiently.'
          LOTTIEanimationData={AIBot}

        />
        ),
    },
  ];

    export default products;