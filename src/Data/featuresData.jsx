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

import { FaListCheck } from 'react-icons/fa6'

export default [
  // Tab 1: Email Assistant
  {
    title: 'Email Assistant',
    Icon: FaEnvelopeOpen,
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