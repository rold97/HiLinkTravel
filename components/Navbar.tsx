"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className=" flexBetween max-container padding-container relative z-30 pt-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex items-center">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className={`inline-block z-50 cursor-pointer lg:hidden ${
            nav ? "opacity-0" : "opacity-100"
          } transition-all duration-300`}
          onClick={handleNav}
        />
      </nav>

      {/* Mobile menu */}

      <nav
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-linear duration-500 absolute text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 flex flex-col w-full z-30"
            : "absolute top-0 h-screen left-[-100%] ease-linear duration-500"
        }
      >
        <Image
          src="/close.svg"
          alt="closeIcon"
          width={45}
          height={45}
          onClick={handleNav}
          className={`absolute right-[15px] top-[15px] cursor-pointer ${
            nav ? "opacity-100" : "opacity-0"
          } transition-all duration-300`}
        />

        <ul className="h-full w-full text-center pt-12 flex flex-col">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-2xl py-8 text-white cursor-pointer transition-all duration-300 hover:text-green-50"
              onClick={handleNav}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="#home" onClick={handleNav}>
              Home
            </a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery" onClick={handleNav}>
              Gallery
            </a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals" onClick={handleNav}>
              Deals
            </a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact" onClick={handleNav}>
              Contact
            </a>
          </li>
        </ul> */}
      </nav>
    </>

    // Mobile navbar
  );
};

export default Navbar;
