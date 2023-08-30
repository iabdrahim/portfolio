import Pro from "@/app/portfolio/project";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "abdrahimo // portfolio",
    icons: "https://fmj.asrvd.me/✨",
    description: "some work i did",
};

export default function Portfolio() {
    let work = [
        {
            name: "Merco",
            image: "https://res.cloudinary.com/dgvxswr30/image/upload/v1685957485/My%20Uploads/project_1_slmxid.png",
            github: "https://github.com/iabdrahim/merco",
            live: "https://merco.vercel.app/",
            langs: ["nextjs", "tailwind", "mongodb", "scss"],
        },
        {
            name: "Ecommerce",
            image: "https://res.cloudinary.com/dgvxswr30/image/upload/v1685959712/My%20Uploads/project_2_ffhb2i.png",
            github: "https://github.com/iabdrahim/chomerce",
            live: "https://chomerce.vercel.app",
            langs: ["nextjs", "mongodb", "scss"],
        },
        {
            name: "hamesh blog",
            image: "https://res.cloudinary.com/dgvxswr30/image/upload/v1685957320/My%20Uploads/project_5_bsjwor.png",
            github: "https://github.com/iabdrahim/hamesh",
            live: "https://hamesh.vercel.app/",
            langs: ["nextjs", "mongodb", "scss", "tailwind"],
        },
        {
            name: "findtrend landing page",
            image: "https://res.cloudinary.com/dgvxswr30/image/upload/v1685957618/My%20Uploads/project_4_wjqr7r.png",
            github: "https://github.com/iabdrahim/findtrend",
            live: "https://findtrend-landing.netlify.app/",
            langs: ["html", "js", "css"],
        },
        {
            name: "exstore landing page",
            image: "https://res.cloudinary.com/dgvxswr30/image/upload/v1685959295/My%20Uploads/project_3_yackgj.png",
            github: "https://github.com/iabdrahim/eXStore",
            live: "https://exstore.netlify.app/",
            langs: ["bootstrab", "html", "js", "css"],
        },
    ];
    return (
        <Container>
            <div className="flex flex-col gap-2">
                <h1 className="w-full text-7xl font-black mt-4 max-md:text-5xl max-md:mt-6">
                    Portfolio
                </h1>
                <p className="text-gray-400">
                    See our previous work that helped our clients achieve the
                    desired results.
                </p>
                <div className="w-full h-[1px] bg-[#ddd] dark:bg-[#222] my-4" />
            </div>
            <main className="grid grid-cols-3 max-md:grid-cols-1 mt-8 gap-x-5 gap-y-6">
                {work.map((pro) => (
                    <Pro pro={pro} key={pro.name} />
                ))}
            </main>
        </Container>
    );
}
