"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import LikeViewStats from "@/Components/LikeViewStats"
import {YT_API_Response} from '@/types/YtApiResponse'

const Card = ({ title, desc, thumbnail, viewCount, commentCount, likeCount, id } : YT_API_Response) => {
  const [descToggle, setDescToggle] = useState(false);

  function ytLinkCreator(id: number) {
    return (`https://www.youtube.com/watch?v=${id}`)
  }

  // Omitted commented-out handleToggle function

  return (
    <div className="shadow-md bg-opacity-20 justify-between flex flex-col justify-content-end mt-0 w-[300px] h-[350px] overflow-auto max-sm:w-[60vw] max-sm:mr-4 rounded-md backdrop-blur-md hover:cursor-pointer hover:scale-105 transistion duration-300 ease-in-out hover:border-[1px] border-blue-800 border-opacity-50 max-sm:border-[1px] px-2 max-sm:p-0 max-sm:border-none max-sm:h-[280px]">
      <Link href={ytLinkCreator(id)} target='_blank' rel="noreferrer">
        <Image
          className="w-[300px] h-[200px] max-sm:w-[15rem] max-sm:h-[10rem]"
          src={thumbnail}
          alt="thumbnail"
          width={360}
          height={300}
        />
      </Link>
      <h1 className="text-lg max-sm:text-[13px] my-0 px-2 line-clamp-3 max-sm:line-clamp-2">{title}</h1>
      <LikeViewStats likeCount={likeCount} viewCount={viewCount} commentCount={commentCount}/>  {/* Added flex-grow to LikeViewStats */}
    </div>
  );
};

export default Card;
