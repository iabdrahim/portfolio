import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "abdrahimo // about",
    icons: "https://fmj.asrvd.me/🍥",
    description: "things you (maybe) want to know about me",
};
export default function Portfolio() {
    return (
        <Container className="max-w-3xl" fullWidth={true}>
            <div className="flex justify-between flex-wrap gap-4 w-full">
                <h1 className="max-md:mt-6 text-7xl font-black max-md:text-5xl">
                    About Me
                </h1>
                <img
                    className="rounded-full h-36 w-36"
                    src="https://avatars.githubusercontent.com/u/68690233?v=4"
                    alt="my avatar"
                />
            </div>

            <div className="flex justify-between">
                <p className="text-lg mb-8">
                    Most of the things you (maybe) want to know about me.
                    <br />
                    <br />
                    I'm abdrahim! Let me tell you a little bit about myself. I'm
                    a 18 years old student belonging to the Homo Sapiens
                    species, a brother, a son, a friend, a self taught web
                    developer and programmer. I was already creating amazing
                    projects using Python back in 11th grade, and started
                    frontend development soon after. So far, I've mastered many
                    languages, including TypeScript, Python, and C++.
                    <br />
                    <br />
                    Things I do other than dev and programming? Not much, but I
                    enjoy gaming and watching anime.
                    <br />
                    <br />
                    That's pretty much everything I know about me yet. In case
                    you know something about me that I still don't, please let
                    me know - I'll add it here.
                </p>
            </div>
        </Container>
    );
}
