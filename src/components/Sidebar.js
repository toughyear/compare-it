import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div class="md:relative mx-auto lg:float-left lg:px-6">
      <div className="">
        <Link to="/summary">
          <a
            href="#"
            class="hidden md:flex py-1 md:py-3 pl-1 align-middle text-pink-500 text-3xl no-underline hover:text-pink-600 "
          >
            <i class="fab fa-github-alt pr-0 md:pr-3"></i>
            <span class="pb-1  md:pb-0 text-2xl text-pink-500 hover:text-pink-600 inline-block">
              Compare It
            </span>
          </a>
        </Link>
      </div>
      <ul class="list-reset flex flex-row md:flex-col text-center md:text-left">
        <li className="mr-3 flex-1">
          <Link to="/summary">
            <a
              href="#"
              class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500 md:focus:text-pink-500 md:focus:border-pink-500"
            >
              <i class="fas fa-chart-bar pr-0 md:pr-3"></i>
              <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Summary
              </span>
            </a>
          </Link>
        </li>
        <li className="mr-3 flex-1">
          <Link to="/byground">
            <a
              href="#"
              class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500 md:focus:text-pink-500 md:focus:border-pink-500"
            >
              <i class="fas fa-globe pr-0 md:pr-3"></i>
              <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                By Ground
              </span>
            </a>
          </Link>
        </li>
        <li className="mr-3 flex-1">
          <Link to="/byopposition">
            <a
              href="#"
              class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500 md:focus:text-pink-500 md:focus:border-pink-500"
            >
              <i class="fas fa-trophy pr-0 md:pr-3"></i>
              <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Opponent
              </span>
            </a>
          </Link>
        </li>
        <li className="mr-3 flex-1">
          <Link to="/pvp">
            <a
              href="#"
              class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500 md:focus:text-pink-500 md:focus:border-pink-500"
            >
              <i class="fas fa-columns pr-0 md:pr-3"></i>
              <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                PvP
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
