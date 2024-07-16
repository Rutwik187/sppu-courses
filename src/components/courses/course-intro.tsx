import Image from "next/image";
import Title from "../ui/title";
import { Button } from "../ui/button";

const CourseIntro = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-stretch max-w-6xl mx-auto px-4 py-8">
      <div className="z-10 w-full md:w-2/3 bg-white rounded-3xl shadow-md p-6 md:pr-12">
        <p className="text-sm text-gray-600">
          Savitribai Phule Pune University&apos;s
        </p>
        <Title className="text-start text-black my-4">
          Professional Certification Program in Ethics in AI
        </Title>
        <ul className="list-disc pl-5 mt-4 text-sm md:text-base space-y-2">
          <li>Work in AI with most demanded Ethics required by Industry</li>
          <li>Learn from India&apos;s #1 State University</li>
          <li>Get Certified from Savitribai Phule Pune University</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold">Delivery:</span>
            <span className="text-sm">Classroom + Live Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold">Duration:</span>
            <span className="text-sm">3 Months</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold">Start Date:</span>
            <span className="text-sm">1st October 2024</span>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <Button className="">Download Brochure</Button>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">
            Apply Now
          </Button>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full hidden md:block ">
        <Image
          className="rounded-l-3xl object-cover"
          src="/course-image-1.png"
          layout="fill"
          objectFit="cover"
          alt="course"
        />
      </div>
    </div>
  );
};

export default CourseIntro;
