"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "Privacy", href: "/privacy" },
    { text: "Terms", href: "/terms" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-indigo-900/90 shadow-xl" : "bg-indigo-800/80 shadow-md"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20 px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/img/Logo.svg" width={160} height={45} alt="Logo" />
        </Link>

        <div className="hidden md:flex space-x-6">
          {navItems.map(({ text, href }) => (
            <Link
              key={href}
              href={href}
              className="text-white text-base font-medium hover:text-amber-300 transition-colors"
            >
              {text}
            </Link>
          ))}
        </div>

        <div
          onClick={toggleNav}
          className="md:hidden text-white cursor-pointer p-2 rounded hover:bg-white/10"
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>

        <div
          className={`fixed top-0 left-0 w-3/4 h-full p-6 bg-indigo-900 text-white z-50 transform ${
            nav ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <div className="mb-6 border-b border-white/10 pb-4">
            <Image src="/img/Logo.svg" width={140} height={40} alt="Logo" />
          </div>
          <div className="flex flex-col space-y-5">
            {navItems.map(({ text, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setNav(false)}
                className="text-lg hover:text-cyan-300"
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
