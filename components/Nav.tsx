import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

export default function Nav() {
  let [isOpen, setOpen] = useState(false);
  let [isVisibles, setVisibles] = useState({
    hero: false,
    about: false,
    pro: false,
    contact: false,
  });

  const handleVisibility = () => {
    if (document.querySelector(".hero")) {
      const { top, y, height } = document
        .querySelector(".hero")
        .getBoundingClientRect();
      const isVisible = y + height > 0;
      setVisibles((prv) => ({ ...prv, hero: isVisible }));
    }
    if (document.querySelector(".about")) {
      const { top, y, height } = document
        .querySelector(".about")
        .getBoundingClientRect();
      const isVisible = y <= 0 && y + height > 0;
      setVisibles((prv) => ({ ...prv, about: isVisible }));
    }
    if (document.querySelector(".project")) {
      const { top, y, height } = document
        .querySelector(".project")
        .getBoundingClientRect();
      const isVisible = y <= 0 && y + height > 10;

      setVisibles((prv) => ({ ...prv, pro: isVisible }));
    }
    if (document.querySelector(".contact")) {
      const { top, y, height } = document
        .querySelector(".contact")
        .getBoundingClientRect();
      const isVisible = y <= 0 && y + height > 10;

      setVisibles((prv) => ({ ...prv, contact: isVisible }));
    }
  };

  useEffect(() => {
    // Call the visibility check on initial mount and scroll
    handleVisibility();
    window.addEventListener("scroll", handleVisibility);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);
  return (
    <>
      <div className="observer h-4 w-full hidden max-md:block"></div>
      <nav className="max-md:block hidden">
        <div className={`flex m justify-between items-center mb-10 w-full`}>
          <h3>ABDRAHIM ANEDAM</h3>
          <HiOutlineMenuAlt3 onClick={() => setOpen(!isOpen)} size={24} />
        </div>
      </nav>
      <aside className={isOpen ? "closed" : ""}>
        <div className={`flex m justify-between items-center mb-20 `}>
          <h3>ABDRAHIM ANEDAM</h3>
          <CgClose onClick={() => setOpen(!isOpen)} size={24} />
        </div>
        <ul>
          <li className={isVisibles.hero ? "active" : ""}>
            <a href="#HERO">HERO</a>
          </li>
          <li className={isVisibles.about ? "active" : ""}>
            <a href="#ABOUT">About</a>
          </li>
          <li className={isVisibles.pro ? "active" : ""}>
            <a href="#PORTOFOLIO">PORTOFOLIO</a>
          </li>
          <li className={isVisibles.contact ? "active" : ""}>
            <a href="#CONTACT">CONNTACT</a>
          </li>
        </ul>
      </aside>
    </>
  );
}
