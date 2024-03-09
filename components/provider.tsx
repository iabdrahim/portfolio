"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const cut1 = (e: KeyboardEvent) => e.ctrlKey && e.key === "h";
  const cut2 = (e: KeyboardEvent) => e.ctrlKey && e.key === "d";
  const cut3 = (e: KeyboardEvent) => e.ctrlKey && e.key === "l";
  const cut4 = (e: KeyboardEvent) => e.ctrlKey && e.key === "p";
  const cut5 = (e: KeyboardEvent) => e.ctrlKey && e.key === "a";
  let r = useRouter();
  const handleShortCut = (e: KeyboardEvent) => {
    if (cut1(e)) {
      r.push("/");
    } else if (cut2(e)) {
      r.push("/dashboard");
    } else if (cut3(e)) {
      r.push("/links");
    } else if (cut4(e)) {
      r.push("/portfolio");
    } else if (cut5(e)) {
      r.push("/about");
    }
  };
  const ignore = (e: KeyboardEvent) => {
    if (cut1(e) || cut2(e) || cut3(e) || cut4(e) || cut5(e)) {
      e.preventDefault();
    }
  };
  useEffect(() => {
    if (!window) return;
    window.addEventListener("keyup", handleShortCut);
    window.addEventListener("keydown", ignore);
    return () => {
      return (
        window.removeEventListener("keyup", handleShortCut),
        window.removeEventListener("keydown", ignore)
      );
    };
  }, []);
  return (
    <>
      {children}
      {/* <ProgressBar
        height="5px"
        color="#ffffff"
        options={{ showSpinner: false }}
        shallowRouting
      /> */}
    </>
  );
};

export default Providers;
