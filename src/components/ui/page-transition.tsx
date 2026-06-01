import { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("enter");

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage("exit");
    }
  }, [children, displayChildren]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        transitionStage === "exit" ? "opacity-0" : "opacity-100"
      }`}
      onTransitionEnd={() => {
        if (transitionStage === "exit") {
          setDisplayChildren(children);
          setTransitionStage("enter");
        }
      }}
    >
      {displayChildren}
    </div>
  );
}
