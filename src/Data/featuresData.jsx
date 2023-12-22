// Consolidate all the imports from React Icons library.
import {
  FaEnvelopeOpen, FaClock, FaPenNib, FaCalendarAlt,
  FaCalendarPlus, FaBookOpen, FaSearch, FaSitemap,
  FaPenSquare, FaListAlt, FaCheckCircle, FaRobot,
  FaMicrophoneAlt, FaStickyNote,
} from 'react-icons/fa';

import { FaListCheck } from 'react-icons/fa6';

// Import the required component.
import Templete1 from '../Components/Features/Templete1';

// Define default feature object structure.
const makeFeature = (title, Icon, additionalProps = {}) => ({
  title,
  Icon,
  content: <Templete1 {...additionalProps} />
});

// Define default tab object.
const makeTab = (title, Icon, features) => ({ title, Icon, features });

// Generate tabs.
const tabs = [
  makeTab("Email Assistant", FaEnvelopeOpen, [
    makeFeature("Schedule and Send Emails", FaClock, {
      title: 'Boost your productivity',
      subTitle: 'Let AI work for you . ',
      learnMoreLink: "/",
      imgURL: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    }),
    makeFeature("Smart Compose and Reply", FaPenNib, {
      title: 'Boost your productivity',
      learnMoreLink: "/"
    }),
    makeFeature("Manage Subscriptions and Unsubscribe", FaListCheck, {
      title: 'Boost your productivity',
      subTitle: 'Let AI work for you . ',
      learnMoreLink: "/",
      imgURL: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    })
  ]),

  makeTab("Meeting Assistant", FaCalendarAlt, [
    makeFeature("Schedule and Book Meetings", FaCalendarPlus, {
      title: 'Boost your productivity',
      subTitle: 'Let AI work for you . ',
      learnMoreLink: "/",
      imgURL: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    }),
    makeFeature("Transcribe and Summarize Meetings", FaMicrophoneAlt, {
      title: 'Boost your productivity',
      subTitle: 'Let AI work for you . ',
      learnMoreLink: "/",
      imgURL: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    }),
    makeFeature("Smart Notes and Follow-Ups", FaStickyNote, {
      title: 'Boost your productivity',
      subTitle: 'Let AI work for you . ',
      learnMoreLink: "/",
      imgURL: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    })
  ]),

  makeTab("Research and Writing Assistant", FaBookOpen, [
    makeFeature("Gather Relevant Information", FaSearch, {
      title: 'Boost your productivity',
      subTitle: 'Let AI work for you . ',
      learnMoreLink: "/",
      imgURL: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    }),
    makeFeature("Outline and Structure Content", FaSitemap, {
      title: 'Boost your productivity',
      subTitle: 'Let AI work for you . ',
      learnMoreLink: "/",
      imgURL: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    }),
    makeFeature("Improve Grammar and Style", FaPenSquare, {
      title: 'Boost your productivity',
      subTitle: 'Let AI work for you . ',
      learnMoreLink: "/",
      imgURL: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    })
  ]),

  makeTab("Project Management Assistant", FaListAlt, [
    makeFeature("Organize Tasks and Priorities", FaCheckCircle, {
      title: 'Boost your productivity',
      subTitle: 'Let AI work for you . ',
      learnMoreLink: "/",
      imgURL: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    }),
    makeFeature("Automate Repetitive Tasks", FaRobot, {
      title: 'Boost your productivity',
      subTitle: 'Let AI work for you . ',
      learnMoreLink: "/",
      imgURL: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
    })
  ])
];

export default tabs;