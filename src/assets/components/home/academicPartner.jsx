import React from "react";

export default function AcademicPartnerCard() {
  return (
    <div className="max-w-xl mx-auto bg-gradient-to-bl from gray-50 to gray-100  rounded-xl shadow-md overflow-hidden my-8">
      <h1 className="text-3xl font-bold text-cyan-800 text-center pt-2">Academic Partner</h1>
      {/* Logo Section */}
      <div className="flex justify-center items-center p-8">
        <img
          src="./images/wcc.webp"
          alt="St. Dominic College of Asia"
          className="max-h-40 object-contain"
        />
      </div>

      {/* Bottom Title Bar */}
      <div className="bg-cyan-800 text-white text-center py-3">
        <p className="font-semibold text-base">
          World Citi Colleges, Philippines
        </p>
      </div>

    </div>
  );
}
