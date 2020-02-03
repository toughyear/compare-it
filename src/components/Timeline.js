import React from "react";
import TimelineChart from "./charts/TimelineChart";

export default function Timeline() {
  return (
    <div className=" h-screen bg-blue-100 ">
      <h1 className="text-gray-800 text-4xl  md:text-6xl pt-5 text-center font-bold ">
        The Journey
      </h1>
      <p className="px-5 text-gray-800 mt-2 mb-5 md:text-xl text-center">
        People throw stones at you and you convert them into milestones - Sachin
        Tendulkar
      </p>
      <div class="flex flex-col  md:flex-wrap items-center -my-2 md:mt-16">
        <div class=" px-3 py-2  w-11/12  ">
          <div class="bg-gray-300 h-auto shadow-lg  text-center ">
            <TimelineChart />
          </div>
        </div>
      </div>
    </div>
  );
}
