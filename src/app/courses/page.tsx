import CareerGrowth from "@/components/courses/career-growth";
import CoursesOfferings from "@/components/courses/cources-offerings";
import CourseIntro from "@/components/courses/course-intro";
import CourseSnapshot from "@/components/courses/course-snapshot";
import CourseTrack from "@/components/courses/course-track";

const Page = () => {
  return (
    <div>
      <CourseIntro />
      <CourseSnapshot />
      <CoursesOfferings />
      <CourseTrack />
      <CareerGrowth />
    </div>
  );
};

export default Page;
