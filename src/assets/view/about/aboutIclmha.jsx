import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Microscope,
  Stethoscope,
  User,
  Shield,
  Leaf,
  Brain,
  Heart,
  Wheat,
  Bug,
  Dna,
  Building2,
  Scale,
} from "lucide-react";
import { Helmet } from "react-helmet";

export default function AboutIclmha() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const objectives_iclsmha = [
    {
      title: "Promote Interdisciplinary Collaboration",
      description:
        "Foster interaction among experts from life sciences, healthcare, biotechnology, public health, and related fields to encourage holistic approaches to health challenges.",
    },
    {
      title: "Showcase Innovative Research",
      description:
        "Provide a platform for sharing the latest scientific discoveries, technological advancements, and clinical practices that advance healthcare and life sciences.",
    },
    {
      title: "Facilitate Knowledge Exchange",
      description:
        "Enable meaningful dialogue through presentations, workshops, and panel discussions to deepen understanding and stimulate new ideas.",
    },
    {
      title: "Encourage Sustainable Healthcare Solutions",
      description:
        "Highlight practices and policies that support long-term health and environmental sustainability.",
    },
    {
      title: "Support Professional Development",
      description:
        "Offer opportunities for networking, mentorship, and skill-building for researchers, clinicians, and healthcare leaders.",
    },
    {
      title: "Influence Policy and Practice",
      description:
        "Connect academic research with healthcare policy-making and clinical implementation to improve health outcomes at local and global levels",
    },
  ];

  const key_focus_areas = [
    {
      title: "Interdisciplinary Innovations in Life Sciences and Biotechnology",
      icon: Microscope,
    },
    {
      title: "Advances in Medical Research and Healthcare Technologies",
      icon: Stethoscope,
    },
    { title: "Integrative and Personalized Medicine Approaches", icon: User },
    { title: "Public Health Strategies and Policy Development", icon: Shield },
    {
      title: "Environmental Impacts on Health and Sustainable Practices",
      icon: Leaf,
    },
    {
      title: "Digital Health, AI and Data Analytics in Healthcare",
      icon: Brain,
    },
    {
      title: "Mental Health, Neurosciences and Behavioral Medicine",
      icon: Heart,
    },
    {
      title: "Nutrition, Food Security and Agricultural Biotechnology",
      icon: Wheat,
    },
    {
      title: "Infectious Diseases, Epidemiology and One Health Approach",
      icon: Bug,
    },
    {
      title: "Regenerative Medicine, Stem Cell Research and Tissue Engineering",
      icon: Dna,
    },
    {
      title: "Healthcare Management, Leadership and Health Economics",
      icon: Building2,
    },
    {
      title:
        "Ethical, Legal and Social Implications in Life Sciences and Healthcare",
      icon: Scale,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          About ICLSMHA | International Healthcare & Medical Conference 2026
        </title>
        <meta
          name="description"
          content="Learn about ICLSMHA, an international healthcare conference 2026 uniting experts in medical research, mental health, and global research conferences."
        />
        <meta
          name="keywords"
          content="international healthcare conference, healthcare conference, medical conference 2026, medical research, research conference, healthcare conference 2026, international mental health conference"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/about-iclsmha" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet>

      {/* Banner with Title */}
      <div className="relative h-80 md:h-120 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover object-center absolute inset-0 z-0"
          src="/images/international-healthcare-conference-2026.webp"
          alt="International healthcare conference 2026 on medical research and mental health"
          title="International Healthcare Conference 2026 - About ICLSMHA"
        />
        {/* Overlay for better text readability on a potentially busy image */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
          <h1 className="capitalize text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            About ICLSMHA
          </h1>
          {/* Optional: You could add a small tagline here if desired */}
          {/* <p className="text-xl text-white mt-2 drop-shadow-md">International Conference on Life Sciences and Multidisciplinary Healthcare Approaches</p> */}
        </div>
      </div>

      {/* Main Content Sections below the banner */}

      {/* About Text */}
      <div className="flex justify-center py-10 px-4 ">
        <div className="w-full mx-auto">
          <p className="font-semibold mb-3 text-gray-600 text-justify">
            The International Conference on Life Sciences and Multidisciplinary
            Healthcare Approaches (ICLSMHA) is a premier global event dedicated
            to fostering collaboration and knowledge exchange among researchers,
            healthcare professionals, and industry experts. ICLSMHA serves as a
            dynamic platform where interdisciplinary perspectives converge to
            address critical challenges in life sciences, biotechnology, public
            health, medical research and healthcare delivery.
          </p>
          <p className="font-semibold text-gray-600 text-justify">
            With a focus on innovation and sustainability, ICLSMHA promotes
            cutting-edge research, technological advancements, and practical
            solutions aimed at improving health outcomes worldwide. By uniting
            diverse stakeholders, the conference encourages meaningful dialogue,
            partnership building and the dissemination of transformative ideas
            that can pave the way for a healthier future.
          </p>
        </div>
      </div>

      {/* Objectives */}
      <div className="flex justify-center background-gradient px-4 py-10 md:py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold pb-10 text-[var(--color-tertiary)] text-center">
            Objectives of ICLSMHA
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {objectives_iclsmha.map(({ title, description }, index) => (
              <li
                data-aos="flip-left"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                key={index}
              >
                <h3 className="font-bold text-xl capitalize mb-2 text-[var(--color-heading)]">
                  {title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Conference Theme - Restored to original styling */}
      <div className="flex justify-center  text-shadow-xs py-10 px-4 ">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-[var(--color-heading)] mb-10">
            Conference Theme
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4 items-center">
            <div className="w-full">
              <img
                className="w-full rounded-md h-72 object-cover"
                src="/images/healthcare-conference-theme-2026.webp"
                title="Healthcare Conference 2026 - Theme & Focus Areas"
                alt="Healthcare conference 2026 theme covering medical research, mental health, and innovation"
              />
            </div>
            <div className="text-gray-500 text-justify flex items-center">
              <p>
                <b className="text-[var(--color-heading)]">
                  "Bridging Science and Practice: Multidisciplinary Approaches
                  to Health and Wellbeing"
                </b>{" "}
                reflects the conference's commitment to connecting cutting-edge
                scientific research with practical applications in healthcare.
                By fostering collaboration across diverse disciplines ranging
                from biotechnology and medical research to public health and
                environmental sciences, ICLSMHA aims to advance holistic
                solutions that improve health outcomes and promote wellbeing
                globally. This theme emphasizes the importance of translating
                innovation into real-world impact through integrated approaches
                that address complex health challenges in an ever-evolving
                landscape.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Focus Areas */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-12 px-4 ">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Key Focus Areas Include
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Comprehensive coverage across critical domains in life sciences
              and healthcare
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {key_focus_areas.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`relative bg-white/95 backdrop-blur-sm rounded-lg border border-slate-200/50 p-6 h-full flex flex-col items-center text-center transform transition-all duration-300 ease-out ${
                      hoveredIndex === index
                        ? "-translate-y-2 shadow-2xl border-blue-200/50 bg-white"
                        : "shadow-lg hover:shadow-xl"
                    }`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 rounded-t-lg bg-gradient-to-r transition-all duration-300 ${
                        hoveredIndex === index
                          ? "from-blue-500 to-teal-500"
                          : "from-slate-300 to-slate-200"
                      }`}
                    ></div>

                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                        hoveredIndex === index
                          ? "bg-gradient-to-br from-blue-500 to-teal-500 text-white scale-110"
                          : "bg-gradient-to-br from-blue-500 to-teal-500 text-white"
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>

                    <h3
                      className={`text-md font-semibold transition-colors duration-300 ${
                        hoveredIndex === index
                          ? "text-black"
                          : "text-blue-800 group-hover:text-black"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* This overlay might not be visible if the parent has bg-white/95. It's more effective if the parent is transparent. */}
                    {/* Keeping it for now as it was in your original code, but consider if it's truly adding a visual effect */}
                    <div
                      className={`absolute inset-0 rounded-lg bg-gradient-to-br from-blue-50/50 to-teal-50/50 transition-opacity duration-300 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
