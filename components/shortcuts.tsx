"use client";
import Link from "next/link";

export default function Cuts({
    setShowCuts,
}: {
    setShowCuts: (c: boolean) => void;
}) {
    let shortcuts = [
        { name: "home", key: "h" },
        {
            name: "about",
            key: "a",
        },
        { name: "dashboard", key: "d" },
        { name: "links", key: "l" },
        { name: "portfolio", key: "p" },
    ];
    return (
        <div
            className="z-40 select-none backdrop-blur bg-zinc-800/30 font-clash overflow-hidden"
            style={{
                position: "fixed",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",
                height: "100vh",
                top: "0px",
                left: "0px",
                inset: "0px",
                padding: "14vh 16px 16px",
            }}
            onClick={() => setShowCuts(false)}
        >
            <div
                className="w-[90%] z-50 relative lg:w-[44%] md:w-2/3 overflow-hidden text-lg text-white bg-zinc-100 rounded-lg dark:bg-zinc-900 min-w-500 shadow-xl kbar"
                style={{
                    transform: "scale(0.99)",
                    pointerEvents: "auto",
                }}
            >
                <div
                    style={{
                        maxHeight: "400px",
                        position: "relative",
                        overflow: "auto",
                    }}
                >
                    <div
                        role="listbox"
                        id="kbar-listbox"
                        style={{ height: "476px", width: "100%" }}
                    >
                        <h3 className="text-gra-400 text-base my-4">
                            Navigation
                        </h3>
                        {shortcuts.map((shortcut) => (
                            <Link
                                href={"/" + shortcut.name}
                                key={shortcut.key}
                                aria-selected="false"
                            >
                                <div className="py-2 px-3 flex gap-2 align-center justify-between  transition-all transparent">
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col text-sm text-gray-900 dark:text-zinc-200 cursor-pointer">
                                            <div className="flex gap-2">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    height="1rem"
                                                    width="1rem"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                    <polyline points="9 22 9 12 15 12 15 22" />
                                                </svg>
                                                <span>{shortcut.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <kbd className="px-2 py-1 mr-2 text-sm bg-zinc-300 rounded dark:bg-zinc-700 dark:text-zinc-300 text-zinc-600 h-fit">
                                            ctrl
                                        </kbd>
                                        +
                                        <kbd className="px-2 py-1 ml-2 text-sm bg-zinc-300 rounded dark:bg-zinc-700 dark:text-zinc-300 text-zinc-600 h-fit">
                                            {shortcut.key}
                                        </kbd>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
