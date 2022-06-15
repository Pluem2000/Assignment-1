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

const Topbar = () => {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div className="flex justify-between items-center px-20 py-4 bg-darkbg ">
      <div className="flex">
        <img
          src="/bkf-logo.png"
          alt="bkf-logo"
          className="w-[54px] h-[54px] mr-4"
        />
      </div>

      <div className="flex text-white space-x-10">
        {MENUS.map((menu) => (
          <Link key={menu.href} href={menu.href}>
            <a
              className={`hover:text-lightblue transition font-medium ${
                router.pathname === menu.href ? "text-lightblue" : ""
              }`}
            >
              {menu.text}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topbar;