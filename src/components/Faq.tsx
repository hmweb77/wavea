import { Disclosure } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { FaChevronDown } from "react-icons/fa";
const faqitems = [
  {
    question: "What services does your agency specialize in?",
    response:
      "We specialize in a comprehensive range of digital services designed to enhance your online presence and drive business growth. Our core offerings include web design and development, digital marketing strategies and search engine optimization (SEO). Each service is tailored to meet the unique needs of our clients across various industries.",
  },
  {
    question: "What kind of support can I expect after the project is completed?",
    response:
      "We offer various support packages that include maintenance, updates, and consultation to ensure your digital solutions continue to perform optimally.",
  },
  {
    question: "Do you provide training for the tools and strategies you implement?",
    response:
      "Yes, we provide comprehensive training and support for all the tools and strategies we implement. This ensures that your team can effectively manage and use the solutions we put in place.",
  },
  {
    question: "What forms of payment do you accept?",
    response:
      "We offer various payment options including, MB WAY, Bank transfers, PayPal and Cryptocurrency (USDT and USDC). We strive to accommodate the needs of our clients to ensure smooth and easy transactions.",
  },
];

export default function Faq() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-blue-500 text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>
{/* 
      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </p> */}
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{question}</h2>
                    <FaChevronDown
                      className={`${
                        open ? "rotate-180 transition-transform" : ""
                      } h-5 w-5 flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-neutral-800 rounded-b-lg`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}