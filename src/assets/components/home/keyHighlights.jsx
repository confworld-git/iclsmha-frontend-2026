import { AiOutlineGlobal } from "react-icons/ai";
import { clsx } from "clsx";

export default function KeyHighlights() {
  const keyHighLights = [
    {
      title: "global platform",
      description:
        "for collaboration among researchers, healthcare professionals and academic leaders.",
      icon: <AiOutlineGlobal size={25} />,
      bg_color: "group-hover:bg-blue-600",
      text_color: "text-blue-600",
    },
    {
      title: "multidisciplinary focus",
      description:
        "for collaboration among researchers, healthcare professionals and academic leaders.",
      icon: <AiOutlineGlobal size={25} />,
      bg_color: "group-hover:bg-indigo-600",
      text_color: "text-indigo-600",
    },
    {
      title: "keynote addresses",
      description:
        "by internationally renowned scientists, clinicians and policy experts.",
      icon: <AiOutlineGlobal size={25} />,
      bg_color: "group-hover:bg-purple-600",
      text_color: "text-purple-600",
    },
    {
      title: "research paper presentations",
      description: "across diverse tracks with opportunities for publication.",
      icon: <AiOutlineGlobal size={25} />,
      bg_color: "group-hover:bg-red-600",
      text_color: "text-red-600",
    },
    {
      title: "networking sessions",
      description:
        "to foster partnerships between academia, industry and healthcare institutions.",
      icon: <AiOutlineGlobal size={25} />,
      bg_color: "group-hover:bg-emerald-600",
      text_color: "text-emerald-600",
    },
    {
      title: "best paper & presentation awards",
      description: "to recognize outstanding contributions.",
      icon: <AiOutlineGlobal size={25} />,
      bg_color: "group-hover:bg-pink-600",
      text_color: "text-pink-600",
    },
    {
      title: "sustainability & health integration",
      description:
        "discussions on innovations for long-term global health impact.",
      icon: <AiOutlineGlobal size={25} />,
      bg_color: "group-hover:bg-cyan-600",
      text_color: "text-cyan-600",
    },
    {
      title: "Workshops & Panel Discussions",
      description:
        "on emerging trends, challenges and solutions in healthcare and life sciences.",
      icon: <AiOutlineGlobal size={25} />,
      bg_color: "group-hover:bg-orange-600",
      text_color: "text-orange-600",
    },
    {
      title: "conference proceedings & scopus indexed publication opportunities",
      icon: <AiOutlineGlobal size={25} />,
      bg_color: "group-hover:bg-teal-600",
      text_color: "text-teal-600",
    },
  ];
  return (
    <div className="w-full bg-cyan-50 px-0 pt-2 pb-2">
      {/* <img
        className="absolute top-0 left-0 z-0 object-cover h-full w-full object-center"
        src="/images/key-high-lights-background.jpg"
        alt=""
      /> */}
      <div className="w-full px-4 z-10 my-10">
        <h2 className="text-center text-2xl md:text-3xl  font-bold text-cyan-600">
          Key Highlights of ICLSMHA
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4 mt-10  ">
          {keyHighLights.map(
            ({ title, description, icon, bg_color, text_color }, index) => (
              <div
                key={index}
                className="p-5 bg-white  shadow-md rounded-2xl relative  overflow-hidden group "
              >
                <div
                  className={clsx(
                    " rounded-full w-10 h-10 absolute -top-20 -right-20 group-hover:w-140 group-hover:h-140 duration-1000 z-1",
                    bg_color
                  )}
                ></div>

                {/* <div
                  className={`absolute top-2 right-2 z-10 group-hover:scale-120 group-hover:text-white duration-1000 ${text_color} `}
                >
                  {icon}
                </div> */}

                <p className="mt-2 z-1 relative group-hover:text-gray-100 duration-1000 text-shadow-sm">
                  <b
                    className={`capitalize ${text_color}  group-hover:text-gray-100 duration-1000`}
                  >
                    {title}{" "}
                  </b>
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
