// 'use client';

// import React, { useState } from 'react';
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
//   AccordionProps,
//   AccordionHeaderProps,
// } from "@material-tailwind/react";
// import { Minus, Plus } from "iconoir-react";

// // Custom hook for managing accordion state
// const useAccordion = (initialState = false) => {
//   const [isOpen, setIsOpen] = useState(initialState);
//   const toggle = () => setIsOpen(prev => !prev);
//   return [isOpen, toggle] as const;
// };

// // FAQ data
// const faqData = [
//   {
//     question: "What is Material Tailwind?",
//     answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
//   },
//   {
//     question: "How to use Material Tailwind?",
//     answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
//   },
//   {
//     question: "What can I do with Material Tailwind?",
//     answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
//   }
// ];

// const FAQ: React.FC = () => {
//   return (
//     <div className="faq-container">
//       <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
//       {faqData.map((item, index) => (
//         <AccordionItem key={index} question={item.question} answer={item.answer} />
//       ))}
//     </div>
//   );
// };

// interface AccordionItemProps {
//   question: string;
//   answer: string;
// }

// const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
//   const [isOpen, toggle] = useAccordion(false);

//   return (
    
//     <Accordion defaultValue="react">
//       <Accordion.Item value="react">
//         <Accordion.Trigger>
//           Material Tailwind React
//           <Plus className="block h-4 w-4 group-data-[open=true]:hidden" />
//           <Minus className="hidden h-4 w-4 group-data-[open=true]:block" />
//         </Accordion.Trigger>
//         <Accordion.Content>
//           Material Tailwind is an open-source crafted in Tailwind CSS. Get
//           Material Tailwind and take advantage of its free components and
//           features that will help you set up your web project quickly.
//         </Accordion.Content>
//       </Accordion.Item>
//       <Accordion.Item value="html">
//         <Accordion.Trigger>
//           Material Tailwind HTML
//           <Plus className="block h-4 w-4 group-data-[open=true]:hidden" />
//           <Minus className="hidden h-4 w-4 group-data-[open=true]:block" />
//         </Accordion.Trigger>
//         <Accordion.Content>
//           Material Tailwind is an open-source crafted in Tailwind CSS. Get
//           Material Tailwind and take advantage of its free components and
//           features that will help you set up your web project quickly.
//         </Accordion.Content>
//       </Accordion.Item>
//       <Accordion.Item value="vue">
//         <Accordion.Trigger>
//           Material Tailwind Vue
//           <Plus className="block h-4 w-4 group-data-[open=true]:hidden" />
//           <Minus className="hidden h-4 w-4 group-data-[open=true]:block" />
//         </Accordion.Trigger>
//         <Accordion.Content>
//           Material Tailwind is an open-source crafted in Tailwind CSS. Get
//           Material Tailwind and take advantage of its free components and
//           features that will help you set up your web project quickly.
//         </Accordion.Content>
//       </Accordion.Item>
//     </Accordion>

//     <Accordion open={isOpen} icon={<Icon id={question} open={isOpen} />} placeholder="Accordion Placeholder">
//       <AccordionHeader onClick={toggle} className="text-left">
//         {question}
//       </AccordionHeader>
//       <AccordionBody>
//         {answer}
//       </AccordionBody>
//     </Accordion>
//   );
// };

// interface IconProps {
//   id: string;
//   open: boolean;
// }

// const Icon: React.FC<IconProps> = ({ id, open }) => {


//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={2}
//       stroke="currentColor"
//       className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );
// };

// export default FAQ;

'use client';

import React from "react";
import Accordion from "./accordion";

const faqData = [
  {
    title: "Bagaimana mekanisme lombanya?",
    answer: "Jawaban 1"
  },
  {
    title: "Apakah harus menggunakan bliv ai dan vertex ai?",
    answer: "Jawaban 2"
  },
  {
    title: "Apakah perlombaan offline atau online?",
    answer: "Jawaban 3"
  },
]

const FAQ = () => {
  return (
    <div className="p-4 bg-white rounded-lg">
      {
        faqData.map((data, index) => (
          <Accordion
            key = {index}
            title = {data.title}
            answer = {data.answer}
          />
        ))
      }
    </div>
  );
};

export default FAQ;