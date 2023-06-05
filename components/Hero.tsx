import React from "react";

export default function Hero() {
  return (
    <div className="section hero" id="HERO">
      <h1 className="text-9xl max-md:text-6xl max-md:gap-5">
        <div className="flex gap-4 justify-center items-center max-md:flex-col max-md:w-full">
          I AM{" "}
          <span className="effect">
            <div className="bgo">
              <span className="bg"></span>
            </div>
            <div className="tx">
              <span className="text" data-text="DEVLOPER">
                DEVLOPER
              </span>
            </div>
          </span>
        </div>
        <div className="flex gap-4 max-md:block text-center max-md:text-5xl">
          , I BUILD STUFF
          <div className="blink">_</div>
        </div>
      </h1>
    </div>
  );
}
