"use client";

import logo from "../public/images/header/360fencing.png";
import {createContext, useContext, useEffect, useRef, useState} from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import {useGSAP} from "@gsap/react";

const NavBarContext = createContext<any>(null);

function Header() {
  return (
    <header className="p-5 header h-Header bg-Header rounded-b-Header xs:h-max">
      <div className="flex items-center justify-center gap-3">
        <div className="w-360logoWeight xs:w-32">
          <Image className="object-cover" src={logo} alt="" priority />
        </div>

        <div className="relative w-full h-[0.29rem] bg-white top-[0.38rem] xs:hidden">
          <div
            className="text-black rounded-xl bg-white w-max absolute top-[-14px] px-5 py-1 border-black border right-5  
            xs:hidden
            "
          >
            ° آکادمی شمشیر بازی سیصدو شصت درجه
          </div>
        </div>
      </div>
      <NavBar></NavBar>
    </header>
  );
}

function NavBar(props: any) {
  const [menuActivtiy, setMenuActivty] = useState(true);
  const mobileMenuEl = useRef<HTMLDivElement>(null);
  const mobileMenuBtn = useRef(null);
  const mobileMenuHeigth = mobileMenuEl.current?.scrollHeight;
  const [mobileMenu, setMenu] = useState(false);
  return (
    <NavBarContext.Provider value={{menuActivtiy, setMenuActivty, setMenu}}>
      <div className="overflow-hidden">
        <div className="flex-col hidden gap-3 xs:flex xs:justify-center xs:items-center xs:mt-4">
          <div
            onClick={(v) => {
              if (mobileMenu === false) {
                setMenuActivty(false);
                setMenu(!mobileMenu);
                return;
              }

              setMenuActivty(false);
              gsap
                .fromTo(
                  ".mboile-menu",
                  {height: mobileMenuEl.current?.scrollHeight},
                  {height: 0, padding: 0}
                )
                .then(() => {
                  setMenu(!mobileMenu);
                  setMenuActivty(true);
                });
            }}
            className={`flex flex-col gap-[0.35rem] cursor-pointer ${
              !menuActivtiy && "pointer-events-none"
            }`}
            ref={mobileMenuBtn}
          >
            <div className="w-[2.5rem] h-[0.2rem] bg-white"></div>
            <div className="w-[2.5rem] h-[0.2rem] bg-white"></div>
            <div className="w-[2.5rem] h-[0.2rem] bg-white"></div>
          </div>

          {mobileMenu && <MobileMenu mobileMenuEl={mobileMenuEl}></MobileMenu>}
        </div>

        <div className="pr-5 xs:hidden">
          <NavLinks></NavLinks>
        </div>
      </div>
    </NavBarContext.Provider>
  );
}

function MobileMenu({mobileMenuEl}: any) {
  const {menuActivtiy, setMenuActivty} = useContext(NavBarContext);
  useGSAP(() => {
    gsap
      .fromTo(".mboile-menu", {height: "0"}, {height: "auto", direction: 1})
      .then(() => setMenuActivty(true));
  });
  return (
    <div
      ref={mobileMenuEl}
      className="w-full h-full py-3 bg-white mboile-menu rounded-xl"
    >
      <NavLinks hoverColor={"text-black"} direction={"flex-col"}></NavLinks>
    </div>
  );
}

function NavLinks({direction = "", hoverColor = "text-white"}) {
  return (
    <ul
      className={`flex ${direction} md:my-1  gap-NavBar text-Regular text-nowrap text-center h-full items-center md:gap-5 xs:gap-3 `}
      dir="rtl"
    >
      <NavLink to="/">خانه</NavLink>
      <NavLink to="/competitions">مسابقات</NavLink>
      <NavLink to="/register">ثبت نام در باشگاه</NavLink>
      <NavLink to="/about">درباره با ما</NavLink>
    </ul>
  );
}

function NavLink({children, to}: any) {
  return (
    <li className={`transition-all  hover:text-white xs:hover:text-black`}>
      <Link href={to}>{children}</Link>
    </li>
  );
}

export default Header;
