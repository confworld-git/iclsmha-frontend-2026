import React, { useEffect } from "react";
import Proceedings from "../../components/home/proceedingsPublications";

import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

export default function Publication() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  const plagiarism_policy_ethics = [
    {
      title: "Plagiarism Check",
      image: "/images/publication/pag_check.webp",
      list: [
        "Every submission undergoes a plagiarism check using Crossref Similarity Check, which is powered by iThenticate.",
        "This ensures that all articles submitted to the conference are original and free from plagiarism.",
      ],
    },
    {
      title: "Review Process",
      image: "/images/publication/review.webp",
      list: [
        "Submissions that pass the plagiarism check are sent to the scientific committee for review.",
        "Any submission found to be plagiarized at any stage will be automatically rejected.",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Publication | ICLSMHA 2026 Scholarly Journal & Research Paper
          Publication
        </title>
        <meta
          name="description"
          content="Explore ICLSMHA 2026 publication opportunities. Publish your health scholarly articles, follow research paper publication guidelines, and present your work in leading scholarly journals and conference journal publications."
        />
        <meta
          name="keywords"
          content="health scholarly articles, research paper publication guidelines, conference journal publication, scholarly journal, research paper publication, ICLSMHA 2026"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/publication" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet>

      {/* Professional Header Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="w-full px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-cyan-600 mb-6 leading-tight">
              Publication of Presented Research
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              <span className="font-semibold text-blue-700">
                International Conference on Life Sciences and Multidisciplinary
                Healthcare Approaches (ICLSMHA-2026)
              </span>{" "}
              provides several publication opportunities for presented work
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Journal + Proceedings Section */}
      <div className="text-center flex flex-col md:flex-row justify-center gap-5 my-10 items-center px-4">
        {/* Proceedings Card */}
        <div
          data-aos="fade-right"
          className="bg-white border border-gray-200 rounded-lg shadow-sm w-full md:w-[500px]"
        >
          {/* Mobile-first image handling (object-contain) within a fixed height div */}
          {/* For MD screens, the img itself takes precedence with object-cover object-top */}
          <div className="w-full h-48 overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center md:h-auto md:overflow-visible md:bg-transparent">
            <img
              // Mobile styles (default): object-contain, padding
              // MD+ styles (override): object-cover, object-top, fixed height, no padding
              className="w-full h-full object-contain p-2 md:h-64 md:object-cover md:object-top md:p-0"
              src="/images/publication/book.webp"
              alt="Conference Proceedings"
            />
          </div>
          <div className="flex flex-col justify-center items-center p-4 leading-normal w-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-600">
              Conference Proceedings
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              All accepted and registered abstracts will be published in the
              Conference Proceedings with an ISBN Number.
            </p>
          </div>
        </div>

        {/* Journal Card */}
        <div
          data-aos="fade-left"
          className="bg-white border border-gray-200 rounded-lg shadow-sm w-full md:w-[500px]"
        >
          {/* Mobile-first image handling (object-contain) within a fixed height div */}
          {/* For MD screens, the img itself takes precedence with object-cover object-top */}
          <div className="w-full h-48 overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center md:h-auto md:overflow-visible md:bg-transparent">
            <img
              // Mobile styles (default): object-contain, padding
              // MD+ styles (override): object-cover, object-top, fixed height, no padding
              className="w-full h-full object-contain p-2 md:h-64 md:object-contain md:object-top md:p-0"
              src="/images/publication/journal1.png"
              alt="Journal Publication"
            />
          </div>
          <div className="flex flex-col justify-center items-center p-4 leading-normal w-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-600">
              Journal Publication
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              Publish your high-quality paper in various Web of Science, Scopus
              and other internationally indexed journals, increasing the
              visibility and impact of your research.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Conference Journals */}
      <Proceedings />

      {/* ✅ Plagiarism & Publication Ethics Section */}
      <div className="bg-gray-50 py-12">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-4">
              Plagiarism Policy & Publication Ethics
            </h3>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              <span className="font-semibold text-blue-700">
                International Conference on Life Sciences and Multidisciplinary
                Healthcare Approaches (ICLSMHA-2026)
              </span>{" "}
              adheres to stringent anti-plagiarism policies. Here are the key
              points about their process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plagiarism_policy_ethics.map(
              ({ title, list, image }, main_index) => (
                <div
                  key={main_index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-6">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-46 h-40 object-contain rounded-lg bg-white p-2 shadow-md"
                        src={image}
                        alt={title}
                      />
                      <h4 className="text-xl font-bold text-white text-center mt-4">
                        {title}
                      </h4>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-4">
                      {list.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-slate-700 leading-relaxed">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
