"use client"
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import countriesData from '@/countriesData.json'


const Navbar = () => {

    const [isVisible, setVisible] = useState(false)
    function handleCountriesList(){
        setVisible(prevstate => !prevstate)
    }
    
  return (
      <header className=" flex flex-col   max-sm:mx-0 justify-around max-sm:w-screen ">

        <nav className="bg-[#0f1735]  bg-opacity-100 px-6 flex justify-between max-sm:justify-evenly py-2 items-center rounded-md max-sm:rounded-none  w-[90vw] mx-auto max-sm:m-0 max-sm:py-4 max-sm:w-screen ">
          <Image className="max-sm:w-8 max-sm:h-8"
            src="/nav.svg"
            alt="nav-logo"
            width={60}
            height={50}
          ></Image> 
          <span className="text-xl text-red-800 brightness-200 max-sm:text-sm tracking-[3px] max-sm:text-[13px] max-sm:mx-4 "> Youtube Trending </span>
          <ul className="flex max-sm:text-[13px] justify-between">
            <li className=" hover:text-red-800 transition 500 ease-in-out hover:brightness-150 hover:scale-105">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:cursor-pointer hover:text-red-800 transition 500 ease-in-out  hover:brightness-150 hover:scale-10 ml-4" onClick={handleCountriesList}>
              Countries
            </li>
          </ul>
        </nav>
      
      <ul className={`${isVisible ? 'bg-gray-400 bg-opacity-30  mt-8 mx-auto grid grid-cols-9 grid-rows-3 gap-1 pt-4 max-sm:grid-cols-3 max-md:grid-cols-6 rounded-md transition-all 300 ease-in-out w-[90vw] max-sm:text-[12px] ' : 'hidden' }`}>

        { countriesData.map((el: any) => (
            <Link className="hover:cursor-pointer hover:text-red-800 hover:brightness-150" href='/' key={el.code}>
          <div className="flex px-4 transition-all duration-300 ease-in-out hover:scale-125" >
            {el.emoji}
            <li className="flex px-2" key={el.code}>{el.name}</li>
          </div>
          </Link>
        ))}
      </ul>
      </header>

  );
};

export default Navbar;
