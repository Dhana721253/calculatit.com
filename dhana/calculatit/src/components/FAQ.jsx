import React, { useState } from 'react';
import { QuestionMarkCircleIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    id: 1,
    question: "How accurate is the BMI Calculator?",
    answer: "Our BMI Calculator uses the standard formula (weight in kg / height in m²) recommended by health organizations worldwide. While BMI is a useful screening tool, it's not a diagnostic tool. For a complete health assessment, consult with a healthcare provider."
  },
  {
    id: 2,
    question: "Are the calculations done on my device or sent to a server?",
    answer: "All calculations are performed locally on your device using JavaScript. No data is sent to any server, ensuring your privacy and quick results."
  },
  {
    id: 3,
    question: "Can I save or export my calculation results?",
    answer: "Currently, you can take screenshots or copy the results manually. We're working on adding export functionality to save results in various formats."
  },
  {
    id: 4,
    question: "Are the tools free to use?",
    answer: "Yes, all calculators on Calculatit.com are completely free to use. We believe in providing accessible tools for everyone."
  },
  {
    id: 5,
    question: "How often are the calculators updated?",
    answer: "We regularly update our calculators to ensure accuracy and add new features. Any changes are noted in our blog section."
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="w-full py-6 text-left focus:outline-none"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-gray-900 dark:text-white">
            {faq.question}
          </span>
          <ChevronDownIcon
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 mb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 dark:text-gray-400">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <QuestionMarkCircleIcon className="h-12 w-12 mx-auto mb-4 text-blue-900 dark:text-blue-500" />
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our calculators and tools
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
