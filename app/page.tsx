import { Metadata } from "next";
import Container from "../components/Container";
import Link from "next/link";

export const metadata: Metadata = {
    title: "abdrahimo // home",
    icons: "https://fmj.asrvd.me/🎐",
    description: "abdrahim aneddam, student and web developer from Morroco",
};
export default function Home() {
    return (
        <Container className="mt-20 hero">
            <div className="">
                <h1 className="w-full max-md:mt-6 text-7xl mb-6 font-black text-center max-sm:text-[2.4rem] ">
                    I know that
                    <span className="text-[#d7b25f]"> Good Dev</span> means
                    <br />
                    <span className="text-[#d7b25f]">Good Business</span>.
                </h1>

                <div className="container text-center">
                    <h3 className="text-lg max-md:text-base font-medium">
                        Hey, I&apos;m{" "}
                        <Link
                            href="/about"
                            className="border-[2px] border-transparent border-b-[#d7b25f] border-solid hover:border-transparent"
                        >
                            Abdrahim
                        </Link>{" "}
                        , I build accessible, inclusive products and digital
                        experiences for the web.
                    </h3>
                    <h3 className="mt-4 font-medium italic">
                        Solo
                        <em className="text-[#d7b25f]">
                            <span> developer </span>
                        </em>
                        kinda student .
                    </h3>
                </div>
            </div>
        </Container>
    );
}
