import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaChevronDown,
  FaCog,
  FaUserTie,
  FaFlask,
  FaHandsHelping,
} from "react-icons/fa";
import OCMform from "./OCMForm";
import { BsArrowReturnRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const OCMFormPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const target = document.getElementById("OCMform");

    if (target) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(!entry.isIntersecting);
        },
        { threshold: 0.3 }
      );

      observer.observe(target);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const roles_and_responsibilities = [
    {
      name: "Strategic Guidance",
      description: "Offering expert advice to guide CERADA's direction.",
    },
    {
      name: "Conference Planning",
      description:
        "Assisting in the development of conference themes and selection of speakers.",
    },
    {
      name: "Review and Feedback",
      description:
        "Reviewing research submissions and providing constructive feedback.",
    },
    {
      name: "Abstract/Full Paper Review",
      description:
        "Evaluating submissions and ensuring alignment with the conference theme.",
    },
    {
      name: "Networking",
      description:
        "Facilitating connections with other researchers and professionals.",
    },
    {
      name: "Outreach",
      description:
        "Promoting CERADA's initiatives and recruiting new members and participants.",
    },
    {
      name: "Mentorship",
      description:
        "Supporting young researchers and professionals in their academic growth.",
    },
    {
      name: "Planning and Coordination",
      description:
        "Assisting with the overall event organization, including venue logistics, agenda setting and speaker arrangements.",
    },
    {
      name: "Promotion",
      description:
        "Engaging in marketing and outreach to attract participants and speakers.",
    },
    {
      name: "Onsite Management",
      description:
        "Facilitating sessions, guiding attendees and managing any technical issues during the hybrid event.",
    },
    {
      name: "Post-Conference Tasks",
      description:
        "Ensuring the publication of proceedings and addressing feedback.",
    },
  ];

  const qualifications = [
    {
      id: "organizing",
      title: "Qualifications for serving on our organizing committee",
      icon: <FaCog className="text-2xl text-blue-600" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      titleColor: "text-blue-800",
      list: [
        "Doctorates with over 10 years of professional experience",
        "Keynote speakers in at least 5 international conferences",
        "CEOs/Managing Directors/Deans/Principals",
        "Research Experts",
      ],
      description: [
        "Their responsibilities include selecting the conference venue, deciding on institutional and media partners and identifying potential co-hosts. They also have the authority to choose keynote speakers, appoint program chairs and determine session topics.",
      ],
    },
    {
      id: "advisory",
      title: "Qualifications for serving on our Advisory Committee",
      icon: <FaUserTie className="text-2xl text-amber-600" />,
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
      titleColor: "text-amber-800",
      list: [
        "Dean/Director/Principal with a doctorate",
        "Professors/HODs with 10+ years of experience",
        "Associate Professors/Assistant Professor/Senior Lecturers with 5+ years of experience",
        "Industrial Professionals with 8+ years of experience",
        "Professionals from the host country",
      ],
      description: [
        "The committee works closely with other teams to maintain the event schedule, assist with hospitality and registration and coordinate venue setup. They also ensure that the conference environment is well-prepared and runs smoothly.",
      ],
    },
    {
      id: "scientific",
      title: "Qualifications for serving on our Scientific committee",
      icon: <FaFlask className="text-2xl text-emerald-600" />,
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-300",
      titleColor: "text-emerald-800",
      list: [
        "Dean/Director/Principal with a Doctorate",
        "Should be an Editorial Board Member of a Prestigious Journal",
        "Must be an experienced Reviewer",
        "Should have served on a review committee for 10+ international conferences",
      ],
      description: [
        "The Scientific Committee consists of three subcommittees: the Review Committee, Technical Committee and Editorial Committee. It plays a key role in setting important dates for the upcoming 2025 educational conference, managing paper submissions, developing the final program and evaluating abstracts for acceptance.",
      ],
    },
    {
      id: "hospitality",
      title: "Qualifications for serving on our Hospitality committee",
      icon: <FaHandsHelping className="text-2xl text-rose-600" />,
      bgColor: "bg-rose-50",
      borderColor: "border-rose-300",
      titleColor: "text-rose-800",
      list: [
        "Dean/Director/Principal with a Doctorate",
        "Professor/HODs with 10+ years of Experience",
        "Associate Professor/Assistant Professor/Senior Lecturer with 5+ years of Experience",
        "Industrial Professionals with 8+ years of Experience",
        "Professionals from the host country",
      ],
      description: [
        "They provide conference venue details, share the organization's background and address specific participant inquiries. Volunteers are allocated with assisting in hospitality, registration, venue setup and conference activities on a rotating schedule.",
      ],
    },
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="pt-6 md:pt-8 relative flex justify-center items-center flex-col  min-h-screen">
      <Helmet>
        <title>
          ICLSMHA 2026 Organizing Committee | Join Conference Committee
        </title>
        <meta
          name="description"
          content="Apply to join the Organizing Committee of ICLSMHA 2026 – an international healthcare and life sciences conference. Explore roles, responsibilities, and qualifications with CERADA."
        />
        <meta
          name="keywords"
          content="ICLSMHA 2026 organizing committee, conference committee application, scientific committee, advisory committee, hospitality committee, international healthcare conference, medical conference 2026, research conference, life sciences conference, CERADA conference organizer"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/organizing-committee-member-form" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet>

      <h1
        data-aos="fade-down"
        className="text-2xl md:text-3xl pb-4 text-center text-cyan-600 font-bold px-4"
      >
        Roles & Responsibilities for Organizing Committee Member
      </h1>

      {/* Roles and Responsibilities Section */}
      <div
        className="w-full mb-8 px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="bg-indigo-100 rounded-xl shadow-lg p-4 md:p-6">
          <div className="grid gap-2 md:gap-3">
            {roles_and_responsibilities.map((responsibility, index) => (
              <div
                data-aos="fade-right"
                key={index}
                className="bg-white p-3 flex flex-row items-start gap-3 rounded-lg hover:bg-slate-100 transition-colors duration-200"
              >
                <div className="flex-shrink-0">
                  <BsArrowReturnRight
                    className="text-indigo-700 w-4 h-4 mt-1"
                    style={{ strokeWidth: 1.5 }}
                  />
                </div>
                <div>
                  <h2 className="text-base md:text-lg text-indigo-800 font-semibold mb-1">
                    {responsibility.name}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 leading-snug">
                    {responsibility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Qualifications Accordions */}
      <div
        className="w-full mb-8 px-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-2xl md:text-3xl text-center font-semibold text-cyan-600 mb-6">
          Committee Qualifications
        </h2>

        <div className="space-y-4">
          {qualifications.map((qualification) => (
            <div
              key={qualification.id}
              className={`${qualification.bgColor} ${qualification.borderColor} border rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg`}
              data-aos="fade-left"
            >
              <button
                onClick={() => toggleAccordion(qualification.id)}
                className={`w-full p-4 text-left flex items-center justify-between hover:bg-opacity-80 transition-all duration-300`}
              >
                <div className="flex items-center gap-3">
                  {qualification.icon}
                  <h3
                    className={`text-lg md:text-xl font-semibold ${qualification.titleColor}`}
                  >
                    {qualification.title}
                  </h3>
                </div>
                <div
                  className={`${
                    qualification.titleColor
                  } transition-transform duration-300 ${
                    activeAccordion === qualification.id
                      ? "transform rotate-180"
                      : ""
                  }`}
                >
                  <FaChevronDown className="text-lg" />
                </div>
              </button>

              {activeAccordion === qualification.id && (
                <div className="px-4 pb-4">
                  <div className="bg-white bg-opacity-70 rounded-lg p-4">
                    <ul className="list-disc list-inside leading-relaxed text-sm md:text-lg font-medium mb-3 space-y-1">
                      {qualification.list.map((item, index) => (
                        <li key={index} className="text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                    {qualification.description.map((desc, index) => (
                      <p
                        key={index}
                        className="text-sm md:text-lg font-medium text-gray-600 leading-relaxed mb-2"
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div
        id="OCMform"
        className="w-full mb-8 px-4"
        data-aos="zoom-in-up"
        data-aos-delay="250"
      >
        <OCMform />
      </div>

      {/* Floating Arrow */}
      {isVisible && (
        <div className="bottom-5 right-5 fixed z-50">
          <a
            href="#OCMform"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
          >
            <span className="hidden sm:inline">Apply Now</span>
            <FaChevronDown className="animate-bounce" />
          </a>
        </div>
      )}
    </section>
  );
};

export default OCMFormPage;
