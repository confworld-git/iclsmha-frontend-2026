import React from "react";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="relative text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/footerbbgg.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Footer Content */}
      <footer className="relative z-20 bg-transparent">
        <div className=" w-full  px-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="md:w-2/5 md:px-6 mb-6 md:mb-0">
              <div className="flex flex-col justify-start items-start gap-y-4">
                <div className="bg-white p-5 md:p-8 rounded-full">
                  <img
                    src="/images/logo/ceradalogo.webp"
                    className="h-20 w-20"
                    alt="Cerada Logo"
                  />
                </div>
                <div className="flex flex-col justify-start items-start">
                  <h1 className="font-bold">
                    International Conference on Life Sciences and Multidisciplinary Healthcare Approaches (ICLSMHA-2026)
                  </h1>
                  <h1><b>Theme :</b> "Bridging Science and Practice: Multidisciplinary Approaches to Health and Wellbeing"</h1>
                  <h1><b>Organized by :</b> Confworld Educational Research and Development Association</h1>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
              {/* Navigation Links */}
              <div>
                <ul className="mt-4 text-gray-300 font-semibold">
                  <li className="mb-2 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-home">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9,22 9,12 15,12 15,22"/>
                    </svg>
                    <a href="/" className="hover:underline">Home</a>
                  </li>
                  <li className="mb-2 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-info">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                    <a href="/about-iclsmha" className="hover:underline">About</a>
                  </li>
                  <li className="mb-2 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-calendar">
                      <path d="M8 2v4"/>
                      <path d="M16 2v4"/>
                      <rect width="18" height="18" x="3" y="4" rx="2"/>
                      <path d="M3 10h18"/>
                    </svg>
                    <a href="/session-tracks-call-for-papers" className="hover:underline">Session</a>
                  </li>
                  <li className="mb-2 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-book">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                    </svg>
                    <a href="/abstract-full-paper-submission" className="hover:underline">Paper Submission</a>
                  </li>
                  <li className="mb-2 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-user-plus">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <line x1="19" x2="19" y1="8" y2="14"/>
                      <line x1="22" x2="16" y1="11" y2="11"/>
                    </svg>
                    <a href="/registration-fees" className="hover:underline">Registration</a>
                  </li>
                </ul>
              </div>
              
              {/* Social Media Links */}
              <div>
                <ul className="mt-4 text-gray-300 font-semibold">
                  <li className="mb-2 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-facebook">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                    <a href="https://www.facebook.com/people/Confworld-Educational-Research-and-Development-Association/61560894663027/" className="hover:underline">Facebook</a>
                  </li>
                  <li className="mb-2 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-youtube">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0 A2 2 0 0 1 21.5 7 a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0 A2 2 0 0 1 2.5 17"/>
                      <path d="m10 15 5-3-5-3z"/>
                    </svg>
                    <a href="https://www.youtube.com/@Confworld" className="hover:underline">Youtube</a>
                  </li>
                  <li className="mb-2 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-instagram">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <a href="https://www.instagram.com/infoconfworld/?hl=en" className="hover:underline">Instagram</a>
                  </li>
                  <li className="mb-2 flex items-center gap-x-2">
                    <FaXTwitter className="w-4 h-4" />
                    <a href="https://x.com/infoconfworld" className="hover:underline">Twitter</a>
                  </li>
                  <li className="mb-2 flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    <a href="https://www.linkedin.com/company/confworld-educational-research-and-development-association/" className="hover:underline">LinkedIn</a>
                  </li>
                  <li className="mb-2 flex items-center gap-x-2">
                    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  className="w-4 h-4"
  fill="currentColor"
>
  <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.896.757 5.62 2.08 7.99L0 32l7.822-2.046A15.94 15.94 0 0 0 16 32c8.836 0 16-7.164 16-15.604C32 7.56 24.836.396 16 .396zm0 29.208c-2.574 0-4.992-.67-7.092-1.843l-.508-.302-4.642 1.214 1.238-4.522-.33-.522A13.51 13.51 0 0 1 2.49 16.396C2.49 9.11 8.724 2.876 16 2.876c7.276 0 13.51 6.234 13.51 13.52 0 7.286-6.234 13.208-13.51 13.208z"/>
</svg>
                    <a href="https://whatsapp.com/channel/0029VbCQG5z4inos7Mt6r61W" className="hover:underline">WhatsApp</a>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <ul className="text-gray-300 font-semibold">
                  <li className="mb-4 flex justify-start items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-phone">
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
                    </svg>
                    <div className="hover:underline">+91 8072381719</div>
                  </li>
                  <li className="mb-4 flex justify-start items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-mail">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                    </svg>
                    <div className="hover:underline">info@cerada.in</div>
                  </li>
                  {/* <li className="mb-4 flex justify-start items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-map-pin">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div className="hover:underline">Manila, Philippines</div>
                  </li> */}
                </ul>
                
                {/* Organizer Address */}
                <div className="mt-6 pt-4 border-t border-gray-600 bg-white p-2 rounded-xl">
                  <h3 className="text-sm font-bold text-green-700 mb-2">Organizer Address:</h3>
                  <div className="text-xs text-black space-y-1">
                    No.147/383A, Second Floor, Paper Mills Road, Peravallur, Chennai-600082, Tamil Nadu, India.
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="sm:flex sm:items-center sm:justify-center">
            <span className="text-sm text-gray-300 sm:text-center">
              © 2026 <a href="https://confworld.org/" className="hover:underline">CERADA</a>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;