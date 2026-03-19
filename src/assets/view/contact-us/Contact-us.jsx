import React, { useState, useEffect } from "react"; // Import useState AND useEffect
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

import image from "/images/contactus/global-international-conference-contact.webp";
import customersupport1 from "/images/contactus/medical-research-conference-support.webp";
import supportperson from "/images/contactus/manila-international-conference-venue-contact.webp";
import Contactform from "./Contactform";
import Enquiry from "./Enquiry";
import { Helmet } from "react-helmet";

const Contactus = () => {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    // Initialize AOS. If you have a global AOS.init() call in App.jsx or index.jsx,
    // you might consider removing this specific init call here to avoid re-initialization.
    // However, including it here with 'once: true' is generally safe for components.
    AOS.init({
      once: true, // Only animate elements once as they enter the viewport
      // Add other global AOS settings here if needed (e.g., duration, offset)
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

  return (
    <section className="bg-gradient-to-r from-violet-100 via-white to-violet-100 py-12 px-4">
      <Helmet>
        <title>
          Contact ICLSMHA 2026 – International Healthcare & Research Conference
        </title>
        <meta
          name="description"
          content="Get in touch with CERADA, the international conference organizers of ICLSMHA 2026. Contact us for sponsorship, partnership, paper submissions, or queries about the medical and healthcare research conference."
        />
        <meta
          name="keywords"
          content="Contact ICLSMHA 2026, international conference organisers, healthcare conference 2026, medical research conference, international healthcare conference, research conference enquiries"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/contact-us" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet>

      {/* Hero area*/}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full">
        {/* Text content */}
        <div data-aos="fade-left" className="md:w-1/2 flex flex-col space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-cyan-600 ">
            Partner with CERADA Today
          </h1>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-semibold text-indigo-700">
              Explore Opportunities
            </h2>
            <p>
              Discover how CERADA sponsorship can benefit your organization. We
              look forward to partnering with you and creating a memorable and
              impactful experience at the CERADA International Conference.
            </p>
            <p>
              <span className="font-semibold">Contact Us:</span> Reach out to
              our team to discuss customized sponsorship and exhibition packages
              at{" "}
              <a
                href="mailto:collaboration@confworld.org"
                className="text-indigo-600 underline hover:text-indigo-800 transition"
              >
                collaboration@confworld.org
              </a>
              .
            </p>
            <p>
              For more information or to secure your spot, please contact us
              today.
            </p>
          </div>
          <button
            onClick={() => setPopup(true)}
            className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-shadow shadow-md hover:shadow-lg self-start"
            aria-label="Ask Enquiries"
          >
            Ask Enquiries &gt;
          </button>
        </div>
        {/* Image */}
        <div
          data-aos="fade-right"
          className="md:w-1/2 rounded-lg overflow-hidden shadow-lg"
          style={{ maxHeight: "480px" }}
        >
          <img
            src={image}
            alt="Connect with our international conference team for queries and support"
            title="Contact our international conference organizers for assistance"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>

      {/* Contact Cards */}
      <div className="mt-20 w-full px-4 grid gap-10 md:grid-cols-2">
        {/* Academic Partnership */}
        <div
          data-aos="zoom-in"
          className="bg-white rounded-2xl shadow-lg flex flex-col text-center gap-4 h-[36rem]  md:h-[32rem]" // height increased to 32rem
        >
          <img
            src={customersupport1}
            alt="Medical research conference contact and support services"
            title="Reach out for medical research conference inquiries and assistance"
            className="w-full h-1/2 object-cover rounded-t-2xl"
          />
          <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mt-6">
            Academic Partnership, Sponsorship & Promotion
          </h3>
          <div className="text-base px-6 md:text-lg space-y-2 flex-grow overflow-auto mt-2">
            <p>
              <span className="font-semibold">Name:</span> Ms. Suhana S
            </p>
            <p>
              <span className="font-semibold">Mobile:</span> +91 8610656424
            </p>
            <p>
              <span className="font-semibold">E-mail:</span>{" "}
              <a
                href="mailto:collaboration@confworld.org"
                className="text-indigo-600 hover:text-indigo-800 underline transition"
              >
                collaboration@confworld.org
              </a>
            </p>
          </div>
        </div>

        {/* ICLSMHA Queries */}
        <div
          data-aos="zoom-in"
          className="bg-white rounded-2xl shadow-lg flex flex-col gap-6 h-[40rem]  md:h-[32rem]"
        >
          <img
            src={supportperson}
            alt="Manila international conference venue and contact information"
            title="Find contact details for our Manila international conference venue"
            className="w-full h-1/2 object-cover rounded-t-2xl"
          />
          <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mt-6 text-center">
            For ICLSMHA queries, please contact:
          </h3>
          <div className="grid px-6 grid-cols-1 sm:grid-cols-2 gap-6 text-base md:text-lg flex-grow overflow-auto mt-2">
            {/* Contact 1 */}
            <div>
              <p>
                <span className="font-semibold">Name:</span> Ms. Aishwarya S
              </p>
              <p className="mt-1">
                <span className="font-semibold">Mobile:</span> +91 8072381719
              </p>
              <p className="mt-1">
                <span className="font-semibold">E-mail:</span>{" "}
                <a
                  href="mailto:info@cerada.in"
                  className="text-indigo-600 hover:text-indigo-800 underline transition"
                >
                  info@cerada.in
                </a>
              </p>
            </div>
            {/* Contact 2 */}
            <div>
              <p>
                <span className="font-semibold">Name:</span> Ms. Malathy G
              </p>
              <p className="mt-1">
                <span className="font-semibold">Mobile:</span> +91 6383055014
              </p>
              <p className="mt-1">
                <span className="font-semibold">E-mail:</span>{" "}
                <a
                  href="mailto:info@cerada.in"
                  className="text-indigo-600 hover:text-indigo-800 underline transition"
                >
                  info@cerada.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-4 max-w-4xl mx-auto  p-10 ">
        <Contactform />
      </div>

      {/* Enquiry Popup */}
      {popup && <Enquiry setPopup={setPopup} />}
    </section>
  );
};

export default Contactus;
