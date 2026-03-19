import React from "react";
import {
  ExternalLink,
  Target,
  Users,
  Award,
  Globe,
  BookOpen,
  Lightbulb,
  Network,
} from "lucide-react";

import PlatformsSection from "./platform";
import { Helmet } from "react-helmet";
export default function AboutOrganizer() {
  const whatWeDo = [
    {
      icon: <BookOpen className="w-8 h-8 mb-4 text-blue-600" />,
      title: "Educational Initiatives",
      description:
        "CERADA organizes a wide range of educational initiatives, including conferences, workshops, webinars, guest lectures, seminars, short-term training programs, public education programs and faculty development programs, all focused on Engineering and Science & Technology.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 mb-4 text-green-600" />,
      title: "Innovation Focus",
      description:
        "With a focus on curiosity, innovation and the latest trends in Engineering and Technology, CERADA is devoted to advancing knowledge in these fields.",
    },
    {
      icon: <Users className="w-8 h-8 mb-4 text-purple-600" />,
      title: "Inclusive Access",
      description:
        "We are committed to provide easy access to academic resources and support for aspiring students and research scholars from both urban and rural areas.",
    },
    {
      icon: <Network className="w-8 h-8 mb-4 text-orange-600" />,
      title: "Strategic Partnerships",
      description:
        "We are committed to fostering partnerships with universities, organizations, and associations to promote knowledge sharing and work collectively toward building a better future.",
    },
  ];

  const websiteLinks = [
    {
      title: "Primary Website",
      link: "https://confworld.org/",
      description: "Main portal for all CERADA activities",
    },
    {
      title: "Institutional Membership",
      link: "https://confworld.org/institutional",
      description: "For educational institutions",
    },
    {
      title: "Professional Membership",
      link: "https://confworld.org/professional",
      description: "For working professionals",
    },
    {
      title: "Student Membership",
      link: "https://confworld.org/student",
      description: "For students and researchers",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>
          About CERADA | International Conference Organizers & Event Planners
        </title>
        <meta
          name="description"
          content="CERADA is a leading international conference organizer and event planner, delivering world-class conference event management for global research and academic events."
        />
        <meta
          name="keywords"
          content="international conference organisers, conference event planner, international conference organizer, conference organizer company, conference event management companies"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/about-organizer"
        />
        <meta name="robots" content="index, follow" />

      </Helmet>

      {/* Hero Section */}
      {/* Adjusted height to be responsive: smaller on mobile (h-80) and taller on medium screens (md:h-[calc(100vh-64px)]) */}
      <div className="relative h-80 md:h-[calc(100vh-64px)] overflow-hidden flex items-center justify-center">
        {/* Text overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
          <h1 className="capitalize text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            About CERADA
          </h1>
        </div>
        {/* Image - Ensure z-0 to be behind text */}
        {/* Changed object-top to object-center for better mobile cropping */}
        <img
          src="/images/international-conference-organizers.webp"
          title="International Conference Organizers - About CERADA"
          alt="Conference organizer company and event management for international conferences"
          className="absolute inset-0 h-full w-full object-cover object-top md:h-screen z-0"
        />
        {/* Optional: Add a subtle overlay to improve text readability if needed */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>{" "}
        {/* Subtle dark overlay */}
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto px-4 py-16 pt-16">
        {" "}
        {/* pt-16 ensures content starts below a potential fixed nav */}
        {/* About Section */}
        <div className="w-full mb-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-600 mb-8">
              Leading Global Research & Development
            </h2>

            <div className="prose prose-lg text-gray-600 space-y-6 max-w-none">
              <p className="text-justify leading-relaxed">
                The Confworld Educational Research And Development Association
                (CERADA) is an internationally recognized, globally operating
                multidisciplinary professional research and development
                association. CERADA aims to integrate researchers and
                academicians working in the micro disciplines of science and
                technology, fostering collaboration and innovation across a
                broad spectrum of fields.
              </p>

              <p className="text-justify leading-relaxed">
                We organize top-tier international conferences, offering a
                platform for researchers and professionals to present their
                work, share ideas and network with peers from around the world.
              </p>

              <p className="text-justify leading-relaxed">
                Our publication services support the submission of research
                papers to reputable, double blind peer-reviewed journals,
                ensuring successful publication through comprehensive editing
                and peer-review assistance.
              </p>
            </div>
          </div>
        </div>
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl">
            <div className="flex items-center mb-6">
              <Target className="w-12 h-12 mr-4" />
              <h3 className="text-3xl font-bold">Our Mission</h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed">
              Confworld Educational Research and Development Association
              (CERADA) advances global education and research through
              international conferences, research assistance, and collaborative
              publications, fostering an inclusive environment for knowledge
              sharing and innovation.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-700 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="flex items-center mb-6">
              <Award className="w-12 h-12 mr-4" />
              <h3 className="text-3xl font-bold">Our Vision</h3>
            </div>
            <p className="text-purple-100 text-lg leading-relaxed">
              CERADA envisions a borderless educational research community
              committed to lifelong learning and excellence, aiming to be a
              catalyst for transformative advancements through cutting-edge
              research and international partnerships.
            </p>
          </div>
        </div>
        {/* What We Do */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-600 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 w-full mx-auto leading-relaxed">
              CERADA is dedicated to building a dynamic community of
              professionals, educators, researchers and innovators in the realms
              of engineering, science & technology, business & management,
              social sciences & humanities and education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeDo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="text-center">
                  {item.icon}
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Visit Our Websites */}
        <PlatformsSection />
      </div>
    </div>
  );
}
