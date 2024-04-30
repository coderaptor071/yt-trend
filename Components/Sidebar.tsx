"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import countryFlagEmoji from "country-flag-emoji";

const catCode = {
  Music: 10,
  Gaming: 20,
  News: 25,
  Sports: 17,
  Entertainment: 24,
  Blogs: 22,
};

const countries = [
  "Australia",
  "Brazil",
  "Canada",
  "Germany",
  "India",
  "Japan",
  "Mexico",
  "Nigeria",
  "Pakistan",
  "Philippines",
  "United Kingdom",
  "United States",
];

const Sidebar = () => {
  const handleCategoryChange = (value: number) => {};

  return (
    <div className="flex flex-col sticky justify-center  p-4 items-center rounded-md border-blue-800 border-opacity-50 backdrop-brightness-100 border-solid border-[1px] w-fit h-2/5 mt-14 max-md:w-1/5 max-sm:w-fit max-sm:p-1 max-sm:h-fit max-sm:pb-4 z-30 ">
      <h1 className="flex text-xl mt-3   max-sm:text-[15px] max-sm:mt-4 max-sm:justify-start max-sm:align-top">
        Trending by Category
      </h1>
      <ul className="list-disc flex flex-col mt-6 max-sm:mt-1  max-sm:text-[12px]">
        {Object.entries(catCode).map(
          ([key, value]): ReactNode => (
            <li
              className="flex hover:text-red-800 hover:brightness-150  hover:scale-125 transition ease-in-out 500 hover:cursor-pointer"
              key={value}
              onClick={() => handleCategoryChange(value)}
            >
              {key}
            </li>
          )
        )}
      </ul>
      <h1 className="flex text-xl mt-4 backdrop-blur-md max-sm:mt-1  max-sm:text-[15px]">Top Countries</h1>
      <ul className={`list-disc flex flex-col mt-6 max-sm:mt-1 max-sm:text-[12px]`}>
        {countryFlagEmoji.list
          .filter((el: any) => countries.includes(el.name))
          .map((el: any) => (
            <Link className="hover:cursor-pointer flex hover:text-red-800 hover:brightness-150  hover:scale-110 transition ease-in-out 500 hover:text-xl" href="/" key={el.code}>
              <div className="flex px-4  ">
                {el.emoji}
                <li className="flex px-2" key={el.code}>
                  {el.name}
                </li>
              </div>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
