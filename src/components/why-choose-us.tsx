import { Network, Puzzle, Projector, HelpCircleIcon } from "lucide-react";
import Title from "./ui/title";

const WhyChooseUs = () => {
  const services = [
    {
      name: "Blockchain Community Participation",

      icon: <Network className="text-navy size-14" />,
    },
    {
      name: "Hackathon Participation",
      icon: <Puzzle className="text-navy size-14" />,
    },
    {
      name: "Live Project",
      icon: <Projector className="text-navy size-14" />,
    },
    {
      name: "Project Development Guidance",

      icon: <HelpCircleIcon className="text-navy size-14" />,
    },
    {
      name: "Blockchain Networking Support",

      icon: <HelpCircleIcon className="text-navy size-14" />,
    },
    {
      name: "24/7 Support",

      icon: <HelpCircleIcon className="text-navy size-14" />,
    },
  ];

  return (
    <div>
      <div className="  mt-16 ">
        <div className="bg-navy p-4 rounded-md">
          <Title>Why Choose Us</Title>
          <p className="text-white text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4  max-w-5xl mx-auto  mt-8">
          {services.map((service, index) => (
            <div
              className="bg-secondary shadow-md rounded-md flex  items-center justify-center p-8 gap-4"
              key={index}
            >
              <div>{service.icon}</div>
              <h3 className="">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
