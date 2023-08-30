"use client";

import { useState } from "react";
export async function fetcher<JSON>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(input, init);
    return res.json();
}
import useSWR from "swr";
export default function Stats() {
    const { data: githubData } = useSWR<{
        stars: number;
        followers: number;
    } | null>("/api/github", fetcher);
    const { data: umamiData } = useSWR<any | null>("/api/umami", fetcher);
    const { data: wakatimeData } = useSWR<{ total_seconds: 0 } | null>(
        "/api/wakatime",
        fetcher
    );
    const diffCalc = () => {
        const diff =
            (new Date().getTime() - new Date("May 21, 2007").getTime()) /
            1000 /
            60 /
            60 /
            24 /
            365;
        return diff.toFixed(9);
    };
    const [age, setAge] = useState(diffCalc());
    setInterval(() => {
        setAge(diffCalc());
    }, 10);
    const statCards = [
        {
            title: "My Age",
            value: age,
            link: "https://asrvd.me/about",
        },
        {
            title: "GitHub Stars",
            value: githubData?.stars,
            link: "https://github.com/asrvd",
        },
        {
            title: "GitHub Followers",
            value: githubData?.followers,
            link: "https://github.com/asrvd?tab=followers",
        },

        {
            title: "Site Views",
            value: umamiData?.pageviews.value,
            link: "https://u.asrvd.me/share/DMvDSMzs/personal%20site",
        },
        {
            title: "Coding Hours",
            value: Math.round((wakatimeData?.total_seconds as number) / 3600),
            link: "https://wakatime.com/@asheeshh",
        },
    ];
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-4 gap-4">
            {statCards.map((card) => (
                <div
                    key={card.title}
                    className="bg-[#f7f7f7] dark:bg-[#222222b2] rounded-lg shadow-lg p-4 flex flex-col justify-between gap-2 border border-[#ddd] dark:border-[#222] border-solid "
                >
                    <a
                        className="text-zinc-700 dark:text-zinc-400 flex gap-4 m-0"
                        href={card.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {card.title}
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                    <h3 className="text-zinc-900 dark:text-zinc-200 m-0">
                        {card.value}
                    </h3>
                </div>
            ))}
        </div>
    );
}
