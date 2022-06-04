import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

const MENUS = [
  {
    href: "/",
    text: "30M",
  },
  {
    href: "/",
    text: "1H",
  },
  {
    href: "/",
    text: "24H",
  },
  {
    href: "/",
    text: "1W",
  },
  {
    href: "/",
    text: "1M",
  },
  {
    href: "/",
    text: "1Y",
  },

];

const ChartGraph = () => {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div className="flex justify-between items-center ml-36 px-20 py-4 bg-white rounded-lg shadow-lg relative z-50">
      <div className="flex">
        <img
          src="/b-logo.png"
          alt="b-logo"
          className="w-[54px] h-[54px] mr-4"
        />
        <img
          src="/t-logo.png"
          alt="t-logo"
          className="w-[54px] h-[54px] mr-4"
        />
        <div className="mt-4">
          <p className="text-black text-base font-bold">BTC/USDT</p>
        </div>
        <img
          src="/bt-logo.png"
          alt="bt-logo"
          className="w-[20px] h-[20px] mx-4 mt-4 "
        />
      </div>

      <div className="flex text-black space-x-8 ml-44">
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
  )
}

export default ChartGraph