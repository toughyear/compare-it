import React from "react";
import Grounds from "./charts/Grounds";
import Opponents from "./charts/Opponents";

export default function Stats() {
  return (
    <div className=" h-full bg-blue-100 ">
      <h1 className="text-gray-800 text-4xl  md:text-6xl pt-5 text-center font-bold ">
        Quick Stats
      </h1>
      <p className="px-5 text-gray-800 mt-2 mb-5 md:text-xl text-center">
        Difficult Opponents on different turfs. These are some stats that prove
        that he is a true vetran when it comes to cricket.
      </p>
      <div class="flex flex-col  md:flex-wrap items-center -my-2 md:mt-16">
        <div class=" px-3 py-2  w-11/12  ">
          <div class="bg-gray-300 h-auto shadow-lg  text-center ">
            <Opponents />
          </div>
        </div>
        <div class=" px-3 py-2  w-11/12  ">
          <div class="bg-gray-300 h-auto shadow-lg  text-center">
            <Grounds />
          </div>
        </div>
      </div>
    </div>
  );
}
