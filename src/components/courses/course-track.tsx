import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CourseTrack = () => {
  const tabItems = [
    "Programme Curriculum",
    "Industry Placement Scenario: Ethics In AI In India",
    "Placement Trends",
    "Salary Expectations",
  ];

  const modules = [
    {
      title: "Module 1: Introduction to Ethics in AI",
      topics: [
        "Overview of AI ethics",
        "Historical context and societal impact",
        "Applications across industries",
      ],
    },
    {
      title: "Module 2: AI and Data Manipulation",
      topics: [
        "Understanding and mitigating data manipulation",
        "Case studies and fairness in machine learning",
      ],
    },
    // ... Add other modules here
    {
      title: "Module 11: AI and Society",
      topics: [
        "Social impact, policy considerations, and the need for ethical AI",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500">Introduction To</p>
        <h1 className="text-3xl font-bold">
          Core <span className="text-primary">Track</span>
        </h1>
      </div>

      <Tabs defaultValue="Programme Curriculum">
        <TabsList className="w-full flex justify-between border-b">
          {tabItems.map((item) => (
            <TabsTrigger
              key={item}
              value={item}
              className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black"
            >
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="Programme Curriculum" className="mt-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {modules.map((module, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2">{module.title}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-sm text-gray-600">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TabsContent>
        {/* Add other TabsContent components for other tabs as needed */}
      </Tabs>
    </div>
  );
};

export default CourseTrack;
