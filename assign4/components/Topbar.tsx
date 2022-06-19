import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
  return (
    <nav className="flex justify-between items-center px-20 py-4 bg-white relative z-50 shadow-lg">
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
              className={`hover:text-lightblue mt-2 transition font-medium ${router.pathname === menu.href ? "text-lightblue" : ""
                }`}
            >
              {menu.text}
            </a>
          </Link>
        ))}
        {/* <button
          id="dropdownBkcButton"
          data-dropdown-toggle="bitkubchain"
          className="text-blue-700 hover:bg-blue-200 border border-indigo-600  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white "
          type="button"
        >
          Bitkub Chain
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <button
          id="dropdownBkcButton"
          data-dropdown-toggle="bitkubchain"
          className="text-blue-700 hover:bg-blue-200 border border-indigo-600  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white"
          type="button"
        >
          {address}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button> */}
        <select className="form-select appearance-none
      block
      w-32
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
          <option selected>Bitkub Chain</option>
        </select>
        <select className="form-select appearance-none
      block
      w-96
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
          <option selected>{address}</option>
        </select>
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