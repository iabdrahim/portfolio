"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    HiOutlineMenuAlt2,
    HiHome,
    HiLink,
    HiSun,
    HiBookOpen,
    HiCollection,
    HiFastForward,
} from "react-icons/hi";
import Cuts from "./shortcuts";
import { MdKeyboardCommandKey } from "react-icons/md";

export default function Nav() {
    let [isDark, setDark] = useState(false);
    let [drop, setDrop] = useState(false);
    let handleTheme = () => {
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
    let [Scroll, setScroll] = useState(0);
    //window events
    useEffect(() => {
        if (!window) return;
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
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
    //event scroll
    const handleScroll = () => {
        let el = document.querySelector(".content-table");
        let af = document.querySelector(".full-post");
        if (!af || !el) return;
        if (af?.getBoundingClientRect().y * 2 <= window.scrollY) {
            el.classList.add("scrolled");
        } else {
            el.classList.remove("scrolled");
        }
    };
    let r = useRouter();

    return (
        <>
            <div className="observer-element h-2 md:h-4"></div>
            <nav
                className={`sticky-nav max-w-7xl mx-auto m-auto w-full h-6 max-md:h-5 flex flex-row justify-between items-center mb-2 md:mb-8 py-8 max-md:py-6 bg-opacity-60 px-4 ${
                    Scroll == 0 ? "" : "scrolling"
                }`}
                id="sticky-nav"
            >
                <div className="flex">
                    <div className="relative inline-block ">
                        <button
                            className="relative -translate-x-2 z-10 block hover:bg-[#f5f5f5] dark:hover:bg-[#222] p-2 border-transparent rounded-md bg-transparent focus:bg-[#f5f5f5] dark:focus:bg-[#222]"
                            onClick={() => setDrop(!drop)}
                        >
                            <HiOutlineMenuAlt2 size={24} />
                        </button>

                        <div
                            className={`absolute left-0 z-30 w-48 mt-1 origin-top-right bg-day rounded-md shadow-lg p-2 dark:bg-[#191919] border border-[#ddd] dark:border-[#222] border-solid  ${
                                drop ? "block" : "hidden"
                            }`}
                        >
                            <Link
                                href="/"
                                onClick={() => setDrop(false)}
                                className="px-2 rounded-lg py-2 text-gray-700 dark:text-gray-300 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-start gap-4 items-center"
                            >
                                <HiHome size={20} /> Home
                            </Link>
                            <Link
                                href="/portfolio"
                                onClick={() => setDrop(false)}
                                className="px-2 rounded-lg py-2 text-gray-700 dark:text-gray-300 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-start gap-4 items-center"
                            >
                                <HiCollection size={20} />
                                Portfolio
                            </Link>
                            <Link
                                href="/about"
                                onClick={() => setDrop(false)}
                                className="px-2 rounded-lg py-2 text-gray-700 dark:text-gray-300 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-start gap-4 items-center"
                            >
                                <HiBookOpen size={20} />
                                About
                            </Link>
                            <Link
                                href="/dashboard"
                                onClick={() => setDrop(false)}
                                className="px-2 rounded-lg py-2 text-gray-700 dark:text-gray-300 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-start gap-4 items-center"
                            >
                                <HiFastForward size={20} />
                                dashboard
                            </Link>
                            <Link
                                href="/links"
                                onClick={() => setDrop(false)}
                                className="px-2 rounded-lg py-2 text-gray-700 dark:text-gray-300 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-start gap-4 items-center"
                            >
                                <HiLink size={20} />
                                Links
                            </Link>
                            <button
                                className="px-2 rounded-lg py-2 text-gray-700 dark:text-gray-300 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-start gap-4 items-center"
                                onClick={handleTheme}
                            >
                                <HiSun size={20} /> toggel theme
                            </button>
                            <button
                                className="px-2 rounded-lg py-2 text-gray-700 dark:text-gray-300 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-start gap-4 items-center"
                                onClick={() => setShowCuts(true)}
                            >
                                <MdKeyboardCommandKey size={20} /> shortcuts
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {showCuts && <Cuts setShowCuts={setShowCuts} />}
        </>
    );
}
