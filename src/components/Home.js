import React from "react";
import { useNavigate } from "react";
import Auth from "../services/auth";

function Home() {
  return (
    <div className="">
      <div className="flex flex-row-reverse pl-16 pt-16 pr-10 content-around">
        <div className="max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {" "}
              React Developers
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            1!{" "}
          </p>
        </div>
        <div className="max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {" "}
              React Developers
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            1!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
