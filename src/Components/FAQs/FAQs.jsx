import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionItem } from "@nextui-org/react";

/**
 * FAQs component displays a list of frequently asked questions. 
 * Each question is wrapped within an AccordionItem component, which 
 * handles the expand/collapse functionality.
 *
 * This approach adheres to WCAG guideline 1.3.1 (Info and Relationships) because 
 * the information, structure, and relationships conveyed through presentation can be 
 * programmatically determined or are available in the text.
 *
 * @param {Object[]} questions Array of question objects
 * @returns {JSX.Element} Rendered FAQs component
 */
function FAQs({ questions }) {
  return (
    <div className="flex gap-4" radius="md">
      <Accordion selectionMode="multiple">
        {questions.map((question, idx) => (
          <AccordionItem key={idx} aria-label={question.title} title={question.title}>
            {question.discription}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

FAQs.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      discription: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FAQs;