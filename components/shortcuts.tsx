"use client";
import Link from "next/link";
import { HiHome, HiLink, HiBookOpen, HiCollection } from "react-icons/hi";
import { HiBolt } from "react-icons/hi2";
export default function Cuts({
  setShowCuts,
}: {
  setShowCuts: (c: boolean) => void;
}) {
  let shortcuts = [
    { name: "home", key: "h", icon: HiHome },
    {
      name: "about",
      key: "a",
      icon: HiBookOpen,
    },
    { name: "dashboard", key: "d", icon: HiBolt },
    { name: "links", key: "l", icon: HiLink },
    { name: "portfolio", key: "p", icon: HiCollection },
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
            className="w-full h-full py-4 px-2 "
          >
            <h3 className=" text-base text-gray-900 dark:text-zinc-200 mb-4 px-4 font-semibold">
              Navigation
            </h3>
            {shortcuts.map((shortcut) => (
              <Link
                href={"/" + shortcut.name}
                key={shortcut.key}
                aria-selected="false"
              >
                <div className="py-2 px-3 flex gap-2 align-center justify-between transition-all transparent">
                  <div className="flex text-sm text-gray-900 dark:text-zinc-200 gap-2 capitalize items-center cursor-pointer small-svg">
                    {shortcut.icon({})}
                    <span>{shortcut.name}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-500 scale-90">
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
