"use client";
import { useState } from "react";

const faqs = [
  { question: "Are all dishes halal?", answer: "Yes. All dishes served at Shanddar MoMo are prepared using halal ingredients." },
  { question: "Do you offer takeaway?", answer: "Yes." },
  { question: "Do you offer delivery?", answer: "Yes. You can order through Wolt and Bolt Food." },
  { question: "Which branch should I visit?", answer: "We have two locations: Saburtalo and Isani. Visit the Locations page for addresses and opening hours." },
  { question: "Can I call to place an order?", answer: "Yes. You can place your order by calling us directly using the phone number listed on the Contact page." },
];

export function FaqAccordion() {
  const [openQuestion, setOpenQuestion] = useState(faqs[0].question);
  return (
    <div className="border-t border-[#24140d]/14">
      {faqs.map((faq) => {
        const isOpen = openQuestion === faq.question;
        return (
          <div key={faq.question} className="border-b border-[#24140d]/14">
            <button type="button" className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-black text-[#24140d] sm:text-lg" aria-expanded={isOpen} onClick={() => setOpenQuestion(isOpen ? "" : faq.question)}>
              <span>{faq.question}</span><span className="text-xl font-medium text-[#b73d20]">{isOpen ? "−" : "+"}</span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden"><p className="max-w-2xl pb-5 text-sm leading-6 text-[#6f5a4b] sm:text-base sm:leading-7">{faq.answer}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
