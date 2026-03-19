import { IoArrowRedoSharp } from "react-icons/io5";
import {
  abstract_submission_guidelines,
  full_paper_submission_guidelines,
} from "./submissionGuidelinesJons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function SubmissionGuideline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 md:py-16">
      <Helmet>
        <title>
          Submission Guidelines | ICLSMHA 2026 Conference Paper Format &
          Templates
        </title>
        <meta
          name="description"
          content="Follow the ICLSMHA 2026 submission guidelines for research paper for college students and professionals. Download the research paper template for conferences, check paper submission steps, and prepare in the official conference paper format 2026."
        />
        <meta
          name="keywords"
          content="research paper for college students, research paper for college, research paper submission guidelines, paper submission, research paper template for conferences, conference paper format 2026, ICLSMHA 2026 submission"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/submission-guidelines" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet>

      <div className="w-full px-4">
        {/* Main Title */}
        <div className="text-center mb-12 md:mb-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
          <h1 className="text-3xl md:text-4xl font-semibold text-cyan-600 mb-4">
            Submission Guidelines
          </h1>
        </div>

        {/* --- Abstract Submission Section Card --- */}
        <div className="mb-16 md:mb-20 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-slate-100">
            {abstract_submission_guidelines.map(
              ({ title, list }, main_index) => (
                <div key={main_index}>
                  {/* Section Title */}
                  <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                      {title}
                    </h2>
                  </div>

                  {/* Guidelines List */}
                  <ul className="space-y-4 md:space-y-5">
                    {list.map((item, index) => (
                      <li
                        key={index}
                        className="group opacity-0 animate-[slideInLeft_0.6s_ease-out_forwards]"
                        style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                      >
                        <div className="relative bg-white border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300">
                          {/* Modified Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>

                          <span className="flex items-start text-slate-700 font-medium text-base md:text-lg relative z-10">
                            <div className="flex-shrink-0 mr-3 md:mr-4 p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-110 transition-transform duration-300 mt-0.5">
                              <IoArrowRedoSharp className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              {item}
                            </span>
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Submit Button */}
                  <div className="text-center mt-10 md:mt-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards]">
                    <Link
                      to="/abstract-full-paper-submission"
                      className="inline-block px-7 py-3 md:px-8 md:py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:from-amber-500 hover:to-orange-600"
                    >
                      Submit your Abstract
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* --- Full Paper Submission Section Card --- */}
        <div className="mb-16 md:mb-20 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-slate-100">
            {full_paper_submission_guidelines.map(
              ({ title, list, description }, main_index) => (
                <div key={main_index}>
                  {/* Section Title */}
                  <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent mb-4">
                      {title}
                    </h2>
                    {description && (
                      <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        {description}
                      </p>
                    )}
                  </div>

                  {/* Guidelines List */}
                  <ul className="space-y-4 md:space-y-5">
                    {list.map((item, index) => (
                      <li
                        key={index}
                        className="group opacity-0 animate-[slideInRight_0.6s_ease-out_forwards]"
                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                      >
                        <div className="relative bg-white border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300">
                          {/* Modified Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>

                          <span className="flex items-start text-slate-700 font-medium text-base md:text-lg relative z-10">
                            <div className="flex-shrink-0 mr-3 md:mr-4 p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform duration-300 mt-0.5">
                              <IoArrowRedoSharp className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              {item}
                            </span>
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Submit Button */}
                  <div className="text-center mt-10 md:mt-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_1.0s_forwards]">
                    <Link
                      to="/abstract-full-paper-submission"
                      className="inline-block px-7 py-3 md:px-8 md:py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:from-indigo-600 hover:to-purple-700"
                    >
                      Submit your full paper
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-12 md:mt-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_1.4s_forwards]">
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            This ensures that your work is disseminated to a wide audience,
            including peers, scholars and academia members globally.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
