import { useState } from "react";

export default function WhyJoin() {
  const [imageErrors, setImageErrors] = useState({});

  const why_join = [
    {
      heading: "engage with experts",
      description:
        "Connect with leading researchers, healthcare professionals and industry pioneers from around the globe.",
      image: "/images/whyjoin/international-conference.webp",
      title: "International Conference 2026 - Engage with Experts",
      alt: "International conference with global experts",
      fallback:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
    },
    {
      heading: "explore cutting-edge research",
      description:
        "Discover the latest breakthroughs and innovative approaches in life sciences and multidisciplinary healthcare.",
      image: "/images/whyjoin/medical-conference-online.webp",
      title: "Medical Conference Online - Explore Cutting-Edge Research",
      alt: "Medical conference online research discussions",
      fallback:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
    },
    {
      heading: "foster collaborations",
      description:
        "Build valuable partnerships and networks that can drive your research, clinical practice or business forward",
      image: "/images/whyjoin/international-conference-online.webp",
      title: "International Conference Online - Foster Collaborations",
      alt: "Online international conference collaboration opportunities",
      fallback:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
    },
    {
      heading: "participate in dynamic sessions",
      description:
        "Experience a rich program featuring plenaries, workshops, panel discussions and poster presentations across diverse topics.",
      image: "/images/whyjoin/academic-conferences-2026.webp",
      title: "Academic Conferences 2026 - Participate in Dynamic Sessions",
      alt: "Academic conferences 2026 sessions and workshops",
      fallback:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
    },
    {
      heading: "shape the future of healthcare",
      description:
        "Contribute to meaningful conversations that influence policy, practice, and global health outcomes",
      image: "/images/whyjoin/international-biomedical-conference.webp",
      title:
        "International Biomedical Conference - Shape the Future of Healthcare",
      alt: "International biomedical conference on healthcare innovations",
      fallback:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    },
    {
      heading: "experience a vibrant host city",
      description:
        "Enjoy the cultural richness and hospitality of our conference location Manila, Philippines, ideal hubs for international collaboration.",
      image: "/images/whyjoin/conference-in-manila.webp",
      title:
        "Conference in Manila, Philippines - Experience a Vibrant Host City",
      alt: "Conference in Manila Philippines venue",
      fallback:
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop",
    },
  ];

  const handleImageError = (index) => {
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  return (
    <section className="pt-12 pb-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="w-full px-4 ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-600 mb-6">
            Why Join us at ICLSMHA-2026?
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {why_join.map(({ heading, description, image, fallback, alt,title }, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={imageErrors[index] ? fallback : image}
                  alt={alt}
                  title={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={() => handleImageError(index)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 capitalize group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {heading}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
