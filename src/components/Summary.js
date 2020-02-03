import React from "react";
import Matches from "./charts/Matches";
import Runs from "./charts/Runs";
import Wins from "./charts/Wins";
export default function Summary() {
  return (
    <div className=" h-screen ">
      <h1 className="text-pink-500 text-4xl pt-5 text-center font-bold ">
        Summary
      </h1>
      <div class="flex flex-col md:flex-row md:flex-wrap -my-2 md:mt-16">
        <div class=" px-3 py-2 md:w-1/3 ">
          <div class="bg-gray-400 h-auto rounded shadow-md text-center ">
            <Matches />
          </div>
        </div>
        <div class=" px-3 py-2 md:w-1/3 ">
          <div class="bg-gray-500 h-auto rounded shadow-md text-center">
            <Runs />
          </div>
        </div>
        <div class=" px-3 py-2 md:w-1/3 ">
          <div class="bg-gray-400 h-auto rounded shadow-md text-center">
            <Wins />
          </div>
        </div>
      </div>
    </div>
  );
}
