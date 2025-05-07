import { useRef } from "react";

const UseEffectPolyFill = (effect, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = effect();
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }

  
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (depsChanged) {
    const cleanup = effect();
  
    if (cleanup && typeof cleanup === "function" && deps) {
      cleanup();
    }
  }

  prevDeps.current = deps || [];
};

export default UseEffectPolyFill;
