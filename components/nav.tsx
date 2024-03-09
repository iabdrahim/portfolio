"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  HiOutlineMenuAlt2,
  HiHome,
  HiLink,
  HiSun,
  HiBookOpen,
  HiCollection,
} from "react-icons/hi";
import Cuts from "./shortcuts";
import { HiBolt } from "react-icons/hi2";
import { MdKeyboardCommandKey } from "react-icons/md";
import { IconType } from "react-icons";

const maxAdditionalSize = 5;

export default function Nav() {
  let [isDark, setDark] = useState(false);
  let [drop, setDrop] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);
  let r = useRouter();

  //change to dark/light
  let handleChangeTheme = () => {
    let html: any = document.querySelector(":root");
    if (isDark) {
      html.className = "light";
      localStorage.setItem("isDark", `false`);
    } else {
      html.className = "dark";
      localStorage.setItem("isDark", `true`);
    }
    setDark((prv) => !prv);
  };

  let [showCuts, setShowCuts] = useState(false);

  // get the theme from localstorage
  useEffect(() => {
    let html: any = document.querySelector(":root");
    if (localStorage.getItem("isDark") !== undefined) {
      if (localStorage.getItem("isDark") === "true") {
        setDark(true);
        html.className = "dark";
      } else if (localStorage.getItem("isDark") === "false") {
        setDark(false);
        html.className = "light";
      }
    }
  }, []);

  const handleHover = (ev: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    );

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixels * -1}px`
    );

    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixels}px`
    );
  };

  return (
    <>
      <footer className="">
        <div className="fixed top-[85vh] z-30 w-full flex justify-center items-center origin-center max-sm:top-[88vh] backdrop-blur-sm rounded-sm bg-white/20 dark:bg-black/20 max-w-fit left-2/4 -translate-x-2/4 p-1 px-2 max-sm:p-[1px]">
          <Btn to="/" handleHover={handleHover} Icon={HiHome} text="Home" />
          <Btn
            to="/portfolio"
            handleHover={handleHover}
            Icon={HiCollection}
            text="Portfolio"
          />
          <Btn
            to="/about"
            handleHover={handleHover}
            Icon={HiBookOpen}
            text="About"
          />
          <Btn
            to="/dashboard"
            handleHover={handleHover}
            Icon={HiBolt}
            text="dashboard"
          />
          <Btn
            to="/links"
            handleHover={handleHover}
            Icon={HiLink}
            text="links"
          />
          <Btn
            to=""
            handleHover={handleHover}
            Icon={HiSun}
            text="toggel theme"
            click={handleChangeTheme}
          />
          <Btn
            to=""
            handleHover={handleHover}
            Icon={MdKeyboardCommandKey}
            click={() => setShowCuts(true)}
            text="shortcuts"
          />
        </div>
      </footer>
      {showCuts && <Cuts setShowCuts={setShowCuts} />}
      <div className="h-[5rem] w-full"></div>
    </>
  );
}

let Btn = ({
  handleHover,
  Icon,
  text,
  to,
  click,
}: {
  handleHover: any;
  Icon: IconType;
  text: string;
  to: string;
  click?: any;
}) => {
  return (
    <button
      className="macBtn max-sm:scale-90"
      onMouseMove={handleHover}
      onDrag={handleHover}
      {...(click && { onClick: click })}
    >
      <Link
        className="dark:bg-[#202020] bg-[#ebeaea] border border-[#ddd] dark:border-[#222]"
        href={to}
        {...(to == "" && { ariaDisabled: true })}
      >
        <Icon size={26} className="fill-black dark:fill-white" />
        <span>{text}</span>
      </Link>
    </button>
  );
};

export const scaleValue = (
  value: number,
  from: [number, number],
  to: [number, number]
) => {
  const scale = (to[1] - to[0]) / (from[1] - from[0]);
  const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
  return Math.floor(capped * scale + to[0]);
};
