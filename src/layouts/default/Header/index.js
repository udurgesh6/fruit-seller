import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/constants/colors";
import { NavLinks } from "@/constants/navLinks";
import { Cart, HamBurger } from "@/constants/allSvgs";
import LoginModal from "@/components/modal/LoginModal";
import { CartContext } from "@/context/CartContext";
import CartModal from "@/components/modal/CartModal";
import { UserContext } from "@/context/UserContext";
import { FiUser } from "react-icons/fi";

const Header = () => {
  const router = useRouter();

  const { cartItems, cartModalOpen, setCartModalOpen } =
    useContext(CartContext);
  const {
    state: { userInfo },
  } = useContext(UserContext);

  const [totalItems, setTotalItems] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const onAccountClick = () => {
    if (userInfo) {
      router.push("/account");
    } else {
      router.push("/authentication");
    }
  };

  useEffect(() => {
    setTotalItems(cartItems.length);
  }, [cartItems]);

  return (
    <nav className={`bg-[#ffe5f0] border-b border-[#770006] relative lg:px-8`}>
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      {cartModalOpen && (
        <CartModal modalOpen={cartModalOpen} setModalOpen={setCartModalOpen} />
      )}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={() => setModalOpen(!modalOpen)}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo.png"
            className="h-12 w-10"
            alt="Logo"
            width={50}
            height={70}
          />
        </button>
        <div className="flex items-center md:order-2 ">
          <button
            className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={onAccountClick}
          >
            <span className="sr-only">Open user menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#770006]"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            aria-label="Total"
            className="relative px-3 text-white text-2xl font-bold ml-4 mr-2 lg:ml-2"
            onClick={() => setCartModalOpen((cartModalOpen) => !cartModalOpen)}
          >
            <span className="absolute z-10 top-0 left-8 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-white transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
              {totalItems}
            </span>
            <Cart className={`text-[#770006] drop-shadow-xl`} />
          </button>
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
            className={`flex flex-col font-medium p-4 md:p-0 mt-4 bg-[#ffe5f0] md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 text-[#770006]`}
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
