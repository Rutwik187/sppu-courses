import Image from "next/image";
import Title from "../ui/title";

const CourseSnapshot = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg mt-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <Image
              src="/students.png"
              alt="Students"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* center */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm text-gray-600 ">
                Introduction To Executive Blockchain
              </p>
              <Title className="text-start my-2">Course Snapshot</Title>
            </div>
            <div className="flex justify-between">
              {["Learning Hours", "Course Credits", "Modules"].map(
                (label, index) => (
                  <div key={label} className="text-center">
                    <p className="text-3xl font-bold text-gray-800">
                      {[48, 18, 9][index]}
                    </p>
                    <p className="text-sm text-gray-600">{label}</p>
                  </div>
                )
              )}
            </div>
            <div className="mt-8 flex gap-2 flex-col">
              {[
                "100% Placement Assistance",
                "Learn Power BI in Depth",
                "Explore 5+ Tools used in Data Science",
                "Theory + Practical Learning",
                "Placement Oriented Training",
                "Access to University's IBM Network",
              ].map((detail) => (
                <div key={detail} className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right section with details */}
        <div className="lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Top Employers in India</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Tata Consultancy Services",
              "Infosys",
              "Wipro",
              "Accenture",
              "HDFC Bank",
              "ICICI Bank",
              "Apollo Hospitals",
              "Cognizant",
              "Capgemini",
              "Government Agencies",
            ].map((employer) => (
              <li key={employer} className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {employer}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseSnapshot;
