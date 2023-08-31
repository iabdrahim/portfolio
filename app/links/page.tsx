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
    { name: "Discord", value: "@iabdrahim", icon: SiDiscord },
    { name: "GitHub", value: "@iabdrahim", icon: SiGithub },
    { name: "Instagram", value: "@abdrahimo", icon: SiInstagram },
    { name: "Twitter", value: "@iabdrahimz", icon: SiTwitter },
    { name: "Facebook", value: "@imabdrahim", icon: SiFacebook },
    { name: "Spotify", value: "@abdrahimo", icon: SiSpotify },
    { name: "Dev.to", value: "@abdrahimo", icon: SiDevdotto },
    { name: "my blog", value: "hamesh.vercel.app", icon: SiBlogger },
];

export const metadata: Metadata = {
    title: "abdrahimo // links",
    icons: "https://fmj.asrvd.me/📎",
    description: "all of my links in one place",
};
export default function Portfolio() {
    return (
        <Container className="max-w-3xl">
            <h1 className="w-full max-md:mt-6 text-7xl font-black max-md:text-[2.8rem] mb-6">
                Links
            </h1>
            <p className="text-gray-400 mb-6 capitalize">
                all of my links in one place
            </p>

            <div className="bg-[#fdfdfd] dark:bg-[#222] rounded-lg shadow-xl p-4 flex justify-between gap-2">
                <div className="flex flex-col w-full gap-2">
                    {Links.map((link) => (
                        <div
                            key={link.name}
                            className="flex justify-between items-center dark:bg-zinc-900/60 bg-zinc-100/60 duration-200 p-2 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1"
                        >
                            <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-base md:text-base">
                                {link.name}
                                <span className="dark:text-zinc-600 text-zinc-500">
                                    {" "}
                                    {"//"}
                                </span>{" "}
                                {link.value}
                            </p>
                            <p className="dark:text-zinc-300 text-zinc-800 m-0">
                                {link.icon({})}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}
