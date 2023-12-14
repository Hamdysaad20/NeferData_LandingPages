import { MdOutlineDone } from 'react-icons/md';
import PricingCard from '../../Components/Card/PricingCard';

/**
 * Pricing component renders the PricingCard component with data from
 * an array of card data objects. 
 * Each card data object contains details about each pricing plan.
 *
 * This approach complies with WCAG guideline 1.3.1 (Info and Relationships) 
 * because the information, structure, and relationships conveyed through 
 * the presentation can be programmatically determined or are available in text.
 */
function Pricing() {
  // Each object in array represents data filled in the PricingCard
  const pricingCardsData = [
    // Standerd pricing data
    {
      className: '!bg-sky-200',
      title: 'Standerd',
      price: 'Free',
      renew: 'Always',
      features: [
        "AI-powered email filter",
        "Snack-sized company insights",
        "SaaS product discovery",
        "Vendor assessment checklist",
        "Customizable 'My Company' page",
        "No adds or paid placement",
        "Hustle-free hosting in global instance",
      ],
      buttonText: 'Create Account'
    },
    // Self-hosted pricing data
    {
      className: '',
      title: 'Self-hosted',
      price: 'Free',
      renew: 'Always',
      features: [
        "All features of Standard",
        "Full data protection of your environment",
        "Compatible with on-prem, private & public cloud",
        "Step-by-step documentation & instructions",
        "Integration with your existing OpenAI account",
        "Audit log & reports of extracted insights",
        "Access to upgrades & new features at your timeline",
      ],
      buttonText: 'Try Now'
    },
    // Enterprise pricing data
    {
      className: '!bg-sky-100',
      title: 'Enterprise',
      price: '$ 5.99',
      renew: 'per user per month',
      features: [
        "All features of Standard",
        "Full data protection & privacy",
        "Dedicated & isolated instance in our cloud",
        "All-in solution with no overhead",
        "Access to 24/7 product support",
        "Audit log & reports of extracted insights",
        "Immediate access to latest features",
      ],
      buttonText: 'Purchase Now'
    }
  ];

  return (
    <div className="w-full bg-sky-400 py-40 flex flex-wrap box-border lg:flex-nowrap justify-center items-center gap-3 lg:gap-9">
      {pricingCardsData.map((cardData, idx) => (
        // Using unique index as key for the mapped elements. And spread operator to pass props.
        <PricingCard {...cardData} key={idx} />
      ))}
    </div>
  );
}

export default Pricing;

