import { Link } from "react-router-dom";

export default function DeadLine() {
  const deadLines = [

    {
      title: "early bird registration",
      date: "28",
      monthYear: "Feb 2026",
      link: "registration-fees",
    },
    {
      title: "abstract submission",
      date: "30",
      monthYear: "Apr 2026",
      link: "registration-fees",
    },
    {
      title: "full paper submission",
      date: "7",
      monthYear: "May 2026",
      link: "registration-fees",
    },
    {
      title: "final registration",
      date: "7",
      monthYear: "May 2026",
      link: "registration-fees",
    },
  ];

  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  return (
    <div className="bg-white px-4 py-10 ">
      <h2
        className="text-2xl md:text-3xl mx-auto text-cyan-600 text-center font-semibold"
        data-aos="fade-up"
      >
        Submission Deadlines
      </h2>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 max-w-fit mx-auto">
        {deadLines.map(({ title, date, monthYear, link }, index) => (
          <Link
            data-aos="zoom-out-up"
            to={link}
            key={index}
            rel="noopener"
            className="relative w-[200px] scale-[1.1] border border-gray-300 rounded-lg shadow-[0_48px_100px_0_rgba(17,12,46,0.15)] bg-[var(--color-heading)]"
          >
            <span className="absolute top-[-7px] left-[10px] h-[14px] w-1 rounded-full bg-[var(--color-heading)] border border-gray-200"></span>
            <span className="absolute top-[-7px] left-[20px] h-[14px] w-1 rounded-full bg-[var(--color-heading)] border border-gray-200"></span>
            <p className="text-white text-center text-sm font-medium px-3 py-2 rounded-t-lg capitalize">
              {title}
            </p>
            <h3 className="bg-white text-center text-black font-semibold text-base py-2 rounded-b-lg capitalize">
              {date}
              <sup className="text-[11px]">{getOrdinal(date)}</sup>
              <br />
              {monthYear}
            </h3>
            <span className="absolute top-[-7px] right-[10px] h-[14px] w-1 rounded-full  bg-[var(--color-heading)] border border-gray-200"></span>
            <span className="absolute top-[-7px] right-[20px] h-[14px] w-1 rounded-full  bg-[var(--color-heading)] border border-gray-200"></span>
          </Link>
        ))}
      </section>

      <p
        className="text-black text-sm mt-12 px-2 text-center"
        data-aos="fade-up"
      >
        For detailed submission guidelines, please visit the{" "}
        <Link
          to="/submission-guidelines"
          className="text-blue-600 underline"
          rel="noopener"
        >
          Submission Guidelines Page
        </Link>
      </p>
    </div>
  );
}
