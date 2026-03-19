import { useState, useEffect } from "react";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Define the target date for the countdown.
    // As of Wednesday, July 30, 2025 at 4:23:39 PM IST, May 14, 2026 is still in the future.
    const targetDate = new Date("2026-05-14T00:00:00").getTime();

    // Set up an interval to update the countdown every second.
    const timer = setInterval(() => {
      const now = new Date().getTime(); // Get the current time in milliseconds
      const difference = targetDate - now; // Calculate the remaining time

      // If there's time left, calculate days, hours, minutes, and seconds.
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // If the target date has passed, set all values to 0 and stop the timer.
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000); // Update every 1000ms (1 second)

    // Cleanup function: This runs when the component unmounts or before re-running the effect.
    return () => clearInterval(timer);
  }, []); // The empty dependency array ensures this effect runs only once after initial render.

  // --- Reusable Countdown Timer Display Component ---
  // This component renders the individual boxes for days, hours, minutes, and seconds.
  const CountdownDisplay = ({ timeLeft }) => (
    // 'w-full' ensures it takes full width of its parent, allowing 'justify-center' to work.
    // 'gap-2 sm:gap-4' makes spacing responsive.
    <div className="w-full grid grid-cols-4 gap-2 sm:gap-4 text-center justify-center max-w-xl mx-auto">
      {/* Each box has unique gradient colors */}

      {/* Days Box: Blue to Cyan Gradient */}
      <div className="bg-white p-1 sm:p-2 rounded-xl shadow-2xl flex gap-x-1 sm:gap-x-2 justify-center items-center">
        <div className="w-12 h-8 sm:w-14 sm:h-10 flex items-center justify-center text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-opacity-20 backdrop-blur-sm rounded-xl border border-white border-opacity-30">
          <div className="text-base sm:text-lg md:text-xl font-bold text-white">
            {timeLeft.days}
          </div>
        </div>
        <div className="text-xs sm:text-sm text-gray-900 font-medium">Days</div>
      </div>

      {/* Hours Box: Green to Emerald Gradient */}
      <div className="bg-white shadow-2xl p-1 sm:p-2 rounded-xl flex gap-x-1 sm:gap-x-2 justify-center items-center">
        <div className="w-12 h-8 sm:w-14 sm:h-10 flex items-center justify-center text-center bg-gradient-to-r from-green-500 to-emerald-500 bg-opacity-20 backdrop-blur-sm rounded-xl border border-white border-opacity-30">
          <div className="text-base sm:text-lg md:text-xl font-bold text-white">
            {timeLeft.hours}
          </div>
        </div>
        <div className="text-xs sm:text-sm text-gray-900 font-medium">
          Hours
        </div>
      </div>

      {/* Minutes Box: Purple to Fuchsia Gradient */}
      <div className="bg-white shadow-2xl p-1 sm:p-2 rounded-xl flex gap-x-1 sm:gap-x-2 justify-center items-center">
        <div className="w-12 h-8 sm:w-14 sm:h-10 flex items-center justify-center text-center bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-opacity-20 backdrop-blur-sm rounded-xl border border-white border-opacity-30">
          <div className="text-base sm:text-lg md:text-xl font-bold text-white">
            {timeLeft.minutes}
          </div>
        </div>
        <div className="text-xs sm:text-sm text-gray-900 font-medium">
          Minutes
        </div>
      </div>

      {/* Seconds Box: Red to Orange Gradient */}
      <div className="bg-white shadow-2xl p-1 sm:p-2 rounded-xl flex gap-x-1 sm:gap-x-2 justify-center items-center">
        <div className="w-12 h-8 sm:w-14 sm:h-10 flex items-center justify-center text-center bg-gradient-to-r from-red-500 to-orange-500 bg-opacity-20 backdrop-blur-sm rounded-xl border border-white border-opacity-30">
          <div className="text-base sm:text-lg md:text-xl font-bold text-white">
            {timeLeft.seconds}
          </div>
        </div>
        <div className="text-xs sm:text-sm text-gray-900 font-medium">
          Seconds
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative pb-2 bg-white md:pt-1">
      {/* This div positions the countdown at the top-middle */}
      <div className="w-full flex justify-center mb-3 px-4">
        {" "}
        {/* Added mb-8 for spacing below, px-4 for padding */}
        <CountdownDisplay timeLeft={timeLeft} />
      </div>

      {/* Main content container for Text and Video sections */}
      <div className="w-full flex flex-col md:flex-row items-center px-4  gap-12">
        {/* Text Section (Left on Desktop, Bottom on Mobile) */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left z-10">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug text-[var(--color-heading)] text-shadow-sm">
            International Conference on Life Sciences and Multidisciplinary
            Healthcare Approaches (ICLSMHA-2026)
          </h1>
          <h3 className="text-gray-700 font-semibold">
            <b>Theme:</b> "Bridging Science and Practice: Multidisciplinary
            Approaches to Health and Wellbeing"
          </h3>
          <p className="text-orange-500 font-semibold">
            Hybrid Conference: In Person + Online
          </p>
          <p className="text-gray-700 font-semibold">
            <b>Organized by:</b> World Citi Colleges, Philippines and<br/> Confworld Educational Research and Development
            Association
          </p>
          <p className="text-gray-700 font-semibold">ISBN: 978-52-951719-1-8</p>

          {/* Box with Date and Location */}
          <div
            className="relative flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4 
             w-fit max-w-2xl p-2 rounded-2xl
             bg-gradient-to-br from-indigo-600 to-blue-950 
             shadow-xl overflow-hidden font-bold text-white text-center
             transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl
             border border-indigo-700 mx-auto md:mx-0"
          >
            {/* Date Item */}
            <div className="flex items-center gap-2 bg-white bg-opacity-80 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg border-2 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-700"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
              <span className="text-sm text-indigo-700 font-semibold tracking-wide">
                Date: 14–15 May, 2026
              </span>
            </div>

            {/* Location Item */}
            <div className="flex items-center gap-2 bg-white bg-opacity-80 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg border-2 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-700"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-sm text-indigo-700 font-semibold tracking-wide">
                Location: Manila, Philippines
              </span>
            </div>
          </div>
        </div>

        {/* Video Section (Right on Desktop, Top on Mobile) */}
        <div className="md:w-1/2 space-y-6">
          {/* Video Container */}
          <div className="relative bg-black border-8 border-[var(--color-heading)] rounded-2xl">
            <div className="clip-diagonal overflow-hidden shadow-lg">
              <video
                src="/videos/healthcare-conference-2026-highlights.webm" // Ensure this path is correct
                className="w-full h-full max-h-[350px] object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
