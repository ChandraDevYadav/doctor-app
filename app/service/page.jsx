import React from "react";
import Hero from "./_components/Hero";
import SideCom from "./_components/SideCom";
import MainCom from "./_components/MainCom";

const service = () => {
  return (
    <div>
      <Hero />
      <div className="grid grid-cols-6 gap-6 px-6 md:px-28 pt-10">
        <div className="col-span-6 md:col-span-2 order-2 md:order-1">
          <SideCom />
        </div>
        <div className="col-span-6 md:col-span-4 order-1 md:order-2">
          <MainCom />
        </div>
      </div>
    </div>
  );
};

export default service;
