import { SiGoogleanalytics } from "react-icons/si";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { BsHandIndexThumbFill } from "react-icons/bs";
import Sparkels from "../Components/Spark/spark";
import { FaFileContract } from "react-icons/fa6";
import { SiNextra } from "react-icons/si";


const products = [
  {
    index: 1,
    title: (
      <div
      className="relative  w-full"
      >
        <span className="relative">
        Discover & Evaluate
        </span>
        <span
        className="font-normal absolute right-0 px-4 py-1 bg-black/20 rounded-3xl text-base"
        >
        free
       <span className="absolute top-0 right-0">
       <Sparkels/>
       </span>
        
        </span>
        
      </div>
    ),
    description: "Make data-driven product decisions for your specific needs.",
    icon: <RiCompassDiscoverFill />,
    link: import.meta.env.EVALUATION_URL,

  },
  {
    index: 2,
    title: "Manage Contracts",
    description: "Keep track of all contracts, licenses & manage renewals.",
    icon: <FaFileContract />,
    link: import.meta.env.CONTRACTS_URL,
  },
  {
    index: 3,
    title: "Track Usage Trends",
    description:
      "AI Usage Analytics: A smart AI-powered email assistant that helps you manage your inbox efficiently.",
    icon: <SiGoogleanalytics />,
    link: import.meta.env.ANALYTICS_URL,

  },
  {
    index: 4,
    title: "Manage Relationships",
    description:
      "Quantify your actual needs & utilization of tools you pay for.",
    icon: <BsHandIndexThumbFill />,
    link: import.meta.env.EMAIL_URL,

  },
  {
    index: 5,
    title: "Email Assistant",
    description:
      "Never miss out on important information & avoid distractions.",
    icon: <MdMarkEmailUnread />,
    link: import.meta.env.EMAIL_URL,

  },
  {
    index: 6,
    title: "Prepare for the Future",
    description:
      "Get insights on what others are using to stay ahead",
    icon: <SiNextra />,
    link: import.meta.env.EVALUATION_URL,
  }
];

export default products;
