import { Facebook, Instagram } from "@/constants/allSvgs";
import Image from "next/image";

const Footer = () => {
  return (
    <footer class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8 border-t border-[#770006] mt-6 md:mt-14">
        <div class="mt-8 grid grid-cols-4 gap-8 lg:mt-0 md:grid-cols-5 lg:gap-y-16">
          <div class="col-span-2 sm:col-span-1 flex flex-col md:items-center justify-center pl-2 md:pl-0">
            <Image alt="logo" height={100} width={100} src="/logo.png" />
            <p className="text-[#770006] mt-2">Quintessential</p>
          </div>

          <div class="col-span-2 sm:col-span-1 pl-2 md:pl-0">
            <p class="font-medium text-[#770006]">QUICK LINKS</p>

            <ul class="mt-2 space-y-1 text-sm">
              <li>
                <a href="#" class="text-[#770006] transition hover:opacity-75">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" class="text-[#770006] transition hover:opacity-75">
                  Delivery Policy
                </a>
              </li>

              <li>
                <a href="#" class="text-[#770006] transition hover:opacity-75">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" class="text-[#770006] transition hover:opacity-75">
                  Return & Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div class="col-span-2 sm:col-span-1 pl-2 md:pl-0">
            <p class="font-medium text-[#770006]">ACCOUNT</p>
            <ul class="mt-2 space-y-1 text-sm">
              <li>
                <a href="#" class="text-[#770006] transition hover:opacity-75">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" class="text-[#770006] transition hover:opacity-75">
                  My Profile
                </a>
              </li>
              <li>
                <a href="#" class="text-[#770006] transition hover:opacity-75">
                  My Orders
                </a>
              </li>
            </ul>
          </div>

          <div class="col-span-2 sm:col-span-1 pl-2 md:pl-0">
            <p class="font-medium text-[#770006]">COMPANY</p>
            <ul class="mt-2 space-y-1 text-sm">
              <li>
                <a href="#" class="text-[#770006] transition hover:opacity-75">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="text-[#770006] transition hover:opacity-75">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div class="col-span-2 sm:col-span-1 pl-2 md:pl-0">
            <p class="font-medium text-[#770006]">SOCIAL LINKS</p>

            <ul class="mt-2 space-x-2 flex items-center justify-start">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  class="text-[#770006] transition hover:opacity-75"
                >
                  <span class="sr-only">Facebook</span>

                  <Facebook />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  class="text-[#770006] transition hover:opacity-75"
                >
                  <span class="sr-only">Instagram</span>

                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="my-4 border-t border-gray-100 pt-8">
          <div class="flex items-center justify-center">
            <p class="text-sm text-[#770006]">
              &copy; quintessential, 2021 Eightlabs Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
