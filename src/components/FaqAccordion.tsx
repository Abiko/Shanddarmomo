"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Are all dishes halal?",
    answer:
      "Yes. All dishes served at Shanddar MoMo are prepared using halal ingredients.",
  },
  {
    question: "Do you offer takeaway?",
    answer: "Yes.",
  },
  {
    question: "Do you offer delivery?",
    answer: "Yes. You can order through Wolt and Bolt Food.",
  },
  {
    question: "Which branch should I visit?",
    answer:
      "We have two locations: Saburtalo and Isani. Visit the Locations page for addresses and opening hours.",
  },
  {
    question: "Can I call to place an order?",
    answer:
      "Yes. You can place your order by calling us directly using the phone number listed on the Contact page.",
  },
];

export function FaqAccordion() {
  const [openQuestion, setOpenQuestion] = useState(faqs[0].question);

  return (
    <div className="grid gap-3">
      {faqs.map((faq) => {
        const isOpen = openQuestion === faq.question;

        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-[1.25rem] border border-white/70 bg-white/88 shadow-[0_12px_30px_rgba(64,29,18,0.07)] ring-1 ring-amber-950/5 backdrop-blur"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-black text-[#33150d] transition-colors duration-200 hover:bg-[#fff1cf]/62 sm:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpenQuestion(isOpen ? "" : faq.question)}
            >
              <span>{faq.question}</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#fff1cf] text-lg leading-none text-[#9b341f]">
                {isOpen ? "-" : "+"}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm font-semibold leading-6 text-[#775036] sm:px-6 sm:text-base sm:leading-7">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
