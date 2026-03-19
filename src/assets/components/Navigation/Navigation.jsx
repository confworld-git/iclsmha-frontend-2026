// components/Navigation/Navigation.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuMenu, LuX } from "react-icons/lu";
import { navigationData } from "./navigationData";
import "./Navigation.css";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("overflow-hidden", !isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <nav className="bg-[#024355] fixed top-6 lg:top-18 left-0 right-0 z-40 py-3 px-4 ">
        <div className="w-full flex items-center justify-between">
          <a href="/" className="flex-shrink-0" onClick={closeMobileMenu}>
            <img
              src="/images/logo/ICLSMHA logo2.jpg"
              alt="ICLSMHA Conference Logo"
              className="h-12  lg:h-16 w-auto max-w-[180px] lg:max-w-[210px]"
            />
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {navigationData.map((item, index) => (
              <div key={index} className="relative group">
                {item.title === "Login" ? (
                  <a
                    href={item.path}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-[#024355] bg-white transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                ) : item.path ? (
                  <a
                    href={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-yellow-300"
                        : "text-white hover:text-yellow-300"
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.children && (
                      <RiArrowDropDownLine className="text-lg group-hover:rotate-180 transition-transform duration-500" />
                    )}
                  </a>
                ) : (
                  <div className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-white cursor-pointer group-hover:text-yellow-300 transition-colors duration-200">
                    <span>{item.title}</span>
                    {item.children && (
                      <RiArrowDropDownLine className="text-lg group-hover:rotate-180 transition-transform duration-500" />
                    )}
                  </div>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-100 z-50">
                    {item.children.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        href={child.path}
                        className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                          childIndex === 0 ? "rounded-t-lg" : ""
                        } ${
                          childIndex === item.children.length - 1
                            ? "rounded-b-lg"
                            : ""
                        } ${
                          location.pathname === child.path
                            ? "bg-gray-100 text-[#024355] font-medium"
                            : "text-gray-700 hover:bg-gray-100 hover:text-[#024355]"
                        }`}
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white hover:text-yellow-300 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b bg-[#024355]">
          <img
            src="/images/logo/ICLSMHA logo2.jpg"
            alt="ICLSMHA Logo"
            className="h-10 w-auto"
          />
          <button
            onClick={closeMobileMenu}
            className="p-1 text-white hover:text-yellow-300"
            aria-label="Close menu"
          >
            <LuX size={20} />
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          {navigationData.map((item, index) => (
            <div key={index}>
              {item.title === "Login" ? (
                <a
                  href={item.path}
                  onClick={closeMobileMenu}
                  className="block mx-4 my-2 px-6 py-3 text-center text-base font-semibold rounded-md text-[#024355] bg-white transition-colors duration-200"
                >
                  {item.title}
                </a>
              ) : item.path ? (
                <a
                  href={item.path}
                  onClick={closeMobileMenu}
                  className={`block px-6 py-4 text-base font-medium border-b border-gray-100 transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "bg-gray-100 text-[#024355] border-l-4 border-l-[#024355]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#024355]"
                  }`}
                >
                  {item.title}
                </a>
              ) : (
                <div className="px-6 py-4 text-base font-semibold text-gray-800 bg-gray-50 border-b border-gray-100">
                  {item.title}
                </div>
              )}

              {item.children && (
                <div className="bg-gray-50 border-b-2 border-gray-200">
                  {item.children.map((child, childIndex) => (
                    <a
                      key={childIndex}
                      href={child.path}
                      onClick={closeMobileMenu}
                      className={`block px-8 py-3 text-sm border-l-2 border-transparent transition-colors duration-200 ${
                        location.pathname === child.path
                          ? "bg-gray-100 text-[#024355] font-medium border-l-[#024355]"
                          : "text-gray-600 hover:bg-gray-100 hover:text-[#024355] hover:border-l-[#024355]"
                      }`}
                    >
                      {child.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}