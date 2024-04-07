import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/constants/colors";
import { NavLinks } from "@/constants/navLinks";
import { Cart, HamBurger } from "@/constants/allSvgs";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className={`bg-[#ffe5f0] border-b border-[#770006] relative lg:px-8`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo.png"
            className="h-12 w-10"
            alt="Logo"
            width={50}
            height={70}
          />
        </Link>
        <div className="flex items-center md:order-2 ">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <Image
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
              width={50}
              height={50}
            />
          </button>
          <Link className="ml-4 mr-2 lg:ml-2" href="/cart">
            <Cart className={`text-[#770006]`} />
          </Link>
          <div
            className={`z-50 ${
              !mobileMenuOpen ? "hidden" : "block md:hidden"
            } my-4 text-base list-none bg-[${
              COLORS.pink
            }] divide-y divide-gray-100 shadow text-[#770006] absolute top-14 right-0`}
            id="user-dropdown "
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-[#770006]">Bonnie Green</span>
              <span className="block text-sm  text-[#770006] truncate">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              {NavLinks.map(({ link, name }) => (
                <li key={name}>
                  <Link href={link} className="block px-4 py-2 text-sm">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#770006] rounded-lg md:hidden focus:outline-none ml-0 md:ml-2"
            aria-controls="navbar-user"
            aria-expanded="false"
            onClick={() =>
              setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen)
            }
          >
            <span className="sr-only">Open main menu</span>
            <HamBurger className={`text-[#770006]`} />
          </button>
        </div>
        <div
          className={`hidden lg:block items-center justify-between w-full md:flex md:w-auto md:order-1 z-50`}
          id="navbar-user"
        >
          <ul
            className={`flex flex-col font-medium p-4 md:p-0 mt-4 bg-[#ffe5f0] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 text-[#770006]`}
          >
            {NavLinks.map(({ link, name }) => (
              <li key={name}>
                <Link href={link} className="block py-2 px-3 md:p-0 ">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
