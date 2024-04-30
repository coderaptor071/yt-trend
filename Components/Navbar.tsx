"use client"
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import countryFlagEmoji from "country-flag-emoji";

const countries = [
    "Algeria",
    "Argentina",
    "Australia",
    "Brazil",
    "Canada",
    "Colombia",
    "Egypt",
    "Ethiopia",
    "France",
    "Germany",
    "India",
    "Indonesia",
    "Iran",
    "Israel",
    "Italy",
    "Japan",
    "Mexico",
    "Nigeria",
    "Pakistan",
    "Philippines",
    "Russia",
    "South Africa",
    "Turkey",
    "United Kingdom",
    "United States"
  ];

const Navbar = () => {
    const [isVisible, setVisible] = useState(false)
    function handleCountriesList(){
        setVisible(prevstate => !prevstate)
    }
  return (
    <div className="flex flex-col  w-screen">
      <header className="mx-8 max-sm:mx-0 sticky">
        <nav className="bg-[#0f1735] bg-opacity-100 px-6 flex justify-between items-center rounded-md max-sm:rounded-none">
          <Image className="max-sm:"
            src="/nav.svg"
            alt="nav-logo"
            width={60}
            height={50}
          ></Image> 
          <span className="text-xl text-red-800 brightness-200 max-sm:text-sm tracking-[3px] "> Youtube Trending </span>
          <ul className="flex ">
            <li className="mr-8 hover:text-red-800 transition 500 ease-in-out hover:brightness-150 hover:scale-105">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:cursor-pointer hover:text-red-800 transition 500 ease-in-out  hover:brightness-150 hover:scale-105" onClick={handleCountriesList}>
              Countries
            </li>
          </ul>
        </nav>
      </header>

      <ul className={`${isVisible ? 'bg-gray-400 bg-opacity-30  mt-8  grid grid-cols-9 grid-rows-3 gap-2 mx-4 pt-4 max-sm:grid-cols-3 max-md:grid-cols-6 rounded-md transition-all 300 ease-in-out ' : 'hidden' }`}>

        { countryFlagEmoji.list.filter((el:any) => countries.includes(el.name) ).map((el: any) => (
            <Link className="hover:cursor-pointer hover:text-red-800 hover:brightness-150" href='/' key={el.code}>
          <div className="flex px-4 transition-all duration-300 ease-in-out hover:text-xl" >
            {el.emoji}
            <li className="flex px-2" key={el.code}>{el.name}</li>
          </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
