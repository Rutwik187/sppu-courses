import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const SuccessStories = () => {
  const stories = [
    {
      sector: "IT Sector",
      image: "/it-sector.png", // Replace with actual path
      description:
        "A graduate from an AI ethics certification program was hired by Infosys as an AI Ethics Consultant with a starting package of INR 6.5 lakhs per annum.",
    },
    {
      sector: "Healthcare Sector",
      image: "/it-sector.png", // Replace with actual path
      description:
        "An experienced professional joined Apollo Hospitals as a Data Privacy Officer with a salary of INR 12 lakhs per annum.",
    },
    {
      sector: "Public Sector",
      image: "/it-sector.png", // Replace with actual path
      description:
        "A certified AI ethics specialist was employed by a government agency to help draft AI regulations, earning INR 15 lakhs per annum.",
    },
  ];

  return (
    <div className="bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-gray-500 text-center">About The</p>
        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="text-primary">Success</span> Stories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardHeader className="items-center">
                <Image
                  width={1000}
                  height={1000}
                  src={story.image}
                  alt={story.sector}
                  className="w-24 h-24 object-contain mb-4"
                />
                <CardTitle className="text-xl font-semibold">
                  {story.sector}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  {story.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
