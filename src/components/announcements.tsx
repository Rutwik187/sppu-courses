import { Button } from "./ui/button";

const Announcements = () => {
  const announcementText =
    "Re-Revised NEP Principals and Directors One Day Workshop | M.Sc. in Media & Communication Studies Online Entrance Exam-2022 and more to be ";

  return (
    <div className="flex max-w-7xl mx-auto items-center justify-between md:mt-2 overflow-hidden">
      <div className="bg-navy text-white px-4 py-1 shadow-md overflow-hidden flex-grow">
        <div className="inline-flex animate-marquee hover:pause">
          <span className="whitespace-nowrap mr-8">{announcementText}</span>
          <span className="whitespace-nowrap mr-8">{announcementText}</span>
        </div>
      </div>
      <Button className="shadow-md flex-shrink-0">Enroll Now</Button>
    </div>
  );
};

export default Announcements;
