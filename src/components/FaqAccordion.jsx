import { useState } from "react";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`rounded-2xl mb-4 overflow-hidden border border-[rgb(222,222,222)] transition-all duration-300 hover:scale-[1.01] hover:shadow-md ${
        isOpen ? "bg-[#ffedd2]" : "bg-[#FBF7EF]"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center gap-4 p-5.5 text-left transition-colors cursor-pointer focus:outline-none"
      >
        <span
          className={`text-[15px] md:text-[16px] font-normal leading-snug ${
            isOpen ? "text-[#CC0033]" : "text-[rgb(58,58,58)]"
          }`}
        >
          {question}
        </span>
        <span className="flex-shrink-0 ml-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300"
          >
            {/* Horizontal line - always visible */}
            <path
              d="M4 12H20"
              stroke="#CC0033"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Vertical line - visible only when closed (to make plus), hidden when open (to make minus) */}
            <path
              d="M12 4V20"
              stroke="#CC0033"
              strokeWidth="2"
              strokeLinecap="round"
              className={`origin-center transition-all duration-300 ${isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"}`}
            />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-[rgb(58,58,58)] leading-relaxed text-[14px] md:text-[15px]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqAccordion = () => {
  // Data exactly from the HTML lines provided
  const faqData = [
    {
      question: "Is Rishihood University in Sonipat approved by UGC?",
      answer:
        "Yes, Rishihood University is an UGC approved university that offers multidisciplinary undergraduate programs including BBA, B Design, B Sc Hons Psychology and B. Tech in Computer Science",
    },
    {
      question:
        "What makes Rishihood University a preferred choice for Bachelor's degree?",
      answer:
        "The programs offered by RU are more than just an undergraduate degree. The objective of the curriculum is to make students self-aware of their potential and capability. The programs aimed to teach students academic and cultural values to make them true leaders for tomorrow. RU also has a great record of placements and internships.",
    },
    {
      question: "Where is Rishihood University located?",
      answer:
        "Rishihood University is located in Sonipat, Haryana, on NH-44 (GT Road), making it easily accessible from Delhi NCR.",
    },
    {
      question:
        "What is the average package offered to students during placements at Rishihood University?",
      answer:
        "Our students have secured excellent packages across various disciplines. For specific placement statistics and reports, please visit our Placements section or contact the placement cell.",
    },
    {
      question:
        "What makes Rishihood University a preferred choice for Bachelor's degree?",
      answer:
        "Apart from our multidisciplinary approach, we focus on holistic development, industry integration, and fostering a startup mindset through our incubation support and Venture Studio.",
    },
  ];

  const [openIndices, setOpenIndices] = useState([]);

  const toggleIndex = (index) => {
    setOpenIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <section className="pt-20 pb-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-4xl font-semibold text-[#D00636] mb-12 font-['Montserrat']">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndices.includes(index)}
              onClick={() => toggleIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
