import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CareerGrowth = () => {
  const opportunities = [
    {
      title: "Skill Advancement",
      description:
        "Continuous Learning And Certification In Advanced Topics Like Data Privacy, Ethical AI Implementation, And AI Regulations Are Essential For Career Progression.",
    },
    {
      title: "Specialization",
      description:
        "Focusing On Specific Sectors Such As Healthcare, Finance, Or Autonomous Systems Can Lead To Specialized And Higher-Paying Roles.",
    },
    {
      title: "Leadership Roles",
      description:
        "With Experience, Professionals Can Move Into Leadership Positions Such As Chief Ethics Officer, AI Ethics Manager, Or Head Of AI Policy.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-gray-500 text-center">About The</p>
        <h1 className="text-4xl font-bold text-center mb-12">
          Career Growth <span className="text-orange-500">Opportunities</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardHeader>
                <div className="h-40 bg-gray-200 mb-4 flex items-end justify-center">
                  {/* Replace with actual stair-step diagram */}
                  <div className="w-8 h-8 bg-gray-400 mb-2"></div>
                  <div className="w-8 h-16 bg-gray-400 mb-2 ml-1"></div>
                  <div className="w-8 h-24 bg-gray-400 mb-2 ml-1"></div>
                  <div className="w-8 h-32 bg-gray-400 mb-2 ml-1"></div>
                </div>
                <CardTitle>{opp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{opp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerGrowth;
