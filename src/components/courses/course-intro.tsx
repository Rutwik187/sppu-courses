"use client";
import React, { useState } from "react";
import Image from "next/image";
import Title from "../ui/title";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CourseIntro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("User Information:", userInfo);
    // Here you would typically send this information to your server
    downloadBrochure();
    setIsModalOpen(false);
  };

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/course-brochure.pdf";
    link.download = "course-brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-stretch max-w-6xl mx-auto px-4 py-8">
      <div className="z-10 w-full md:w-2/3 bg-white rounded-3xl shadow-md p-6 md:pr-12">
        <p className="text-sm text-gray-600">
          Savitribai Phule Pune University&apos;s
        </p>
        <Title className="text-start text-black my-4">
          Professional Certification Program in Ethics in AI
        </Title>
        <ul className="list-disc pl-5 mt-4 text-sm md:text-base space-y-2">
          <li>Work in AI with most demanded Ethics required by Industry</li>
          <li>Learn from India&apos;s #1 State University</li>
          <li>Get Certified from Savitribai Phule Pune University</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold">Delivery:</span>
            <span className="text-sm">Classroom + Live Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold">Duration:</span>
            <span className="text-sm">3 Months</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold">Start Date:</span>
            <span className="text-sm">1st October 2024</span>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <Button onClick={() => setIsModalOpen(true)}>
            Download Brochure
          </Button>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">
            Apply Now
          </Button>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full hidden md:block ">
        <Image
          className="rounded-l-3xl object-cover"
          src="/course-image-1.png"
          layout="fill"
          objectFit="cover"
          alt="course"
        />
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Download Brochure</DialogTitle>
            <DialogDescription>
              Please provide your information to download the brochure.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  className="col-span-3"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Download</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseIntro;
