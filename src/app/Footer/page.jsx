import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin, IoMailOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full  flex flex-wrap justify-evenly   py-4 bg-gray-700'>
      <article className='w-full md:w-8/12 *:w-6/12 *:md:w-3/12 flex flex-wrap *:text-white  '>
        <ul className='text-xl font-bold *:text-lg  *:my-4 *:font-semibold'>دسترسی سریع
          <li> پورتال مشتریان</li>
          <li>درخواست دموی رایگان</li>
          <li>برخی ویژگی های سامانه درگاه</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
        <ul className='text-xl font-bold *:text-lg  *:my-4 *:font-semibold '>محصولات
          <li>سامانه درگاه</li>
          <li>نرم افزار مدیریت خرید و تدارکات</li>
          <li>نرم افزار مدیریت برگزاری مناقصات و مزایدات</li>
          <li>نرم افزار مدیریت قراردادها</li>
          <li>پیمانکاران </li>
          <li>نرم افزار دعاوی حقوقی و املاک </li>
        </ul>
      </article>
      <article className='w-full md:w-3/12 *:m-5 *:text-lg *:font-bold text-center capitalize *:text-white'>
        <ul className='flex *:mx-2 justify-center  transition-all duration-300' >
          <li className='hover:scale-125 text-3xl'><Link href="https://github.com/zahrakrmi"><FaGithub /></Link>
          </li>
          <li className='hover:scale-125 text-3xl'><Link href="https://www.instagram.com/zahra_karami_developer/"><FaInstagram /></Link>
          </li>
          <li className='hover:scale-125 text-3xl'><Link href="https://www.linkedin.com/in/zahra-karami-7643ba231/"><IoLogoLinkedin /></Link>
          </li>
          <li className='hover:scale-125 text-3xl'><Link href="mailto:zkrmy23@gmail.com"><IoMailOutline /></Link>
          </li>
        </ul>
        <h2>Code By ZahraKarami</h2>
        <div className="font-normal">Copyright &copy; 2025,All right reserved</div>
      </article>
    </footer>
  )
}
