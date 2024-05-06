"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import countriesData from '@/countriesData.json'
import {HandleQueryFilterType} from '@/types/ComponentPropsType'

const catCode = {
  All: 999,
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
  "UK",
  "USA",
];

const Sidebar = ( {handleQueryFilter} : HandleQueryFilterType ) => {
  // const handleCategoryChange = (value: number) => {};

  return (
    <aside className="flex flex-col  justify-center  p-4 items-center rounded-md border-blue-800 border-opacity-50 backdrop-brightness-100 border-solid border-[1px] w-fit h-2/5 mt-20 max-md:w-1/5 max-sm:w-[25vw] max-sm:h-fit max-sm:ml-4 z-30 max-sm:border-none max-sm:mt-6">
      <h1 className="flex text-xl mt-3 max-sm:text-[15px] max-sm:mt-4 max-sm:justify-start max-sm:align-top">
        <span className="max-sm:hidden">Trending by </span>Category
      </h1>
      <ul className="list-disc flex flex-col mt-6 max-sm:mt-1  max-sm:text-[13px] ">
        {Object.entries(catCode).map(
          ([key, value]): ReactNode => (
            <li
              className="flex hover:text-red-800 hover:brightness-150  hover:scale-125 transition ease-in-out 500 hover:cursor-pointer mb-1"
              key={value}
              onClick={() =>{ 
                handleQueryFilter({Catcode: value})
            }}
            >
              {key}
            </li>
          )
        )}
      </ul>
      <h1 className="flex text-xl mt-4 backdrop-blur-md max-sm:text-[15px] max-sm:mt-4"><span className="max-sm:hidden"> Top </span> Countries</h1>
      <ul className={`list-disc flex flex-col mt-6 max-sm:mt-1 max-sm:text-[13px] `}>
        {countriesData
          .filter((el: any) => countries.includes(el.name))
          .map((el: any) => (
            <Link className="hover:cursor-pointer flex hover:text-red-800 hover:brightness-150  ransition ease-in-out 500 hover:scale-125 mb-1" href="/" key={el.code}>
              <div className="flex  ">
                {el.emoji}
                <li onClick={() => handleQueryFilter({Countrycode: el.code})} className="flex px-2" key={el.code}>
                  {el.name}
                </li>
              </div>
            </Link>
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
