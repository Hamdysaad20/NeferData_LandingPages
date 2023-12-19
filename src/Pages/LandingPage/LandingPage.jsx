import Hero from '../../Components/Hero/Hero';
import Gallery2 from '../../Components/Gallery/Gallery2';
import ProductCard from '../../Components/Card/ProductCard';
import Testimonials from '../../Components/Testimonials/Testimonials';
import PrivacyCertifications from '../../Components/PrivacyCertifications/PrivacyCertifications';
import FAQs from '../../Components/FAQs/FAQs';
import Features from '../../Components/Features/Features';
import {
  FaEnvelopeOpen,
  FaClock,
  FaPenNib,
  FaCalendarAlt,
  FaCalendarPlus,
  FaBookOpen,
  FaSearch,
  FaSitemap,
  FaPenSquare,
  FaListAlt,
  FaCheckCircle,
  FaRobot,
  FaMicrophoneAlt,
  FaStickyNote
} from 'react-icons/fa';
import UseAnimations from "react-useanimations";

import { FaListCheck } from 'react-icons/fa6'
import video1 from '../../assets/Videos/video1.mp4';
import video2 from '../../assets/Videos/video2.mp4';
import CTAProduct from '../../Components/CTA/CTAProduct';

const App = () => {
  const productData = {
    subTitle: 'CHOOSE THE RIGHT TOOL WITH CONFIDENCE',
    title: 'Product Evaluation Tool',
    list: [
      'Find alternatives for tools you use or suggestions of new ones',
      'Discover new product categories you might want to consider next',
      'Build product assessment matrices',
      'AI suggestions of evaluation criteria (CTQs) & weights; or define your own',
      'Learn what tools others like you considered; or define your list',
    ],
    videoSrc: video1,
    isReverse: true
  };

  const emailAssistantData = {
    subTitle: 'TAKE BACK CONTROL OF YOUR INBOX',
    title: 'Email Assistant',
    list: [
      'Intuitive UI to manage blocked items',
      'Personalized whitelists with smart AI-generated suggestions',
      'Companion Mode for smooth onboarding and worry-free setup',
      'Notification levels aligned to your needs, including never-miss-out',
      'Bite-sized insights on sender companies',
      'Full control of mail metacontent stored',
    ],
    videoSrc: video2,
    isReverse: false
  };

  const questions = [
    {
      title: "question 1",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam quis voluptas fuga iusto eius cupiditate tenetur pariatur aliquam, quas quidem consequuntur ab quae incidunt ratione sapiente modi quam maiores?"
    },
    {
      title: "question 2",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam quis voluptas fuga iusto eius cupiditate tenetur pariatur aliquam, quas quidem consequuntur ab quae incidunt ratione sapiente modi quam maiores?"
    },
    {
      title: "question 3",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam quis voluptas fuga iusto eius cupiditate tenetur pariatur aliquam, quas quidem consequuntur ab quae incidunt ratione sapiente modi quam maiores?"
    },
    {
      title: "question 4",
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam quis voluptas fuga iusto eius cupiditate tenetur pariatur aliquam, quas quidem consequuntur ab quae incidunt ratione sapiente modi quam maiores?"
    }
  ]; 
  
  const featuresData = [
    // Tab 1: Email Assistant
    {
      title: 'Email Assistant',
      Icon: FaEnvelopeOpen, // Font Awesome icon for email
      features: [
        {
          title: 'Schedule and Send Emails',
          Icon: FaClock, // Font Awesome icon for clock
          content: (
            <p>
              Compose and schedule emails in advance, ensuring timely communication
              without being glued to your inbox.
            </p>
          ),
        },
        {
          title: 'Smart Compose and Reply',
          Icon: FaPenNib, // Font Awesome icon for pen nib
          content: (
            <p>
              Get AI-powered suggestions for email content and replies, saving you
              time and effort while maintaining professionalism.
            </p>
          ),
        },
        {
          title: 'Manage Subscriptions and Unsubscribe',
          Icon: FaListCheck, // Font Awesome icon for checklist
          content: (
            <p>
              Easily unsubscribe from unwanted newsletters and manage your
              subscriptions without any hassle.
            </p>
          ),
        },
      ],
    },

    // Tab 2: Meeting Assistant
    {
      title: 'Meeting Assistant',
      Icon: FaCalendarAlt, // Font Awesome icon for calendar
      features: [
        {
          title: 'Schedule and Book Meetings',
          Icon: FaCalendarPlus, // Font Awesome icon for calendar plus
          content: (
            <p>
              Find the perfect meeting time that works for everyone and schedule
              it automatically across platforms.
            </p>
          ),
        },
        {
          title: 'Transcribe and Summarize Meetings',
          Icon: FaMicrophoneAlt, // Font Awesome icon for microphone
          content: (
            <p>
              Get automatic transcripts and summaries of your meetings,
              capturing key points and action items easily.
            </p>
          ),
        },
        {
          title: 'Smart Notes and Follow-Ups',
          Icon: FaStickyNote, // Font Awesome icon for sticky note
          content: (
            <p>
              Generate intelligent notes during meetings and automate follow-up
              tasks to ensure important actions are taken.
            </p>
          ),
        },
      ],
    },

    // Tab 3: Research and Writing Assistant
    {
      title: 'Research and Writing Assistant',
      Icon: FaBookOpen, // Font Awesome icon for book open
      features: [
        {
          title: 'Gather Relevant Information',
          Icon: FaSearch, // Font Awesome icon for search
          content: (
            <p>
              Research topics through various sources and extract key information
              efficiently, saving you valuable research time.
            </p>
          ),
        },
        {
          title: 'Outline and Structure Content',
          Icon: FaSitemap, // Font Awesome icon for sitemap
          content: (
            <p>
              Get AI-powered suggestions for content structure and outlines,
              guiding you in creating well-organized writing.
            </p>
          ),
        },
        {
          title: 'Improve Grammar and Style',
          Icon: FaPenSquare, // Font Awesome icon for pen square
          content: (
            <p>
              Polish your writing with advanced grammar and style checker,
              ensuring clarity and professionalism.
            </p>
          ),
        },
      ],
    },

    // Tab 4: Project Management Assistant
    {
      title: 'Project Management Assistant',
      Icon: FaListAlt, // Font Awesome icon for list
      features: [
        {
          title: 'Organize Tasks and Priorities',
          Icon: FaCheckCircle, // Font Awesome icon for check circle
          content: (
            <p>
              Visualize your project workflow, prioritize tasks, and set deadlines
              to keep your projects on track.
            </p>
          ),
        },
        {
          title: 'Automate Repetitive Tasks',
          Icon: FaRobot, // Font Awesome icon for robot
          content: (
            <p>
              Free yourself from repetitive tasks by setting up automations
              for common project management activities.
            </p>
          ),
        }
      ]
    }
  ]

  return (
    <>
      <Hero />
      {/* <Gallery /> */}
      <Gallery2 />
      <ProductCard {...productData} />
      <ProductCard {...emailAssistantData} />
      <PrivacyCertifications />
      <Testimonials />
      <Features tabs={featuresData} />
      <FAQs
        faqs="FAQs"
        faqsP=" Here are some of the most common questions we get asked. If you have
      other questions, please"
        questions={questions} />
   <CTAProduct/>
    </>
    
  );
};

export default App;

