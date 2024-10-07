import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, ChevronsRight } from "lucide-react";

const tabData = [
  {
    value: "rhinology1",
    title: "Speciality Rhinology 1",
    tabimage: "/01.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/07.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology2",
    title: "Speciality Rhinology 2",
    tabimage: "/02.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/08.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology3",
    title: "Speciality Rhinology 3",
    tabimage: "/03.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/09.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology4",
    title: "Speciality Rhinology 4",
    tabimage: "/04.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/10.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology5",
    title: "Speciality Rhinology 5",
    tabimage: "/05.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/5.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology6",
    title: "Speciality Rhinology 6",
    tabimage: "/06.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/6.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology7",
    title: "Speciality Rhinology 7",
    tabimage: "/07.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/4.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology8",
    title: "Speciality Rhinology 8",
    tabimage: "/08.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/07.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
  {
    value: "rhinology9",
    title: "Speciality Rhinology 9",
    tabimage: "/09.png",
    description: "Procedur arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
    image: "/08.jpg",
    features: [
      "Qualified Doctors",
      "24×7 Emergency Services",
      "General Medical",
      "Feel like Home Services",
      "Outdoor Checkup",
      "Easy and Affordable Billing",
    ],
  },
];
const OurDepartment = () => {
  return (
    <div className="bg-[#f5f9ff] px-4 md:px-10 lg:px-28 pb-16 md:pb-16">
      <div className="pt-12 md:pt-20">
        <p className="text-center text-xl md:text-3xl">We Are The</p>
        <h1 className="text-2xl md:text-5xl font-bold text-center mt-4 pb-8 md:pb-16">
          Best Our Departments Centers
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 w-full">
          <div>
            <Tabs defaultValue="rhinology1" className="w-full">
              {/* Adjust the TabsList for better scrolling behavior on mobile */}
              <TabsList className="grid grid-cols-2 md:flex md:py-14 gap-3 h-[33rem] md:h-0 overflow-x-auto overflow-y-hidden bg-none">
                {tabData.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="p-4 md:p-6"
                  >
                    <div>
                      <Image
                        src={tab.tabimage}
                        width="50"
                        height="50"
                        alt="Tab Image"
                      />
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              {tabData.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg">
                    <div>
                      <div>
                        <h1 className="text-xl md:text-2xl font-semibold mx-5 md:mx-10 mt-8 md:mt-24">
                          {tab.title}
                        </h1>
                        <p className="font-medium text-gray-500 mx-5 md:mx-10 mt-2 md:mt-4">
                          {tab.description}
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 mx-5 md:mx-10 gap-y-2 md:gap-y-3 my-4 md:my-7">
                          {tab.features.map((feature) => (
                            <li
                              key={feature}
                              className="font-medium text-gray-500 flex items-center gap-2"
                            >
                              <Check className="w-4 md:w-5 text-[#0071ef]" />{" "}
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="bg-[#0071ef] text-white px-6 py-3 md:px-8 md:py-4 font-semibold mx-5 md:mx-10 flex justify-center items-center text-sm md:text-md mt-3 gap-2">
                          Appointment Now <ChevronsRight className="text-white" />
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="m-3">
                        <Image
                          src={tab.image}
                          width="500"
                          height="500"
                          className="w-full h-auto object-cover"
                          alt="Responsive Image"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDepartment;
