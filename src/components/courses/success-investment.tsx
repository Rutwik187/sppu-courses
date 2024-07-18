import React from "react";

const SuccessInvestment = () => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 sm:p-8 flex flex-col lg:flex-row items-center justify-between my-20">
      <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <h2 className="text-xl sm:text-xl font-bold mb-2">Course Fees</h2>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Invest In <br />
          <span className="text-primary">Your Success</span>
        </h1>
      </div>

      <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 lg:mb-0">
        <h3 className="text-center text-gray-600 mb-2">Program Fee</h3>
        <p className="text-center text-3xl sm:text-4xl font-bold mb-1">
          ₹ 66,000/-
        </p>
        <p className="text-center text-xs sm:text-sm text-gray-500 mb-4">
          (Inclusive Of All Taxes)
        </p>

        <ul className="text-xs sm:text-sm mb-4">
          <li>• Inclusions</li>
          <li>• Job portal access</li>
          <li>• Campus Experience at IITB & Microsoft</li>
          <li>• Triple Certification</li>
          <li>• 3 Interactive Workshops</li>
          <li className="text-xs mt-2">
            Note: Completion of the optional courses of Microsoft and eCornell
            is a must in order to obtain a certification from them respectively.
          </li>
        </ul>

        <button className="w-full bg-orange-400 hover:bg-primary text-white font-bold py-2 px-4 rounded">
          Enroll Now
        </button>
      </div>

      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
        <img
          src="/pricing-person.png"
          alt="Successful professional"
          className="w-48 sm:w-64 h-auto"
        />
      </div>
    </div>
  );
};

export default SuccessInvestment;
