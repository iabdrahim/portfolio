import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
export default function ProBox({ pro }: { pro: any }) {
  let Img = useRef(null);
  useEffect(() => {
    let cleanup = Img.current;
    cleanup.addEventListener("mouseenter", handleHover);
    cleanup.addEventListener(
      "mouseleave",
      () => (cleanup.style.transform = "none")
    );
    return () => (
      cleanup.removeEventListener("mouseenter", handleHover),
      cleanup.removeEventListener(
        "mouseleave",
        () => (cleanup.style.transform = "none")
      )
    );
  }, [Img]);
  const handleHover = (e) => {
    Img.current.style.transform = `translateY(-${
      Img.current.clientHeight - Img.current.parentNode.clientHeight
    }px)`;
  };
  let [isNotBlur, setNotBlur] = useState(false);
  return (
    <div
      key={pro.name}
      className="pro w-full flex flex-col justify-center items-center gap-6 "
    >
      <div className="img relative">
        <Image
          src={pro.img}
          alt={pro.name}
          unoptimized={isNotBlur}
          quality={100}
          width={0}
          priority={false}
          height={0}
          onLoadingComplete={() => setNotBlur(true)}
          ref={Img}

          // onLoad={()=>{}}
        />
        <a href={pro.git} target="_blank" rel="noreferrer">
          <button className="absolute bg-black hidden rounded-full p-2 left-4 top-2">
            <FiGithub size={24} />
          </button>
        </a>
        <a href={pro.live} target="_blank" rel="noreferrer">
          <button className="absolute bg-black hidden rounded-full p-2 left-16 top-2">
            <FiExternalLink size={24} />
          </button>
        </a>
      </div>
      <h3>{pro.name}</h3>
    </div>
  );
}
