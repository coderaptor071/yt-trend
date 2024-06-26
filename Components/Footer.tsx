"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  const sendEmail = () => {
    const subject = encodeURIComponent('RE: Query/Work');
    const body = encodeURIComponent('Hi,\n\n[Your message here]\n\nBest regards,\n[Your Name]');
    const mailtoLink = `mailto:workwithsimarsingh@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <footer className='flex flex-col justify-evenly items-center w-[95vw] mt-14 mb-4 mx-2 flex-grow max-sm:text-[14px] gap-2'>

    <h2 className='text-gray-500 w-[inherit]'>Any issue or suggestion reach me at my website
    <div className='text-blue-800 brightness-150 hover:scale-125 hover:cursor-pointer transition-transform inline-block ml-1 animate-bounce text-xl max-sm:text-[18px]'><Link target='_blank' href='https://workwithsimar-portfolio-site.vercel.app/'>here </Link></div>  or just drop a mail to <p onClick={sendEmail} className='text-blue-800 brightness-150 hover:scale-125 hover:cursor-pointer transition-transform inline-block ml-1  text-lg max-sm:text-[15px]'>workwithsimarsingh@gmail.com </p> </h2>
    

    <div className='flex justify-between items-center w-[inherit] '>
    <h2 className='text-gray-500'>copyright ©©2024</h2>
    <h2 className='text-gray-400'>
        Code <Link className='text-blue-600' target='_blank' href='https://github.com/coderaptor071/yt-trend'> @Github <Image className='animate-pulse' style={{ display: 'inline-block', verticalAlign: 'middle' }} src='/github.svg' alt='github logo' height={40} width={40}>
        </Image> </Link>
    </h2>
    </div>

    </footer>
  )
}

export default Footer