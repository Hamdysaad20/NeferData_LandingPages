import { SiGoogleanalytics } from "react-icons/si";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { BsHandIndexThumbFill } from "react-icons/bs";
import Sparkels from "../Components/Spark/spark";
import { FaFileContract } from "react-icons/fa6";

const products = [
  {
    index: 1,
    title: "AI-Powered Email Assistant Efficiency",
    description:
      "A smart AI-powered email assistant that helps you manage your inbox efficiently.",
    icon: <MdMarkEmailUnread />,
  },
  {
    index: 2,
    title: "Products Discovery ",
    description:
      "AI powers your search for perfect SaaS tools, helping you make informed business choices.",
    icon: <RiCompassDiscoverFill />,
  },
  {
    index: 3,
    title: "SaaS Picks",
    description:
      "Smart SaaS picks with AI. No more Excel hassles. No more manual work. Just get Suggestion, Fill, get Score.",
    icon: <BsHandIndexThumbFill />,
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
  },
];

export default products;
