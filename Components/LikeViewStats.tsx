import React from 'react'
import Image from 'next/image'
import {numFormatter} from '@/helperFn'
import {LikeViewStatsType} from '@/types/ComponentPropsType'

const LikeViewStats = ({viewCount, commentCount, likeCount}: LikeViewStatsType) => {
  return (
    <div className='flex flex-row justify-between items-center border-blue-900 border-[0.5px] p-2 mt-2 border-dotted rounded-md'>
        <Image className='flex p-0 m-0' src="/view.svg" alt="stat" height={20} width={20}></Image>
        <p className='flex text-sm max-sm:text-[12px]'>{numFormatter(viewCount)}</p>
        <Image className='flex' src="/like.svg" alt="stat" height={20} width={20}></Image>
        <p className='flex text-sm max-sm:text-[12px]'>{numFormatter(likeCount)}</p>
        <Image className='flex' src="/comment.svg" alt="stat" height={20} width={20}></Image>
        <p className='flex text-sm max-sm:text-[12px]' >{numFormatter(commentCount)}</p>
    </div>
  )
}

export default LikeViewStats