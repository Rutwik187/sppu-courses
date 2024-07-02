import EmblaCarousel from "@/components/carousel/carousel";
import { EmblaOptionsType } from "embla-carousel";
import { Navbar } from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import Courses from "@/components/courses";
import AboutSppu from "@/components/about-sppu";
import AboutBlockChain from "@/components/about-blockchain";
import WhyChooseUs from "@/components/why-choose-us";
import Stats from "@/components/stats";
import ImpDates from "@/components/imp-dates";
import EnquireNow from "@/components/enqire-now";
import Testimonials from "@/components/testimonials";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Navbar />

      <Separator className="my-4" />

      <div className="flex h-5 items-center justify-center space-x-4 text-sm gap-8">
        <div className="font-bold">Updates</div>
        <Separator orientation="vertical" />
        <div className="font-bold">Important Dates</div>
        <Separator orientation="vertical" />
        <div className="font-bold">News - Slider</div>
      </div>
      <Separator className="mt-4" />

      <div className="max-w-7xl mx-auto">
        <div className=" mx-auto mt-12 flex flex-col gap-10  sm:gap-16 lg:gap-20">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>

        <Courses />
        <AboutSppu />
        <AboutBlockChain />
        <WhyChooseUs />
        <Stats />
        <ImpDates />
        <EnquireNow />
        <Testimonials />
      </div>
    </>
  );
}
