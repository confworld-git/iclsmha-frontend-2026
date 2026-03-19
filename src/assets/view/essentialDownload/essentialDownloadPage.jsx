import React, { useEffect, useState } from "react";
import image from "/images/downloadbanner.webp";
import download_svg from "../../images/icons/download.svg";
import Downloadform from "./Downloadform.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const EssentialDownload = () => {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const downloadList = [
    { title: "Conference Poster", file: "ICLSMHA Poster.jpg" },
    { title: "Conference Brochure", file: null },
    { title: "Abstract Template", file: "abstract temp.docx" },
    { title: "Full Paper Template", file: "full paper.doc" },
    { title: "Presentation Template", file: "PPT Model.ppt" },
    { title: "Registration Form", file: "Registration form.pdf" },
  ];

  return (
    <section className="w-full min-h-screen bg-gray-50 flex flex-col ">
      <Helmet>
        <title>
          ICLSMHA 2026 Downloads | Abstract Template, Brochure & Registration
        </title>
        <meta
          name="description"
          content="Download ICLSMHA 2026 resources: conference poster, brochure, abstract submission template, full paper format, PPT presentation slides, and registration form for the International Healthcare & Life Sciences Conference."
        />
        <meta
          name="keywords"
          content="ICLSMHA 2026, International Healthcare Conference, Life Sciences Conference, conference abstract template, medical conference 2026, conference registration form, conference brochure download, PPT presentation template, research conference"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/essential-download" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet>

      {/* Banner */}
      <div
        className="w-full h-44 md:h-72 flex items-center justify-center shadow"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "0 0 24px 24px",
        }}
      ></div>
      <h1 className="flex justify-center items-center mx-auto text-center text-2xl md:text-3xl text-cyan-600 font-semibold pt-8">
        Essential Downloads
      </h1>

      {/* Cards */}
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-16 px-4">
        {downloadList.map((item, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="flex flex-col justify-between items-center bg-cyan-50 rounded-xl border border-gray-200 shadow hover:shadow-xl transition-shadow p-6"
          >
            <h2 className="font-semibold text-center text-lg text-emerald-900 min-h-[44px] flex items-center break-words">
              {item.title}
            </h2>
            {item.file ? (
              <a
                href={`/files/${item.file}`}
                download
                className="mt-6 flex items-center gap-2 hover:bg-white bg-green-700  duration-500 text-white hover:text-green-600 text-base font-semibold px-5 py-2 rounded-md shadow-sm transition"
              >
                <img src={download_svg} alt="" className="w-5 h-5" />
                Download
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setPopup(true)}
                className="mt-6 flex items-center gap-2 bg-green-700 hover:bg-white text-white hover:text-green-600 duration-500 text-base font-semibold px-5 py-2 rounded-md shadow-sm transition"
              >
                <img src={download_svg} alt="" className="w-5 h-5" />
                Download
              </button>
            )}
          </div>
        ))}
      </div>

      {popup && <Downloadform setPopup={setPopup} />}
    </section>
  );
};

export default EssentialDownload;
