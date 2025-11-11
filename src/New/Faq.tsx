import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

   const faqs: FAQ[] = [
    {
      question: "How can I apply for admission?",
      answer:
        "You can apply for admission by filling out the online registration form on our website or visiting the school office. After submission, our admission team will contact you for further steps.",
    },
    {
      question: "What are the school timings?",
      answer:
        "School timings are from 8:00 AM to 2:00 PM for regular classes. Extra-curricular and remedial sessions are conducted from 2:00 PM to 4:00 PM on selected days.",
    },
    {
      question: "Do you provide transportation facilities?",
      answer:
        "Yes, the school provides safe and reliable bus transportation across major routes in the city. Each bus is equipped with GPS tracking and a trained attendant.",
    },
    {
      question: "What curriculum does the school follow?",
      answer:
        "We follow the CBSE curriculum that focuses on conceptual understanding, creativity, and practical learning. Our teaching approach encourages inquiry and hands-on experience.",
    },
    {
      question: "How does the school ensure student safety?",
      answer:
        "Our campus is equipped with CCTV surveillance, ID-based access, and trained security staff. Teachers and helpers are also sensitized about child safety protocols.",
    },
    {
      question: "Are there extracurricular activities available?",
      answer:
        "Yes, we offer various activities like sports, art, music, dance, robotics, and drama to help students explore their interests and develop new skills beyond academics.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-10 lg:py-10 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center  mb-6 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="text-gray-800 ">
              Frequently Asked
            </span>{" "}
             <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Questions
              </span>
          </h1>
          <p className="text-base text-gray-600 mt-4">
            Find answers to common questions about our bus booking service
          </p>
        </div>

        {/* FAQ List */}
        <div ref={containerRef} className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemRefs.current[index] = el;
              }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "shadow-2xl bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200"
                  : "shadow-lg bg-white hover:shadow-xl border-2 border-gray-100"
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between p-4 md:p-8 text-left group"
              >
                <span
                  className={`text-base md:text-2xl font-bold pr-6 leading-tight transition-colors ${
                    openIndex === index
                      ? "text-blue-700"
                      : "text-gray-900 group-hover:text-blue-600"
                  }`}
                >
                  {faq.question}
                </span>

                {/* Toggle Icon */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFAQ(index);
                  }}
                  className={`flex-shrink-0 w-5 h-5 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    openIndex === index
                      ? "bg-gradient-to-r from-blue-500 to-blue-700 rotate-180"
                      : "bg-gradient-to-r from-blue-500 to-blue-700 opacity-80 hover:opacity-100"
                  }`}
                >
                  <ChevronDown className="text-white" size={24} />
                </div>
              </button>

              {/* Answer Section */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-8 pt-0">
                  <div className="border-t-2 border-blue-200 pt-6">
                    <p className="lg:text-lg text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div
                className={`absolute top-0 right-0 w-5 h-5 opacity-5 transition-opacity ${
                  openIndex === index ? "opacity-10" : ""
                }`}
              >
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600 to-transparent rounded-bl-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
