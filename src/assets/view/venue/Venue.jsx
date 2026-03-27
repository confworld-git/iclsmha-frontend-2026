import React from "react";
import { Helmet } from "react-helmet";
import Hotel from "./Hotel";

const Venue = () => {
  // Placeholder images for Kuala Lumpur
  // You can replace these with your actual image paths later
  const klImages = [
    {
      src: "/images/venue/manila-international-conference-hall.webp",
      alt: "Main hall of the Manila international conference venue",
      title: "Experience the Manila international conference hall",
    },
    { src: "/images/venue/conference-in-manila-venue.webp", alt: "Manila Bay view for conference in Manila attendees", title: "Beautiful Manila Bay near the conference in Manila" },
    { src: "/images/venue/philippines-international-conference-rizal-park.webp", alt: "Rizal Park near Philippines international conference venue", title: "Explore Rizal Park during the Philippines international conference" },
    { src: "/images/venue/research-conference-philippines-intramuros.webp", alt: "Historic Intramuros near research conference Philippines location", title: "Visit Intramuros during the research conference in Philippines" },
    { src: "/images/venue/international-conference-in-manila-cathedral.webp", alt: "Manila Cathedral near the international conference venue", title: "International conference in Manila near historic cathedral" },
    { src: "/images/venue/conference-in-philippines-makati-skyline.webp", alt: "Makati skyline in Philippines conference city", title: "Conference in Philippines near Makati business district" },
    { src: "/images/venue/philippines-international-conference-city-life.webp", alt: "City life in Manila during Philippines international conference", title: "Experience Manila city life at the Philippines international conference" },
    { src: "/images/venue/manila-international-conference-cultural-center.webp", alt: "Cultural center of Manila near international conference site", title: "Cultural attractions near Manila international conference" },
    { src: "/images/venue/international-conference-in-philippines-aerial-view.webp", alt: "Aerial city view of Manila for international conference in Philippines", title: "Aerial view of Manila during the international conference in Philippines" },
  ];

  return (
    <section className="relative py-4 px-4 w-full bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <Helmet>
        <title>
          ICLSMHA 2026 Venue – International Conference in Manila, Philippines
        </title>
        <meta
          name="description"
          content="Discover the official venue for ICLSMHA 2026 – an international research conference in Manila, Philippines. Join global experts at this prestigious conference in the Philippines."
        />
        <meta
          name="keywords"
          content="Manila international conference, research conference Philippines, conference in Manila, international conference in Manila, Philippines international conference, conference in Philippines, international conference in Philippines"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/venue" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet>

      {/* Decorative shapes/blobs for background flair */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="w-full relative z-10">
        {/* Title and Subtitle */}
        <div className="text-center ">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-600  leading-tight animate-fade-in-down">
             Venue
          </h1>
         
          
        </div>
<Hotel/>
<p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto animate-fade-in pb-4">
            Experience the vibrant culture, modern marvels, and natural beauty
            of Philippines's capital city.
          </p>
        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {klImages.map((image, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fade-in-stagger"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
            >
              <img
                src={image.src}
                alt={image.alt}
                title={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" // Fixed height for uniformity
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end p-4">
                {/* <p className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Kuala Lumpur Insight {index + 1}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Venue;
