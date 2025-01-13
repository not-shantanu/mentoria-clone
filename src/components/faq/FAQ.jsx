// src/components/FAQ.js
import React, { useState } from "react";
import faqIcon from "../../assets/FAQ-icon.png"; // Adjust the path based on your project structure

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I get in touch with someone at Mentoria?",
      answer:
        "You can email us on info@mentoria.com or call/WhatsApp us on +919930608696. You could also chat with us online by navigating to the ‘Contact Us’ button on top of the page and clicking on Chat Online.",
    },
    {
      question:
        "This solution will only benefit a small percentage of my employees. Why should I still invest in it?",
      answer:
        "The solution will tremendously benefit everyone from your middle-to-senior management with children. It also sends out a message to the rest of the staff that you, as an organisation, care about employees and their families, and are willing to reach out to families with innovative engagement activities that make a real difference to their lives.",
    },
    {
      question: "How much will it cost?",
      answer:
        "The pricing packages depend upon the number of employees in your organisation. We offer packages for 50, 150, 250 and 500 employees starting from INR 1,50,000 per year. Along with career discovery workshops, assessments, and career counselling sessions we also offer skill building workshops and master counsellor workshops for your employees and their children. Reach out to us to know more about each package.",
    },
    {
      question:
        "Where will you conduct the implementation and how long will it take?",
      answer:
        "We’re currently conducting the entire programme online. The programme typically begins with a workshop for parents and children, conducted over a group video call. Children can then give the assessment on their phones/laptops, and undergo a one-on-one online career counselling session with our counsellors over a video call. Parents will be invited to join the last 15-20 minutes of this session.",
    },
    {
      question:
        "Should we implement this at a time when children have to make a stream/career decision?",
      answer:
        "The sooner your employees’ children have clarity on their future career paths, the easier it is for them to focus on their studies and prepare for their exams. Implementing this solution earlier in the year gives them that much time to prepare better for their exams.",
    },
    {
      question:
        "This solution will only benefit a small percentage of my employees. Why should I still invest in it?",
      answer:
        "We’re long past the era of a ‘one-size-fits-all’ approach to employee engagement. Organisations across the globe are increasingly looking at conducting smaller activities for niche groups to create more impact and customise their employee engagement initiatives. While such a solution only caters to a small segment of your workforce, it is bound to make a tremendous difference to your mid-senior workforce with children. By solving a pressing problem in their lives, you’re freeing up their mindspace, garnering massive amounts of goodwill and gratitude towards your organisation and impacting their motivation levels. A motivated boss is bound to spread the positive vibes across their team! Additionally, an initiative like this sends out a ‘we care’ message across the organisation to employees and their families, and positions you as an organisation that truly knows how to engage employees and make a real difference to their lives.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto mt-10 mr-[150px] ml-[150px] p-5">
      <h2 className="text-4xl font-bold mb-5 text-center">
        Frequently Asked Questions
      </h2>

      {/* Display FAQs */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className=" ">
            {/* Add specific headers before each question */}
            {index === 0 && (
              <h3 className="text-5xl font-semibold mb-4  px-4 pt-4 mr-[1160px] ">
                About Mentoria
              </h3>
            )}
            {index === 1 && (
              <h3 className="text-5xl font-semibold mb-4  px-4 pt-4  mr-[1030px] ">
                The Mentoria Solution
              </h3>
            )}
            {index === 2 && (
              <h3 className="text-5xl font-semibold mb-4  mr-[950px]">
                Corporate Implementation
              </h3>
            )}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center p-4 text-[25px] font-medium text-[#666] hover:bg-gray-100 focus:outline-none"
            >
              <img
                src={faqIcon}
                alt="FAQ Icon"
                className="h-[30px] w-[30px] mr-3"
              />
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="p-4 text-[#666] text-[24px] border-t  border-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
