/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const ROUTE_ORDER = ["/", "/schematics", "/logs", "/init-core"] as const;
const EDGE_THRESHOLD = 50;

export default function ScrollNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const currentIndex = ROUTE_ORDER.indexOf(pathname as (typeof ROUTE_ORDER)[number]);
    if (currentIndex === -1) {
      setShowUp(false);
      setShowDown(false);
      return;
    }

    main.scrollTop = 0;

    const checkScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = main;
      const contentFits = scrollHeight <= clientHeight + 10;
      
      const atBottom = contentFits || (scrollTop + clientHeight) >= (scrollHeight - EDGE_THRESHOLD);
      const atTop = contentFits || scrollTop <= EDGE_THRESHOLD;

      setShowUp(atTop && currentIndex > 0);
      setShowDown(atBottom && currentIndex < ROUTE_ORDER.length - 1);
    };

    const observer = new MutationObserver(() => checkScroll());
    observer.observe(main, { childList: true, subtree: true });

    main.addEventListener("scroll", checkScroll, { passive: true });
    
    checkScroll();
    const timeoutId = setTimeout(checkScroll, 100);

    return () => {
      main.removeEventListener("scroll", checkScroll);
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  const handleClick = (dir: "up" | "down") => {
    const currentIndex = ROUTE_ORDER.indexOf(pathname as (typeof ROUTE_ORDER)[number]);
    if (dir === "down" && currentIndex < ROUTE_ORDER.length - 1) {
      router.push(ROUTE_ORDER[currentIndex + 1]);
    } else if (dir === "up" && currentIndex > 0) {
      router.push(ROUTE_ORDER[currentIndex - 1]);
    }
  };

  const baseClasses = "right-6 lg:right-12 z-50 flex items-center justify-center w-12 h-12 bg-surface-container-low border border-outline-variant/30 text-primary shadow-lg shadow-black/30 cursor-pointer select-none group overflow-hidden transition-all duration-300 hover:bg-primary-container/10 hover:border-primary-container/50 hover:shadow-[0_0_20px_rgba(46,91,255,0.15)] active:scale-95";
  return (
    <>
      <button
        onClick={() => handleClick("up")}
        className={`fixed top-24 ${baseClasses} ${
          showUp ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-8"
        }`}
        aria-label="Previous section"
      >
        <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-tertiary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        <span className="material-symbols-outlined text-2xl relative z-10">expand_less</span>
      </button>

      <button
        onClick={() => handleClick("down")}
        className={`fixed bottom-24 ${baseClasses} ${
          showDown ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-8"
        }`}
        aria-label="Next section"
      >
        <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-tertiary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        <span className="material-symbols-outlined text-2xl relative z-10">expand_more</span>
      </button>
    </>
  );
}