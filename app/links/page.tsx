import Container from "@/components/Container";
import { Metadata } from "next";
import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiTwitter,
  SiFacebook,
  SiSpotify,
  SiDevdotto,
  SiBlogger,
} from "react-icons/si";

let Links = [
  //   {
  //     name: "Discord",
  //     url: "https:/discord.com/@iabdrahim",
  //     value: "@iabdrahim",
  //     icon: SiDiscord,
  //   },
  {
    name: "GitHub",
    url: "https://github.com/iabdrahim",
    value: "@iabdrahim",
    icon: SiGithub,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/iabdrahimo",
    value: "@iabdrahimo",
    icon: SiInstagram,
  },
  {
    name: "Twitter",
    url: "https://x.com/iabdrahimz",
    value: "@iabdrahimz",
    icon: SiTwitter,
  },
  { name: "Facebook", url: "", value: "@imabdrahim", icon: SiFacebook },
  //   { name: "Spotify", value: "@abdrahimo", icon: SiSpotify },
  {
    name: "Dev.to",
    url: "https://dev.to/abdrahimo",
    value: "@abdrahimo",
    icon: SiDevdotto,
  },
  {
    name: "blog",
    url: "https://hamesh.vercel.app",
    value: "hamesh",
    icon: SiBlogger,
  },
];

export const metadata: Metadata = {
  title: "abdrahimo // links",
  icons: "https://fmj.asrvd.me/📎",
  description: "all of my links in one place",
};
export default function Portfolio() {
  return (
    <Container className="max-w-2xl">
      <h1 className="w-full max-md:mt-6 text-7xl font-black max-md:text-[2.8rem] mb-6">
        Links
      </h1>
      <p className="text-gray-400 mb-6 capitalize text-sm">
        all of my links in one place
      </p>

      <div className="bg-[#fdfdfd] dark:bg-[#222] rounded-lg shadow-xl p-4 flex justify-between gap-2">
        <div className="flex flex-col w-full gap-2">
          {Links.map((link) => (
            <a
              href={link.url}
              key={link.name}
              className="flex justify-start items-center dark:bg-zinc-900/60 bg-zinc-100/60 duration-200 p-2 rounded-lg pl-3 hover:shadow-lg cursor-pointer w-full hover:-translate-y-1 gap-4"
            >
              <p className="dark:text-zinc-300 text-zinc-800 m-0">
                {link.icon({})}
              </p>
              <p className="dark:text-zinc-300 text-zinc-800 m-0 text-base">
                <span className="dark:text-zinc-500 text-zinc-600 text-sm capitalize">
                  {link.name}
                  {"//"}
                </span>{" "}
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
}
