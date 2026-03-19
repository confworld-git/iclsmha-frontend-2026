import React, { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import faqHeroImage from "/images/faq/faqhero.png"; // Make sure this path is correct
import { Helmet } from "react-helmet";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is ICLSMHA-2026?",
      answer:
        "The International Conference on Life Sciences and Multidisciplinary Healthcare Approaches (ICLSMHA-2026) is a premier event designed to bring together researchers, professionals, students and scholars from diverse fields.",
    },
    {
      question: "Who can attend the conference?",
      answer:
        "The conference is open to faculty members, academic scholars, students, industry professionals, and anyone interested in the fields of science, technology, engineering, education and social sciences.",
    },
    {
      question: "How do I register for the conference?",
      answer:
        "You can register for ICLSMHA-2026 through our online registration portal. Choose your category, fill out the registration form, select your sessions and complete the payment process.",
    },
    {
      question: "What are the registration fees?",
      answer:
        "The registration fees vary based on the category and registration period. Detailed fee information is available on the Registration Page.",
    },
    {
      question: "Can I submit my paper for presentation?",
      answer:
        "Yes, you can submit your abstract or full paper through our submission portal. All submissions will be reviewed, and accepted papers will be presented at the conference.",
    },
    {
      question: "Will my paper be published?",
      answer:
        "High-quality papers presented at the conference will be considered for publication in various Web of Science, Scopus and other internationally indexed journals. Submit now",
    },
    {
      question: "What is the review process for submitted papers?",
      answer:
        "All submitted papers will undergo a rigorous peer-review process conducted by experts in the respective fields. Reviewers will assess the originality, significance, and technical quality of the papers. Authors will be notified of the review results and any required revisions.",
    },
    {
      question: "What is included in the registration fee?",
      answer:
        "The registration fee includes access to all sessions and workshops, conference materials, refreshments and lunch during conference days, a certificate of participation and networking opportunities.",
    },
    {
      question: "Is there a cancellation policy?",
      answer:
        "Yes, cancellations made 50 Days Before Conference: 40% refundable. 30-40 Days Before Conference: 35% refundable. Less Than 30 Days Before Conference: No refunds will be issued.",
    },
    {
      question: "How do I contact the conference organizers?",
      answer: (
        <>
          For general inquiries, please email{" "}
          <a
            href="mailto:info@confworld.org"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            info@confworld.org
          </a>
          .
          <br />
          For registration-related queries contact{" "}
          <a
            href="mailto:info@cerada.in"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            info@cerada.in
          </a>
          .
          <br />
          For sponsorship opportunities, reach out to{" "}
          <a
            href="mailto:collaboration@confworld.org"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            collaboration@confworld.org
          </a>
          .
        </>
      ),
    },
    {
      question: "Will my presented paper be published?",
      answer:
        "Yes, high-quality papers presented at the conference will be considered for publication in various Web of Science, Scopus and other internationally indexed journals.",
    },
    {
      question: "How do I submit my paper for publication?",
      answer:
        "After presenting at the conference, you will receive detailed instructions on how to submit your paper for publication consideration in the indexed journals.",
    },
    {
      question: "What is the review process for publication?",
      answer:
        "All submitted papers undergo a rigorous peer-review process by experts in the relevant field to ensure the quality and relevance of the research.",
    },
    {
      question: "Are there any additional fees for publication?",
      answer:
        "There may be additional fees for publication in certain journals. Detailed information will be provided after your paper is accepted for presentation at the conference.",
    },
    {
      question: "When will I know if my paper is accepted for publication?",
      answer:
        "You will be notified about the acceptance of your paper for publication after the review process is complete, typically within 5 months post-conference.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>
          ICLSMHA 2026 FAQ – International Public Health & Medical Research
          Conference
        </title>
        <meta
          name="description"
          content="Get answers to frequently asked questions about ICLSMHA 2026. Learn about international public health conference details, medical research conference participation, healthcare innovation summit, and how to publish your research paper."
        />
        <meta
          name="keywords"
          content="ICLSMHA 2026 FAQ, international public health conference, medical research conference, research paper about health, healthcare innovation summit, health innovation conference, how to publish research paper"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/faq" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet>

      <div className="w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-violet-600 ">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Find quick answers to common queries about ICLSMHA-2026.
          </p>
        </div>

        {/* FAQ Hero Image Section */}
        <div className="relative bg-gradient-to-tr from-yellow-800 via-orange-800 to-red-800 p-4 rounded-xl shadow-lg mb-12 overflow-hidden flex justify-center items-center">
          <img
            src={faqHeroImage}
            alt="FAQ Hero"
            className="w-full max-w-lg h-auto object-contain z-10" // Adjust max-w as needed
          />
          {/* Subtle background overlay/pattern for visual interest if needed */}
          <div className="absolute inset-0 bg-white opacity-10 rounded-xl z-0"></div>
        </div>

        {/* Accordion Section */}
        <div className="bg-orange-100 shadow-2xl rounded-xl divide-y divide-yellow-800">
          {faqData.map((item, index) => (
            <div key={index} className="py-5 px-4 sm:px-6">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none py-2 transition-all duration-300 hover:text-teal-600"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg md:text-xl font-semibold text-yellow-800 pr-4">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <HiOutlineChevronUp className="h-7 w-7 text-teal-600 transform rotate-180 transition-transform duration-300" />
                ) : (
                  <HiOutlineChevronDown className="h-7 w-7 text-gray-500 transition-transform duration-300" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-4 text-orange-700 leading-relaxed text-base md:text-lg animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
