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
          <h3>ABDRAHIM anedam</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem,
            odit aliquam eius accusantium fuga fugiat maiores omnis ad vitae,
            illo inventore vero voluptatibus facere recusandae nemo, ipsum
            ratione impedit.
          </p>
        </div>
      </div>
    </div>
  );
}
