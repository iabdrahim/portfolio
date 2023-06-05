import Link from "next/link";
import React, { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Nav";
import AboutMe from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <div className="page h-full">
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default Home;
