"use client";

import { useState } from "react";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

export default function Pro({
    pro,
}: {
    pro: {
        langs: string[];
        name: string;
        image: string;
        github: string;
        live: string;
    };
}) {
    let [height, setHeight] = useState(0);
    return (
        <div className="flex flex-col gap-2">
            <div className="image rounded-xl overflow-hidden w-full max-h-80 border border-solid dark:border-[#222] border-[#ddd] h-80">
                <img
                    src={pro.image}
                    className="object-cover w-full h-fit max-h-fit hoverMove min-h-full"
                    alt="project image"
                    style={{ transform: "translateY(-" + height + "px)" }}
                    onMouseEnter={(e) => {
                        let h = (e.target as HTMLElement).offsetHeight - 320;
                        setHeight(h);
                    }}
                    onMouseLeave={() => setHeight(0)}
                />
            </div>
            <div className="info flex justify-between items-start">
                <div className="flex flex-col">
                    <h3 className="text-2xl max-md:text-xl font-bold capitalize">
                        {pro.name}
                    </h3>
                    <p className="capitalize max-md:text-sm">
                        {pro.langs.join(" , ")}
                    </p>
                </div>
                <div className="flex gap-2 op mt-2">
                    <a
                        className="cursor-pointer p-1"
                        href={pro.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiGithub size={20} />
                    </a>
                    <a
                        className="cursor-pointer p-1"
                        href={pro.live}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiArrowUpRight size={22} />
                    </a>
                </div>
            </div>
        </div>
    );
}
