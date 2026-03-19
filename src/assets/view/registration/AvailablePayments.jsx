import React, { useEffect } from "react"; // Import useEffect
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

import mobilepay from "/images/available_payments/mobilepay.webp";
import online_transactions from "/images/available_payments/onlinepay.webp";
import Paypal from "/images/available_payments/paypal.png";
import BankTransfer from "/images/available_payments/banktrans.webp";
import Bank from "/images/available_payments/bankimg.webp";
import { Helmet } from "react-helmet";

const AvailablePayments = () => {
  useEffect(() => {
    // Initialize AOS. If you have a global AOS.init() call in App.jsx or index.jsx,
    // you might consider removing this specific init call here to avoid re-initialization.
    // However, including it here with 'once: true' is generally safe for components.
    AOS.init({
      once: true, // Only animate elements once as they enter the viewport
      // Add other global AOS settings here if needed (e.g., duration, offset)
    });

    // Crucial for React components: Refresh AOS when the component mounts or updates
    // to ensure elements with data-aos attributes are picked up and animated
    // especially during hot-reloads in development.
    AOS.refresh();

    // The empty dependency array [] ensures this effect runs only once after the initial render.
    // If your content within this component can change dynamically after the initial mount
    // and new AOS elements might appear, you might need to call AOS.refresh() again
    // when those changes occur (e.g., in another useEffect that depends on relevant state).
  }, []);

  const AvailablePaymentmethods = [
    {
      title: "Debit/Credit card payment",
      image: mobilepay,
    },
    {
      title: "Net Banking",
      image: online_transactions,
    },
    {
      title: "Paypal",
      image: Paypal,
    },
    {
      title: "Bank transfer (TT)",
      image: BankTransfer,
    },
  ];

  const BankDetails = [
    {
      title: "Beneficiary Name",
      value: "CONFWORLD EDUCATIONAL RESEARCH AND DEVELOPMENT ASSOCIATION",
    },
    {
      title: "Bank Name",
      value: "HDFC Bank",
    },
    {
      title: "Account Number",
      value: "50200097123575",
    },
    {
      title: "IFSC Code",
      value: "HDFC0000124",
    },
    {
      title: "Swift Code",
      value: "HDFCINBBCHE",
    },
    {
      title: "Branch",
      value: "Kilpauk, Chennai, Tamil Nadu, India",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>
          ICLSMHA 2026 - Payment Options | Medical & International Conference
        </title>
        <meta
          name="description"
          content="Explore secure payment methods for ICLSMHA 2026. Pay your medical conference registration fees via credit card, net banking, PayPal, or bank transfer."
        />
        <meta
          name="keywords"
          content="medical conference fees, international conference cost, registration fees, secure payment methods, PayPal conference payment, bank transfer, online conference payment"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/available-payments" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet>

      {/* Payment Methods Section */}
      <div className="w-full px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-600 mb-4">
            Available Payment Methods
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose from multiple secure payment options for your convenience
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {AvailablePaymentmethods.map((item, index) => (
            <div
              data-aos="zoom-out"
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-200 hover:border-blue-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                <img
                  className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                  src={item.image}
                  alt={item.title}
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 text-center leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bank Details Section */}
      <div className="bg-indigo-800 py-16">
        <div className="w-full px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bank Details
            </h2>
            <p className="text-lg text-slate-100 max-w-2xl mx-auto">
              For direct bank transfer payments
            </p>
          </div>

          {/* Bank Details Card */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Bank Image */}
                <div data-aos="fade-right" className="relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover min-h-[400px]"
                    src={Bank}
                    alt="Bank_image"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
                </div>

                {/* Bank Details */}
                <div
                  data-aos="fade-left"
                  className="p-8 md:p-12 flex flex-col justify-center"
                >
                  <div className="space-y-6">
                    {BankDetails.map((item, index) => (
                      <div
                        key={index}
                        className="border-b border-slate-100 pb-4 last:border-b-0"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="text-sm font-semibold text-blue-500 uppercase tracking-wide min-w-[140px]">
                            {item.title}:
                          </span>
                          <span className="font-semibold text-slate-800 break-all">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailablePayments;
