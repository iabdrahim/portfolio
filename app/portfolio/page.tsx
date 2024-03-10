import Pro from "@/app/portfolio/project";
import Container from "@/components/Container";
import { Metadata } from "next";
import { Projects } from "../constants";

export const metadata: Metadata = {
  title: "abdrahimo // portfolio",
  icons: "https://fmj.asrvd.me/✨",
  description: "some work i did",
};

export default function Portfolio() {
  return (
    <Container>
      <div className="flex flex-col gap-2">
        <h1 className="w-full text-7xl font-black mt-4 max-md:text-[2.4rem] max-md:mt-6">
          Portfolio
        </h1>
        <p className="text-gray-400 max-md:text-sm">
          See our previous work that helped our clients achieve the desired
          results.
        </p>
        <div className="w-full h-[1px] bg-[#ddd] dark:bg-[#222] my-4" />
      </div>
      <main className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mt-8 gap-x-6 gap-y-7">
        {Projects.map((pro) => (
          <Pro pro={pro} key={pro.name} />
        ))}
      </main>
    </Container>
  );
}
