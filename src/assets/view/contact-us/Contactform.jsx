import React, { useRef, useState } from "react";
// import './Contactform.css'; // You might not need this if using only Tailwind
import axios from "axios";
import { toaster } from "evergreen-ui";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// import img from "/images/contactus/istockphoto-1248207920-612x612.jpg"; // Using placeholder for new design

const Contactform = () => {
  const ContactRef = useRef();
  const [MobileNumber, setMobileNumber] = useState(null);

  const validateForm = (data) => {
    for (const key in data) {
      if (!data[key] || String(data[key]).trim() === "") { // Convert to string before trimming
        toaster.warning(`Please fill out the ${key.replace(/_/g, " ")} field.`);
        return false;
      }
    }
    return true;
  };

  const HandleContactData = async (e) => {
    e.preventDefault();
    const formData = new FormData(ContactRef.current);
    const ContactData = Object.fromEntries(formData.entries());
    ContactData.Contact_Number = MobileNumber;

    const isValid = validateForm(ContactData);
    if (!isValid) {
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        ContactData
      );
      if (response) {
        ContactRef.current.reset();
        setMobileNumber("");
        toaster.success(response.data.message);
      }
    } catch (error) {
      console.error("Contact form submission error:", error); // More specific error log
      toaster.danger("Something went wrong. Please try again."); // User-friendly message
    }
  };

  return (
    <div className="flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8 rounded-xl bg-gradient-to-br from-teal-700 to-green-700">
      <div
        className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-gray-100"
        style={{
          // You can use a subtle pattern or remove background image for a cleaner look
          // backgroundImage: `linear-gradient(0deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.95) 100%), url(${img})`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-gray-900">
          Have a Question? <span className="text-cyan-900">Contact Us!</span>
        </h2>
        <form
          ref={ContactRef}
          onSubmit={HandleContactData}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="First_Name"
              placeholder="First Name"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
            />
            <input
              type="text"
              name="Last_Name"
              placeholder="Last Name"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
            />
          </div>
          <input
            type="email"
            name="Email"
            placeholder="Your Email Address"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
          />
          <div className="phone-input-container"> {/* Added a container for PhoneInput styling */}
            <PhoneInput
              onChange={setMobileNumber}
              value={MobileNumber}
              defaultCountry="IN" // Default to India as per current context
              id="Mobile_Number"
              placeholder="WhatsApp / Viber Number (with country code)"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg custom-phone-input"
              // You might need a custom class to override react-phone-number-input's default styles
            />
          </div>
          <textarea
            rows={5}
            name="Message"
            placeholder="How can we help you today?"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg resize-y"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-xl hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactform;