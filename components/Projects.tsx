import React, { useState } from "react";
import ProBox from "./ProBox";

export default function Projects() {
  let [projects, setPros] = useState([
    {
      name: "Ecommerce",
      img: "https://res.cloudinary.com/dgvxswr30/image/upload/v1685959712/My%20Uploads/project_2_ffhb2i.png",
      git: "https://github.com/iabdrahim/chomerce",
      live: "https://chomerce.vercel.app",
    },
    {
      name: "hamesh blog",
      img: "https://res.cloudinary.com/dgvxswr30/image/upload/v1685957320/My%20Uploads/project_5_bsjwor.png",
      git: "https://github.com/iabdrahim/hamesh",
      live: "https://hamesh.vercel.app/",
    },
    {
      name: "findtrend landing page",
      img: "https://res.cloudinary.com/dgvxswr30/image/upload/v1685957618/My%20Uploads/project_4_wjqr7r.png",
      git: "https://github.com/iabdrahim/findtrend",
      live: "https://findtrend-landing.netlify.app/",
    },
    {
      name: "exstore landing page",
      img: "https://res.cloudinary.com/dgvxswr30/image/upload/v1685959295/My%20Uploads/project_3_yackgj.png",
      git: "https://github.com/iabdrahim/eXStore",
      live: "https://exstore.netlify.app/",
    },
    {
      name: "my old PORTOFOLIO",
      img: "https://res.cloudinary.com/dgvxswr30/image/upload/v1685957485/My%20Uploads/project_1_slmxid.png",
      git: "https://github.com/iabdrahim/portofolio-v-0",
      live: "",
    },
  ]);
  return (
    <div id="PORTOFOLIO" className="section project max-md:mt-12">
      <h2>POROTOLIO</h2>
      <main className="w-full grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-12">
        {projects.map((p) => (
          <ProBox key={p.name} pro={p} />
        ))}
      </main>
    </div>
  );
}
