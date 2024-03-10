import Container from "@/components/Container";
import { Metadata } from "next";
import Stats from "./stats";

let techs = [
  "js",
  "cpp",
  "mongodb",
  "nodejs",
  "express",
  "typescript",
  "sass",
  "nextjs",
  "react",
  "tailwindcss",
  "figma",
  "git",
];

export const metadata: Metadata = {
  title: "abdrahimo // dashboard",
  icons: "https://fmj.asrvd.me/🏷️",
  description: "random stats and stuff related to me",
};
export default function Portfolio() {
  return (
    <Container>
      <h1 className="w-full text-7xl font-black mt-4 max-md:text-[2.4rem] mb-6 max-md:mt-6">
        Dashboard
      </h1>
      <div className="flex flex-col gap-2">
        <p className="text-gray-400 mb-2 max-md:text-base">
          Technologies i have used recently:
        </p>
        <div className="flex gap-4 flex-wrap items-center justify-start">
          {techs.map((iconName) => (
            <img
              key={iconName}
              src={"https://skillicons.dev/icons?i=" + iconName}
              className="max-w-full w-fit h-12"
            ></img>
          ))}
        </div>
        <p className="text-gray-400 mt-6 max-md:text-base">
          Random stats related to me.
        </p>
        <div className="w-full bg-[#ddd] h-[1px] my-4 dark:bg-[#222]"></div>
        <Stats />
      </div>
    </Container>
  );
}
