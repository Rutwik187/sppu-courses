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
import Announcements from "@/components/announcements";
import Footer from "@/components/footer";
import ContactUs from "@/components/contact-us";
import { MobileNav } from "@/components/mobile-nav";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className=" mx-auto">
      <div className=" mx-auto md:mt-6 flex flex-col gap-10  sm:gap-16 lg:gap-20">
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
  );
}
