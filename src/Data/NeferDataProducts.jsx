import { SiGoogleanalytics } from "react-icons/si";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { BsHandIndexThumbFill } from "react-icons/bs";
import Sparkels from "../Components/Spark/spark";
import { FaFileContract } from "react-icons/fa6";

const products = [
  {
    index: 1,
    title: "Discover & Evaluate",
    description: "Make data-driven product decisions for your specific needs.",
    icon: <RiCompassDiscoverFill />,
  },
  {
    index: 2,
    title: "Manage Contracts",
    description: "Keep track of all contracts, licenses & manage renewals.",
    icon: <FaFileContract />,
  },
  {
    index: 3,
    title: "Track Usage Trends",
    description:
      "AI Usage Analytics: A smart AI-powered email assistant that helps you manage your inbox efficiently.",
    icon: <SiGoogleanalytics />,
  },
  {
    index: 4,
    title: "Manage Relationships",
    description:
      "Quantify your actual needs & utilization of tools you pay for.",
    icon: <BsHandIndexThumbFill />,
  },
  {
    index: 5,
    title: "Email Assistant",
    description:
      "Never miss out on important information & avoid distractions.",
    icon: <MdMarkEmailUnread />,
  },
];

export default products;
