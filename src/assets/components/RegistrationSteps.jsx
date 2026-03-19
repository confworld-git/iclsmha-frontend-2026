import React from "react";
import { ChevronRight } from "lucide-react";
import arrow from "../../assets/images/registration_steps/fast-forward_7740748.gif";
import admittance from "../../assets/images/registration_steps/select.png";
import form from "../../assets/images/registration_steps/form.png";
import payment from "../../assets/images/registration_steps/payments.png";
import email from "../../assets/images/registration_steps/email1.png";

const RegistrationSteps = () => {
  const Steps = [
    {
      step: 1,
      description: "Choose Your Preferred Admittance Category.",
      image: admittance,
    },
    {
      step: 2,
      description: "Enter your details in the form.",
      image: form,
    },
    {
      step: 3,
      description: "Proceed to Payment Gateway.",
      image: payment,
    },
    {
      step: 4,
      description: "Get your conference invitation.",
      image: email,
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="flex flex-col justify-center items-center space-y-6 my-10"
    >
      <h2
        data-aos="fade-up"
        className="text-cyan-600 text-2xl md:text-3xl font-semibold"
      >
        Registration Steps
      </h2>
      <div className="p-5 flex flex-col md:flex-row justify-center items-center gap-8">
        {Steps.map((step, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex flex-col md:flex-row justify-center items-center gap-8"
          >
            <div className="w-64 h-64 flex flex-col justify-center items-center bg-gradient-to-r from-pink-800 to-rose-900 shadow-[0px_0px_20px_rgba(236,72,153,0.15)] hover:shadow-[0px_10px_40px_rgba(236,72,153,0.25)] transition-all duration-300 ease-in-out p-8 space-y-4 relative overflow-hidden rounded-2xl border-4 border-white">
              {/* Decorative elements for candy shop feel */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-100 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-pink-300 rounded-full"></div>
              <div className="absolute top-1/2 -right-1 w-4 h-4 bg-pink-400 rounded-full"></div>

              {/* Step number badge */}
              <div className="w-16 h-16 bg-pink-200 rounded-full absolute -right-4 -top-6  shadow-lg">
                <p className="absolute bottom-2 left-5 text-pink-800 text-xl font-semibold">
                  {step.step}
                </p>
              </div>

              {/* Image container with consistent sizing */}
              <div className="w-40 h-40 flex items-center justify-center bg-white rounded-xl shadow-sm backdrop-blur-sm overflow-hidden">
                <img
                  loading="lazy"
                  src={step.image}
                  alt={step.description}
                  className="p-1 max-w-full max-h-full object-contain"
                />
              </div>

              {/* Description */}
              <h3 className="text-white font-bold text-center text-md leading-relaxed max-w-44">
                {step.description}
              </h3>
            </div>

            {/* Arrow between steps */}
            {index !== Steps.length - 1 && (
              <div className="flex items-center justify-center">
                <img
                  className="w-8 h-8 rotate-90 md:rotate-0 "
                  src={arrow}
                  alt="gif_arrow"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegistrationSteps;
