import Image from "next/image";
import Title from "./ui/title";
import { Button } from "./ui/button";

const EnquireNow = () => {
  return (
    <div className="mt-16  max-w-3xl md:mx-auto mx-4  ">
      <div className="flex  rounded-md shadow-2xl md:flex-nowrap flex-wrap ">
        <div className="bg-navy flex  flex-col pt-12 w-full md:w-[90%] shadow-2xl rounded-t-md md:rounded-l-md">
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
        <div className="bg-primary flex items-center justify-center w-full md:max-w-20 shadow-md rounded-b-md md:rounded-r-md h-16 md:h-auto ">
          <p className="md:rotate-90 text-center md:text-base transform whitespace-nowrap shadow-2xl text-3xl ">
            Enquire Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnquireNow;
