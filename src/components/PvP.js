import React from "react";

export default function PvP() {
  return (
    <div className=" h-screen bg-blue-100 ">
      <h1 className="text-gray-800 text-4xl  md:text-6xl pt-5 text-center font-bold ">
        Player Vs. Player
      </h1>
      <p className="px-5 text-gray-800 mt-2 mb-5 md:text-xl text-center">
        This feature will be soon available.
      </p>
      <p className="px-5 text-gray-800 mt-2 mb-5 md:text-xl text-center">
        Connect
      </p>
      <div class="flex flex-wrap justify-center -my-2">
        <div class=" px-3 py-2 ">
          <div class="px-3 bg-gray-300  rounded-lg h-auto shadow-lg  text-center text-gray-800 hover:text-pink-500">
            <a
              href="https://github.com/toughyear/compare-it"
              target="_blank"
              rel="noopener noreferrer"
              class=" md:flex py-1 md:py-3 pl-1 align-middle text-3xl no-underline "
            >
              <i class="fab fa-github pr-0 md:pr-3"></i>
              <span class="pb-1  md:pb-0 text-2xl inline-block">
                Github Repo
              </span>
            </a>
          </div>
        </div>
        <div class=" px-3 py-2 ">
          <div class="px-3 bg-gray-300  rounded-lg h-auto shadow-lg  text-center text-gray-800 hover:text-pink-500">
            <a
              href="https://toughyear.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              class=" md:flex py-1 md:py-3 pl-1 align-middle text-3xl no-underline "
            >
              <i class="fa fa-meteor pr-0 md:pr-3"></i>
              <span class="pb-1  md:pb-0 text-2xl inline-block">My site</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
