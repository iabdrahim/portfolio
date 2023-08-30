// import SEO from "@/components/Common/SEO";
"use client";

import React, { ReactElement } from "react";

function Container({
    children,
    fullWidth,
    className,
}: {
    children: any;
    fullWidth?: boolean;
    className?: string;
}) {
    return (
        <>
            <main
                className={`m-auto w-full transition-all h-full minHiegth ${
                    !fullWidth
                        ? "max-w-6xl mx-auto px-4 max-md:px-2"
                        : "px-4 md:px-24"
                } ${!className ? "" : className}`}
            >
                {children}
            </main>
        </>
    );
}
export default Container;
