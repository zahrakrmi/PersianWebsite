'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (href) => {
    setActiveLink(href);
    closeMenu(); 
  };

  return (
    <nav className="md:fixed md:p-5 items-center flex justify-evenly md:justify-start h-full md:h-[100px]  w-full z-10 bg-gray-700 ">
      <figure className="w-5/12 md:w-3/12 flex justify-center">
        <Link href="/">
          <Image
            width={100}
            height={100}
            alt="logo"
            src="/logo-4.png"
          />
        </Link>
      </figure>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-3xl">
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      <ul
        className={`h-full *:my-5 *:mx-5 md:flex text-white text-lg transition-all duration-300 ${
          isMenuOpen
            ? "flex flex-col items-center absolute bg-gray-600 w-full top-[70px] left-0 z-10 p-5"
            : "hidden md:flex"
        }`}
      >
        {[
          { href: "/", label: "خانه" },
          { href: "/option", label: "ویژگی ها" },
          { href: "/product", label:"محصولات " },
          { href: "/Contact", label:"تماس با ما" },
        ].map((link) => (
          <li key={link.href} className="mb-4 md:mb-0 md:mr-5">
            <Link
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`pb-2 ${
                activeLink === link.href
                  ? "border-b-2 border-[#56adac]"
                  : "border-b-2 border-transparent"
              } transition-all duration-300`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="py-2 px-10 font-bold tex-xl md:absolute md:left-10 text-white ">
      <SearchIcon/>
      </div>
    </nav>
  );
}
