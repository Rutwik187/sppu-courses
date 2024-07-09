import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Title from "./ui/title";

export default function Courses() {
  return (
    <div className="mt-16 mx-4">
      <Title>Course Section</Title>

      <div className="flex gap-6 items-center flex-wrap">
        {[1, 2, 3].map((item) => {
          return (
            <Card key={item} className="w-[400px] ">
              <CardHeader className="p-4">
                <div className="h-[161px] overflow-hidden rounded-t-md mb-4">
                  <Image
                    src="/course1.png"
                    width={350}
                    height={120}
                    alt="Course Image"
                    className="object-contain w-full h-full"
                  />
                </div>
                <CardTitle>BSc</CardTitle>
                <CardDescription>Blockchain Technolog</CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4 ">
                <p className="text-sm text-muted-foreground">
                  High Performance Coaching & Effective Learning | World Class
                  Faculties & Industry Experts | Concentrated Batch of 60
                  Students | Live Lectures + Recorded Sessions
                </p>
              </CardContent>
              <CardFooter className="flex gap-8 px-4 pb-4">
                <Button variant="outline">
                  Read More <MoveRight className="w-5 ml-2" />
                </Button>
                <Button>
                  Enroll Now <MoveRight className="w-5 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
