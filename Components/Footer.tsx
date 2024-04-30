import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-evenly items-center my-8 mx-4 flex-grow'>
    <h2 className='text-gray-500 w-fit'>Any issue or suggestion reach me at my porfolio website contact me 

    <div className='text-blue-800 brightness-150 hover:scale-125 hover:cursor-pointer transition-transform inline-block ml-1 animate-bounce text-xl'>here</div>  or just drop a mail workwithsimar@gmail.com copyright 2024</h2>
    <h2>
        Created by @Github <Link href='/'> <Image src='/github.svg' alt='github logo' height={40} width={40}>
        </Image> </Link>
    </h2>
    {/* <div><Link className='block' href='/'> Go top </Link> */}
    {/* </div> */}
    </div>
  )
}

export default Footer