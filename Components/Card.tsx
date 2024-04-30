"use client";
import React, { useState } from "react";
import Image from "next/image";
import LikeViewStats from "@/Components/LikeViewStats"

const Card = ({ title, desc, thumbnail, viewCount, commentCount, likeCount }) => {
  const [descToggle, setDescToggle] = useState(false);

  const handleToggle = () => {
    setDescToggle((prev) => !prev);
  };
  return (
    <div className="shadow-md bg-opacity-20 flex-col mt-0 mx-auto w-[300px] h-[350px] overflow-auto max-sm:w-[200px] max-sm:h-[300px] max-sm:mr-4 rounded-md backdrop-blur-md hover:cursor-pointer hover:scale-105 transistion duration-300 ease-in-out hover:border-[1px] border-blue-800 border-opacity-50 max-sm:border-[1px] px-2">
      <Image
        className="w-[300px] h-[200px]"
        src={thumbnail}
        alt="thumbnail"
        width={360}
        height={300}
      ></Image>
      <h1 className="text-lg  max-sm:text-[14px] my-0 px-2 line-clamp-3">{title}</h1>
      < LikeViewStats likeCount={likeCount} viewCount={viewCount} commentCount={commentCount} />
      {/* <p
        onClick={handleToggle}
        className={`${
          descToggle ? "mt-2 overflow-auto" : "text-blue-600 text-sm mt-2 hover:cursor-pointer"
        }`}
      >
        {descToggle ? desc : "click to see description..."}
      </p> */}
    </div>
  );
};

export default Card;
