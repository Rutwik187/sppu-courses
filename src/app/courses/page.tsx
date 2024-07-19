import CareerGrowth from "@/components/courses/career-growth";
import CertificationCard from "@/components/courses/certification-card";

import CourseIntro from "@/components/courses/course-intro";
import CourseOfferings from "@/components/courses/course-offerings";
import CourseSnapshot from "@/components/courses/course-snapshot";
import CourseTrack from "@/components/courses/course-track";

import SuccessInvestment from "@/components/courses/success-investment";
import SuccessStories from "@/components/courses/success-stories";

const Page = () => {
  return (
    <div>
      <CourseIntro />
      <CourseSnapshot />
      <CourseOfferings />

      <CourseTrack />
      <CareerGrowth />
      <SuccessStories />
      <CertificationCard />
      <SuccessInvestment />
    </div>
  );
};

export default Page;
