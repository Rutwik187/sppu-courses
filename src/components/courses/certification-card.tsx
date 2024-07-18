import React from "react";
import { Button } from "@/components/ui/button";

const CertificationCard = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md flex flex-col lg:flex-row">
      <div className="lg:flex-1 lg:pr-6 mb-6 lg:mb-0">
        <h2 className="text-3xl font-bold mb-2">
          Will I <span className="text-primary">Get Certified</span> ?
        </h2>
        <p className="text-base sm:text-lg mb-4 font-semibold">
          Professional Certification Programme in Ethics in AI
        </p>
        <p className="mb-6 text-gray-600 text-sm sm:text-base">
          Upon successfully completing this program, you'll earn a Postgraduate
          degree in Data Science and Analytics certificate. This certification
          will add considerable value to your professional credentials.
        </p>
        <Button className="w-full sm:w-auto bg-primary hover:bg-orange-600 text-white">
          Enroll Now
        </Button>
      </div>
      <div className="lg:flex-1 bg-gray-100 rounded-lg flex items-center justify-center p-6">
        <p className="text-lg sm:text-xl font-semibold text-gray-500">
          Certificate Design
        </p>
      </div>
    </div>
  );
};

export default CertificationCard;
