import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-evenly items-center my-12 mx-6 flex-grow'>
        <div className='flex flex-col justify-between '>
    <h2 className='text-gray-500 w-fit'>Any issue or suggestion reach me at my website
    <div className='text-blue-800 brightness-150 hover:scale-125 hover:cursor-pointer transition-transform inline-block ml-1 animate-bounce text-xl'>here </div>  or just drop a mail to <p className='text-blue-800 brightness-150 hover:scale-125 hover:cursor-pointer transition-transform inline-block ml-1  text-lg'> workwithsimar@gmail.com </p> </h2>
    <h2 className='text-gray-300 mt-4'>copyright 2024</h2>
    </div>
    <h2>
        Code <Link className='text-blue-600' href='/'> @Github <Image className='animate-pulse' style={{ display: 'inline-block', verticalAlign: 'middle' }} src='/github.svg' alt='github logo' height={40} width={40}>
        </Image> </Link>
    </h2>
    {/* <div><Link className='block' href='/'> Go top </Link> */}
    {/* </div> */}
    </footer>
  )
}

export default Footer