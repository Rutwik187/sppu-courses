import CareerGrowth from "@/components/courses/career-growth";
import CoursesOfferings from "@/components/courses/cources-offerings";
import CourseIntro from "@/components/courses/course-intro";
import CourseSnapshot from "@/components/courses/course-snapshot";
import CourseTrack from "@/components/courses/course-track";
import SuccessStories from "@/components/courses/success-stories";

const Page = () => {
  return (
    <div>
      <CourseIntro />
      <CourseSnapshot />
      <CoursesOfferings />
      <CourseTrack />
      {/* <CareerGrowth />
      <SuccessStories /> */}
    </div>
  );
};

export default Page;
