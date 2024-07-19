import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CourseOfferings = () => {
  const tabItems = [
    "Key Highlights",
    "Career Opportunities",
    "Placement Assistance",
    "Academic Support",
    "Programme USP's",
    "Course Features",
    "Benefits",
    "Future Potential",
  ];

  const offerings = [
    {
      title: "Comprehensive Curriculum:",
      description:
        "Covering critical topics such as data manipulation, privacy, autonomous systems, AI in big data, healthcare, and the judicial system.",
    },
    {
      title: "Real-World Applications:",
      description:
        "Learn through case studies, ethical guidelines, and guest lectures from industry experts.",
    },
    {
      title: "Industry-Ready Skills:",
      description:
        "Equip yourself with the knowledge to handle ethical dilemmas in AI deployment across various sectors.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">
          Key Highlights
        </h2>
        <h1 className="text-2xl sm:text-3xl font-bold">
          What Does This
          <br />
          <span className="text-primary">Course Have To Offer?</span>
        </h1>
      </div>

      {/* Desktop and Tablet View */}
      <div className="hidden sm:block">
        <Tabs
          defaultValue="Key Highlights"
          className="flex flex-col sm:flex-row sm:space-x-8"
        >
          <TabsList className="flex flex-col items-stretch bg-gray-100 rounded-lg p-1 w-full sm:w-1/4 space-y-1 justify-start h-full">
            {tabItems.map((item) => (
              <TabsTrigger
                key={item}
                value={item}
                className="justify-start px-4 py-2 text-left text-sm font-medium text-gray-500 hover:text-gray-700 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black"
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="w-full sm:w-3/4 mt-4 sm:mt-0">
            <TabsContent value="Key Highlights">
              {offerings.map((offering, index) => (
                <div key={index} className="mb-6">
                  <h3 className="flex items-center text-lg font-semibold mb-2">
                    <span className="w-3 h-3 mr-3 rounded-full bg-black inline-block flex-shrink-0"></span>
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 ml-6">{offering.description}</p>
                </div>
              ))}
            </TabsContent>
            {/* Add other TabsContent components for other tabs as needed */}
          </div>
        </Tabs>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden">
        <Accordion type="single" collapsible className="w-full">
          {tabItems.map((item, index) => (
            <AccordionItem key={item} value={item}>
              <AccordionTrigger className="text-left text-sm font-medium text-gray-700 hover:text-gray-900">
                {item}
              </AccordionTrigger>
              <AccordionContent>
                {item === "Key Highlights" && (
                  <div className="space-y-4">
                    {offerings.map((offering, offeringIndex) => (
                      <div key={offeringIndex}>
                        <h3 className="flex items-center text-base font-semibold mb-2">
                          <span className="w-2 h-2 mr-2 rounded-full bg-primary inline-block flex-shrink-0"></span>
                          {offering.title}
                        </h3>
                        <p className="text-sm text-gray-600 ml-4">
                          {offering.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {/* Add content for other accordion items as needed */}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default CourseOfferings;
