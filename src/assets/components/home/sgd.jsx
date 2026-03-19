export default function Sdg() {
  const logo = [
    {
      image: "/images/logo/cerada-logo.webp",
      alt: "cerada-logo",
    },
    {
      image: "/images/logo/scopus-logo.webp",
      alt: "scopus-logo",
    },
    
  ];
  const sdgList = [
    {
      image: "/images/sdg/zero-hunger.webp",
      alt: "zero-hunger",
    },
    {
      image: "/images/sdg/good-health-and-well-being.webp",
      alt: "good-health-and-well-being",
    },
    {
      image: "/images/sdg/quality-education.webp",
      alt: "quality-education",
    },
    {
      image: "/images/sdg/gender-equality.webp",
      alt: "gender-equality",
    },
    {
      image: "/images/sdg/clean-water-and-sanitation.webp",
      alt: "clean-water-and-sanitation",
    },
    {
      image: "/images/sdg/decent-work-and-economic-growth.webp",
      alt: "decent-work-and-economic-growth",
    },
    // {
    //   image: "/images/sdg/industry-innovation-and-infrastructure.webp",
    //   alt: "industry-innovation-and-infrastructure",
    // },
    {
      image: "/images/sdg/reduced-inequalities.webp",
      alt: "reduced-inequalities",
    },
    {
      image: "/images/sdg/sustainable-cities-and-communities.webp",
      alt: "sustainable-cities-and-communities",
    },
    {
      image: "/images/sdg/responsible-consumption-and-production.webp",
      alt: "responsible-consumption-and-production",
    },
    // {
    //   image: "/images/sdg/climate-action.webp",
    //   alt: "climate-action",
    // },
    {
      image: "/images/sdg/peace-justice-and-strong-institutions.webp",
      alt: "peace-justice-and-strong-institutions",
    },
  ];
  return (
    <div className="bg-gray-100">
      <div className="text-center mt-5 pt-1 font-semibold text-cyan-800 px-0">
        <p>#CERADA Supports SDGs</p>
      </div>
      <div className="flex gap-2  md:gap-y-1 m-1 items-center flex-wrap justify-center md:justify-start  ">
        {logo.map(({ image, alt }, index) => (
          <img key={index} src={image} alt={alt} width={120} height={120} className="bg-white p-1" />
        ))}
        {sdgList.map(({ image, alt }, index) => (
          <img key={index} src={image} alt={alt} width={80} height={80} />
        ))}
      </div>
      
    </div>
  );
}