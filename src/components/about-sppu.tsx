import Image from "next/image";
import Title from "./ui/title";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const AboutSppu = () => {
  return (
    <section className="pt-10 overflow-hidden  sm:pt-16 xl:pt-32 mx-auto">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <Image
            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
            src="/sppu-building.jpg"
            alt="sppu"
            width={100}
            height={100}
          />

          <div className="text-left flex gap-4 flex-col">
            <Title className="text-left">
              About Savitribai Phule Pune University{" "}
            </Title>
            <p className="max-w-lg text-sm leading-relaxed text-gray-600 text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>

            <div>
              <Button variant="outline">
                Read More <MoveRight className="w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSppu;
