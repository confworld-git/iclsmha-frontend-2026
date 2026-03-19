import React, { useEffect } from "react"; // Import useEffect
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

import image_1 from "/images/registration-instructions/step1.webp";
import image_2 from "/images/registration-instructions/step2.webp";
import image_3 from "/images/registration-instructions/step3.webp";
import image_4 from "/images/registration-instructions/step4.webp";
import { Helmet } from "react-helmet";

const RegistrationInstructions = () => {
  useEffect(() => {
    // Initialize AOS. This should typically be done once at your app's root (e.g., App.jsx).
    // Including it here with 'once: true' makes sure animations don't re-run on every component re-render.
    AOS.init({
      once: true, // Only animate elements once as they enter the viewport
      // You can add other global AOS settings here if needed (e.g., duration, offset)
    });

    // Crucial for React components: Refresh AOS when the component mounts or updates
    // to ensure elements with data-aos attributes are picked up and animated,
    // especially during hot-reloads in development.
    AOS.refresh();

    // The empty dependency array [] ensures this effect runs only once after the initial render.
    // If content within this component might change dynamically *after* the initial mount
    // and new AOS elements could appear, you might need to call AOS.refresh() again
    // when those content changes occur (e.g., in another useEffect that depends on relevant state).
  }, []);

  const registrationSteps = [
    {
      title: "Payment",
      description: "Complete your payment for the conference",
      image: image_1,
    },
    {
      title: "Download Registration Form",
      description: "After making your payment, download the Registration Form",
      image: image_2,
    },
    {
      title: "Fill Out the Form",
      description: "Complete all required fields in the Registration Form",
      image: image_3,
    },
    {
      title: "Submit Registration",
      description:
        "Email the filled-out Registration Form along with your payment information to",
      email: "info@cerada.in",
      image: image_4,
    },
  ];
  const registrationGuidelines = [
    {
      title: "📩 Payment Notification",
      description:
        "Registered members must inform us about their payments immediately via E-mail.",
    },
    {
      title: "🧾 Proof of Payment",
      description:
        "After completing registration, every participant is required to email a scanned copy of the registration fee receipt or transaction proof to us immediately.",
    },
    {
      title: "📑 Paper Submission",
      description:
        "No modifications to the paper will be accepted after the final submission date.",
    },
    {
      title: "👥 Author Limit",
      description:
        "Only one author and one co-author are allowed per registration.",
    },
    {
      title: "⏳ Late Registration",
      description:
        "If you need to register after the deadlines, please contact the coordinator as soon as possible.",
    },
    {
      title: "📝 Form Submission",
      description:
        "After making your payment, download the Registration Form, fill it out and email it to us at info@cerada.in along with your payment information.",
    },
  ];

  const renderDescription = (text) => {
    return text
      .split(
        /(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
      )
      .map((part, index) => {
        if (part.match(/https?:\/\/[^\s]+/)) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 underline font-medium transition-colors duration-200"
            >
              {part}
            </a>
          );
        } else if (
          part.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
        ) {
          return (
            <a
              key={index}
              href={`mailto:${part}`}
              className="text-indigo-600 hover:text-indigo-800 underline font-medium transition-colors duration-200"
            >
              {part}
            </a>
          );
        }
        return part;
      });
  };

  return (
    <section className="font-sans antialiased bg-gray-50">
      <Helmet>
        <title>Conference Registration Instructions | ICLSMHA 2026</title>
        <meta
          name="description"
          content="Follow step-by-step conference registration instructions for ICLSMHA 2026. Learn how to complete payment, fill the registration form, and submit your details for participation."
        />
        <meta
          name="keywords"
          content="conference registration instructions, registration process for conference, ICLSMHA 2026 registration, healthcare conference registration, life sciences conference registration, international conference registration steps"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/registration-instruction" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet>

      <div className="w-full px-4 py-12 md:py-2">
        <h2
          data-aos="fade-up"
          className="text-center text-3xl md:text-4xl font-bold text-cyan-600 mb-12 leading-tight"
        >
          Simple Steps to Register
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {registrationSteps.map((step, index) => (
            <div
              data-aos="zoom-in"
              key={index}
              className="flex flex-col items-center p-8 bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-b-4 border-indigo-500"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-6 border-indigo-200 flex items-center justify-center shadow-lg">
                <img
                  loading="lazy"
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-indigo-700 mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {step.description}
                {step.email && (
                  <a
                    href={`mailto:${step.email}`}
                    className="text-indigo-600 hover:text-indigo-800 underline font-medium ml-1 transition-colors duration-200"
                  >
                    {step.email}
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xl font-bold text-red-700 text-center mb-16 p-6 bg-red-100 rounded-lg border-2 border-red-300 shadow-md">
          <span className="font-extrabold text-2xl">Important:</span> Please be
          aware that the payee is solely responsible for all associated bank
          charges.
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="bg-gradient-to-r from-blue-700 to-indigo-700 py-16 md:py-24 px-4"
      >
        <div className="w-full">
          <h2
            data-aos="fade-up"
            className="text-center text-4xl md:text-5xl font-extrabold text-white mb-12 leading-tight"
          >
            Essential Registration Guidelines
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {registrationGuidelines.map((guideline, index) => (
              <div data-aos="zoom-out" key={index}>
                <div className="p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-8 border-yellow-500">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    <span className="text-blue-700 font-bold text-2xl block mb-2">
                      {guideline.title}
                    </span>
                    {renderDescription(guideline.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p
            data-aos="fade-up"
            className="text-lg md:text-xl text-white font-semibold text-center mt-16 p-6 bg-yellow-700 rounded-lg border-2 border-yellow-500 shadow-xl max-w-4xl mx-auto"
          >
            <span className="font-extrabold text-2xl">Note:</span> The payee
            remains responsible for all bank charges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationInstructions;
