import React from 'react'
import ConfettiCanvas from '../../components/ConfettiCanvas'
function DiscountConfetti() {
  return (
    <div><div className="md:rounded-xl md:py-6 md:mx-10 md:mt-12 bg-gradient-to-r from-blue-800 to-indigo-900  px-4 h-60 md:h-46 ">
        <ConfettiCanvas>
          <div className="text-center flex flex-col justify-center items-center space-y-6">
            <h2
              data-aos="zoom-out"
              className="text-center text-2xl md:text-3xl text-white font-bold md:w-6xl"
            >
              Claim a <span className="text-yellow-400">5% discount</span> on
              registration with CERADA's exclusive Premium Membership
            </h2>
            <div className="flex flex-row justify-between items-center space-x-6">
              <a
                data-aos="zoom-out"
                className="py-2 px-4 bg-yellow-500 hover:bg-white transition duration-500 text-blue-700 rounded font-semibold"
                target="_blank"
                href="https://confworld.org/Student-Membership"
              >
                Student
              </a>
              <a
                data-aos="zoom-out"
                className="py-2 px-4 bg-yellow-500 hover:bg-white text-blue-700 transition duration-500 rounded font-semibold"
                target="_blank"
                href="https://confworld.org/Professional-Membership"
              >
                Professional
              </a>
            </div>
          </div>
        </ConfettiCanvas>
      </div></div>
  )
}

export default DiscountConfetti