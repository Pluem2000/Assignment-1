import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MENUS = [
  {
    href: "/market-diff",
    text: "Market Diff",
  },
  {
    href: "/chart",
    text: "Chart",
  },
  {
    href: "/trade",
    text: "Trade",
  },
];

const Topbar = () => {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <nav className="flex justify-between items-center px-20 py-4 bg-darkbg relative z-50">
      <div className="flex">
        <img
          src="/fin-logo.png"
          alt="fin-logo"
          className="w-[54px] h-[54px] mr-4"
        />
        <div>
          <p className="text-white text-lg font-bold">FINSTABLE</p>
          <p className="font-medium text-lightblue">Training</p>
        </div>
      </div>

      <div className="hidden space-x-28 lg:flex text-white">
        {MENUS.map((menu) => (
          <Link key={menu.href} href={menu.href}>
            <a
              className={`hover:text-lightblue transition font-medium ${router.pathname === menu.href ? "text-lightblue" : ""
                }`}
            >
              {menu.text}
            </a>

          </Link>
        ))}
      </div>
      <div className="flex lg:hidden">
        <div className="space-y-2 -mx-4">
          <span className="block w-8 h-0.5 bg-white "></span>
          <span className="block w-8 h-0.5 bg-white "></span>
          <span className="block w-8 h-0.5 bg-white "></span>
        </div>
      </div>
    </nav>


  );
};

export default Topbar;