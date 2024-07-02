import Image from "next/image";
import Title from "./ui/title";
import { Button } from "./ui/button";

const EnquireNow = () => {
  return (
    <div className="mt-16  max-w-3xl mx-auto  ">
      <div className="flex  rounded-md shadow-2xl">
        <div className="bg-navy flex  flex-col pt-12 w-[90%] shadow-2xl  rounded-l-md">
          <Title className="text-white mx-4 my-2">
            Unlock Your Career Potential
          </Title>
          <p className="text-white text-center">In Association with</p>
          <div className="p-4 flex items-center justify-center bg-white m-4 rounded-md gap-4">
            <Image
              src="/sppu-logo.png"
              width={80}
              height={80}
              alt="sppu logo"
            />
            <Image src="/dot-logo.png" width={80} height={80} alt="sppu logo" />
          </div>
        </div>
        <div className="bg-primary flex items-center justify-center max-w-20 shadow-md  rounded-r-md">
          <p className="rotate-90 text-center w-full text-base transform whitespace-nowrap shadow-2xl">
            Enquire Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnquireNow;
