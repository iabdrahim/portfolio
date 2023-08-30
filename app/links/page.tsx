import Container from "@/components/Container";
import { Metadata } from "next";
import {
    FaBlog,
    FaDiscord,
    FaGithub,
    FaInstagram,
    FaNpm,
    FaSpotify,
    FaTwitter,
} from "react-icons/fa";
import React from "react";

export const metadata: Metadata = {
    title: "abdrahimo // links",
    icons: "https://fmj.asrvd.me/📎",
    description: "all of my links in one place",
};
export default function Portfolio() {
    return (
        <Container className="max-w-3xl">
            <h1 className="w-full max-md:mt-6 text-7xl font-black max-md:text-5xl mb-6">
                Links
            </h1>
            <p className="text-gray-400 mb-6 capitalize">
                all of my links in one place
            </p>

            <div className="bg-[#fdfdfd] dark:bg-[#222] rounded-lg shadow-xl p-4 flex justify-between gap-2">
                <div className="flex flex-col w-full gap-2">
                    <div className="flex justify-between items-center dark:bg-zinc-900/60 bg-zinc-100/60 duration-200 p-2 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1">
                        <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-base md:text-base">
                            Discord{" "}
                            <span className="dark:text-zinc-600 text-zinc-500">
                                {" "}
                                {"//"}
                            </span>{" "}
                            asheeshh#4872
                        </p>
                        <p className="dark:text-zinc-300 text-zinc-800 m-0">
                            <FaDiscord />
                        </p>
                    </div>
                    <div className="flex justify-between items-center dark:bg-zinc-900/60 bg-zinc-100/60 duration-200 p-2 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1">
                        <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-base md:text-base">
                            GitHub{" "}
                            <span className="dark:text-zinc-600 text-zinc-500">
                                {" "}
                                {"//"}
                            </span>{" "}
                            @asrvd
                        </p>
                        <p className="dark:text-zinc-300 text-zinc-800 m-0">
                            <FaGithub />
                        </p>
                    </div>
                    <div className="flex justify-between items-center dark:bg-zinc-900/60 bg-zinc-100/60 duration-200 p-2 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1">
                        <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-base md:text-base">
                            Instagram{" "}
                            <span className="dark:text-zinc-600 text-zinc-500">
                                {" "}
                                {"//"}
                            </span>{" "}
                            @asrvd_
                        </p>
                        <p className="dark:text-zinc-300 text-zinc-800 m-0">
                            <FaInstagram />
                        </p>
                    </div>
                    <div className="flex justify-between items-center dark:bg-zinc-900/60 bg-zinc-100/60 duration-200 p-2 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1">
                        <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-base md:text-base">
                            Twitter{" "}
                            <span className="dark:text-zinc-600 text-zinc-500">
                                {" "}
                                {"//"}
                            </span>{" "}
                            @_asheeshh
                        </p>
                        <p className="dark:text-zinc-300 text-zinc-800 m-0">
                            <FaTwitter />
                        </p>
                    </div>

                    <div className="flex justify-between items-center dark:bg-zinc-900/60 bg-zinc-100/60 duration-200 p-2 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1">
                        <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-base md:text-base">
                            NPM{" "}
                            <span className="dark:text-zinc-600 text-zinc-500">
                                {" "}
                                {"//"}
                            </span>{" "}
                            @asheeshh
                        </p>
                        <p className="dark:text-zinc-300 text-zinc-800 m-0">
                            <FaNpm />
                        </p>
                    </div>
                    <div className="flex justify-between items-center dark:bg-zinc-900/60 bg-zinc-100/60 duration-200 p-2 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1">
                        <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-base md:text-base">
                            Spotify{" "}
                            <span className="dark:text-zinc-600 text-zinc-500">
                                {" "}
                                {"//"}
                            </span>{" "}
                            @asheeshh
                        </p>
                        <p className="dark:text-zinc-300 text-zinc-800 m-0">
                            <FaSpotify />
                        </p>
                    </div>
                    <div className="flex justify-between items-center dark:bg-zinc-900/60 bg-zinc-100/60 duration-200 p-2 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1">
                        <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-base md:text-base">
                            Dev.to{" "}
                            <span className="dark:text-zinc-600 text-zinc-500">
                                {" "}
                                {"//"}
                            </span>{" "}
                            @asheeshh
                        </p>
                        <p className="dark:text-zinc-300 text-zinc-800 m-0">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                role="img"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title></title>
                                <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"></path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex justify-between items-center dark:bg-zinc-900/60 bg-zinc-100/60 duration-200 p-2 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1">
                        <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-base md:text-base">
                            Hashnode{" "}
                            <span className="dark:text-zinc-600 text-zinc-500">
                                {" "}
                                {"//"}
                            </span>{" "}
                            @asheeshh
                        </p>
                        <p className="dark:text-zinc-300 text-zinc-800 m-0">
                            <FaBlog />
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
}
