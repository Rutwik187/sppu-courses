import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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
    <div className=" bg-gradient-to-b from-gray-100 to-white p-8 mt-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-gray-500 text-center">About The</p>
        <h1 className="text-4xl font-bold text-center mb-12">
          Career Growth <span className="text-primary">Opportunities</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardHeader>
                <div className=" bg-gray-200 mb-4 flex items-end justify-center object-cover">
                  <Image
                    src="/career-opportunity.png"
                    width={1000}
                    height={1000}
                    alt="growth"
                  />
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
