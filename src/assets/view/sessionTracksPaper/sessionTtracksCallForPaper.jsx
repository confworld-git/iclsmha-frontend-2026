import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import conferenceSessions from "./sessionTracksPaperJons";
import { Helmet } from "react-helmet";

export default function SessionTracks() {
  const location = useLocation();
  const [activeId, setActiveId] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  // Scroll to section if hash in URL
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Give a slight delay to ensure layout is stable
        setTimeout(() => {
          // If it's the very first section, adjust scroll position more precisely
          if (id === conferenceSessions[0].id) {
            const headerOffset = 150; // Adjust this value if your fixed header/navbar height changes
            const elementPosition =
              el.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          } else {
            // For other sections, scrollIntoView with scroll-margin is usually fine
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  }, [location]);

  // Track which session section is active on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      conferenceSessions.forEach((session) => {
        const el = document.getElementById(session.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust this offset based on your fixed header's height or desired visibility point
          const offset = 150; // Example: if your header is ~100-120px tall, 150 gives some buffer
          if (rect.top <= offset && rect.bottom > offset) {
            current = session.id;
          }
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize active on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Helmet>
          <title>
            ICLSMHA 2026 Session Tracks | Public Health, Biotechnology, Psychology
            & Healthcare
          </title>
          <meta
            name="description"
            content="Discover ICLSMHA 2026 session tracks covering public health, biotechnology, AI in healthcare, nutrition, psychology, mental health, biomedical research, and life sciences."
          />
          <meta
            name="keywords"
            content="public health conference, medical conference, AI in healthcare research paper, biotechnology research paper, biotechnology conference, international biotechnology conference, international journal of biotechnology, applied biotechnology journal, health innovation summit, conference for nutrition, biomedical conference, mental health conference, mental health seminar, psychology conference, international psychology conference, food security conference, international healthcare conference 2026, life sciences conference"
          />
          <link 
            rel="canonical" 
            href="https://iclsmha.cerada.in/session-tracks-call-for-papers" 
          />
          <meta name="robots" content="index, follow" />
        </Helmet>

        {/* Top Header with aligned width */}
        <header className="px-6 md:px-12 md:ml-auto py-8 text-center mx-auto">
          <h1 className="text-3xl md:text-4xl text-center font-extrabold text-cyan-700 mb-2">
            Session Tracks / Call for Papers
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-yellow-600 mb-4">
            Call for Submissions: Topics of interest include, but are not limited
            to:
          </h2>
          <p className="text-gray-700 mx-auto leading-relaxed text-lg">
            Explore the diverse and dynamic session tracks at ICLSMHA-2026. We
            have curated a rich blend of educational and interdisciplinary
            presentations designed to inspire innovation and foster collaboration.
            Join us to engage with cutting-edge research and vibrant discussions
            spanning a wide spectrum of life sciences and healthcare topics.
          </p>
        </header>

        <div className="flex flex-1 w-full relative">
          {/* Sidebar for desktop */}
          <aside className="hidden rounded-xl md:flex flex-col sticky top-24 left-0 w-2/6 h-[calc(100vh-6rem)] bg-fuchsia-50 border-r border-gray-300 p-6 overflow-y-auto shadow-lg z-30 rounded-r-lg">
            <h2 className="text-2xl font-bold mb-10 text-fuchsia-800">
              Session Navigation
            </h2>
            <nav className="flex flex-col space-y-3">
              {conferenceSessions.map((session) => (
                <a
                  key={session.id}
                  href={`#${session.id}`}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    activeId === session.id
                      ? "bg-fuchsia-300 text-fuchsia-900 font-semibold"
                      : "text-fuchsia-700 hover:bg-fuchsia-200 hover:text-fuchsia-900"
                  }`}
                >
                  {session.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Mobile sidebar toggle button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden fixed top-28 left-4 z-40 bg-cyan-600 text-white p-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Open sidebar"
          >
            ☰
          </button>

          {/* Sidebar drawer for mobile */}
          {sidebarOpen && (
            <>
              <div
                className="fixed inset-0 bg-black bg-opacity-30 z-40"
                onClick={() => setSidebarOpen(false)}
                aria-hidden="true"
              />
              <aside className="fixed top-0 left-0 bottom-0 w-72 bg-fuchsia-50 shadow-lg p-6 overflow-y-auto z-50">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-fuchsia-800">
                    Session Tracks
                  </h2>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="text-fuchsia-700 text-xl font-bold focus:outline-none"
                    aria-label="Close sidebar"
                  >
                    ×
                  </button>
                </div>
                <nav className="flex flex-col space-y-3">
                  {conferenceSessions.map((session) => (
                    <a
                      key={session.id}
                      href={`#${session.id}`}
                      onClick={() => setSidebarOpen(false)}
                      className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        activeId === session.id
                          ? "bg-fuchsia-300 text-fuchsia-900 font-semibold"
                          : "text-fuchsia-700 hover:bg-fuchsia-200 hover:text-fuchsia-900"
                      }`}
                    >
                      {session.title}
                    </a>
                  ))}
                </nav>
              </aside>
            </>
          )}

          {/* Main content */}
          <main className="flex-1 py-8 w-full space-y-16 overflow-y-auto px-6">
            {conferenceSessions.map((session) => (
              <section
                key={session.id}
                id={session.id}
                className="scroll-mt-32 bg-indigo-100 p-8 rounded-xl shadow-md"
              >
                <h2 className="text-xl md:text-3xl font-bold md:font-bold text-blue-900 mb-6 border-b border-blue-200 pb-2">
                  {session.title}
                </h2>

                {/* Updated image styling */}
                <div className="w-full h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden mb-8 mx-auto rounded-xl shadow-md bg-gray-200">
                  <img
                    src={session.cover}
                    alt={session.title}
                    title={session.title}
                    className="w-full h-full object-cover" // Ensure image covers the div, cropping if necessary
                  />
                </div>

                <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg leading-relaxed">
                  {session.topics.map((topic, idx) => (
                    <li
                      key={idx}
                      className="hover:text-blue-700 transition-colors"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </main>
        </div>
      </div>

      {/* Deadline Section */}
      <div style={{ backgroundColor: 'white', padding: '40px 16px' }}>
        <h2 style={{ fontSize: '32px', color: '#0891b2', textAlign: 'center', fontWeight: '600', marginBottom: '48px' }}>
          Submission Deadlines
        </h2>
        
        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
          {deadLines.map(({ title, date, monthYear, link }, index) => (
            <Link
              to={link}
              key={index}
              rel="noopener"
              style={{
                position: 'relative',
                width: '200px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                boxShadow: '0 10px 50px rgba(17,12,46,0.15)',
                backgroundColor: '#0891b2',
                textDecoration: 'none',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span style={{ position: 'absolute', top: '-7px', left: '10px', height: '14px', width: '4px', borderRadius: '9999px', backgroundColor: '#0891b2', border: '1px solid #e5e7eb' }}></span>
              <span style={{ position: 'absolute', top: '-7px', left: '20px', height: '14px', width: '4px', borderRadius: '9999px', backgroundColor: '#0891b2', border: '1px solid #e5e7eb' }}></span>
              
              <p style={{ color: 'white', textAlign: 'center', fontSize: '14px', fontWeight: '500', padding: '12px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', textTransform: 'capitalize' }}>
                {title}
              </p>
              
              <h3 style={{ backgroundColor: 'white', textAlign: 'center', color: 'black', fontWeight: '600', fontSize: '16px', padding: '12px 8px', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', textTransform: 'capitalize' }}>
                {date}
                <sup style={{ fontSize: '11px' }}>{getOrdinal(date)}</sup>
                <br />
                {monthYear}
              </h3>
              
              <span style={{ position: 'absolute', top: '-7px', right: '10px', height: '14px', width: '4px', borderRadius: '9999px', backgroundColor: '#0891b2', border: '1px solid #e5e7eb' }}></span>
              <span style={{ position: 'absolute', top: '-7px', right: '20px', height: '14px', width: '4px', borderRadius: '9999px', backgroundColor: '#0891b2', border: '1px solid #e5e7eb' }}></span>
            </Link>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '48px', fontSize: '14px', color: 'black' }}>
          For detailed submission guidelines, please visit the{" "}
          <Link
            to="/submission-guidelines"
            style={{ color: '#2563eb', textDecoration: 'underline' }}
            rel="noopener"
          >
            Submission Guidelines Page
          </Link>
        </p>
      </div>
    </>
  );
}