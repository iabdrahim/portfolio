import React, { useEffect } from "react";

export default function About() {
  return (
    <div className="section about" id="ABOUT">
      <h2>About me</h2>
      <div className="pl-10 mt-5 flex justify-start items-start gap-7 max-md:flex-col max-md:gap-4 max-md:pl-4">
        <div className="img">
          <img
            src="https://res.cloudinary.com/dgvxswr30/image/upload/v1685957113/My%20Uploads/avatar_n8jgk5.jpg"
            alt=""
          />
        </div>
        <div className="bio flex justify-start items-start flex-col gap-4">
          <h3>ABDRAHIM aneddam</h3>
          <div className="">
            <p className="flex flex-col gap-4 justify-start items-start">
              I&apos;m Abderrahim aneddam, I currently have valuable experience
              as a Frontend Engineer, When I&apos;m not immersed in coding or
              designing, I find solace in the pages of books and manga, immerse
              myself in captivating video games, or indulge in the world of
              anime.
              <h5 className="font-normal w-full">
                Some technologies I have worked with recently:
              </h5>
              <ul className="list-disc flex gap-2 pl-4 flex-col w-full">
                <li>Next.js</li>
                <li>MongoDB(mongoose)</li>
                <li>Tailwind CSS</li>
                <li>React</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
