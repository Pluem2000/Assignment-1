import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bitkub } from "../constants/tokens-name";

const MENUS = [
  {
    href: "/",
    text: "Pay",
  },
  {
    href: "/",
    text: "History",
  },
];

const Topbar = (props: any) => {
  const router = useRouter();

  console.log(router.pathname);

  const { address } = props;

  var test = "";
  if (address != null) {
    test = address.substring(0, 5) + "..." + address.substring(37, 42);
  }

  return (
    <nav className="flex justify-between items-center px-20 py-4 bg-lightblue relative z-50 shadow-lg">
      <div className="flex">
        <img
          src="https://bkf.finance/assets/bkf-logo.png"
          alt="bkf-logo"
          className="w-[150px] h-[50px] mr-4"
        />
      </div>
      <div className="hidden space-x-6 lg:flex text-black">
        {MENUS.map((menu) => (
          <Link key={menu.href} href={menu.href}>
            <a
              className={`hover:text-lime-400 mt-2 transition font-medium ${router.pathname === menu.href ? "text-black" : ""
                }`}
            >
              {menu.text}
            </a>
          </Link>
        ))}

        <select className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-black
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
          {Bitkub.map((chainId) => (
            <option>{chainId.chainName}</option>
          ))}
        </select>

        <select className="form-select appearance-none
      block
      w-32
      px-3
      py-1.5
      text-base
      font-normal
      text-white
      bg-blue-900 bg-opacity-100 bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      relative
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
          <option>{test}</option>
        </select>
        <div className="flex absolute translate-x-72 top-7">
          <img
            src="https://support.bitkub.com/hc/article_attachments/4403997327629/image.png"
            alt="bitkub-logo"
            className="w-[30px] h-[30px] shadow-lg rounded-full border-2"
          />
        </div>
      </div>

      <div className="flex lg:hidden">
        <div className="space-y-2 -mx-4">
          <span className="block w-8 h-0.5 bg-black "></span>
          <span className="block w-8 h-0.5 bg-black "></span>
          <span className="block w-8 h-0.5 bg-black "></span>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;