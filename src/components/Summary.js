import React from "react";
import Matches from "./charts/Matches";
import Runs from "./charts/Runs";
import Wins from "./charts/Wins";
export default function Summary() {
  return (
    <div className=" h-screen bg-blue-100 ">
      <h1 className="text-gray-800 text-4xl  md:text-6xl pt-5 text-center font-bold ">
        Summary
      </h1>
      <p className="px-5 text-gray-800 mt-2 mb-5 md:text-xl text-center">
        Comaparing can be difficult without numbers. So here are some of the
        numbers that will make you accept Sachin as the greatest of all.
      </p>
      <div class="flex flex-col md:flex-row md:flex-wrap -my-2 md:mt-16">
        <div class=" px-3 py-2 md:w-1/3 ">
          <div class="bg-gray-300 h-auto shadow-lg text-center ">
            <Matches />
          </div>
        </div>
        <div class=" px-3 py-2 md:w-1/3 ">
          <div class="bg-gray-300 h-auto shadow-lg text-center">
            <Runs />
          </div>
        </div>
        <div class=" px-3 mb-24 py-2 md:w-1/3 ">
          <div class="bg-gray-300 h-auto shadow-lg text-center">
            <Wins />
          </div>
        </div>
      </div>
    </div>
  );
}
