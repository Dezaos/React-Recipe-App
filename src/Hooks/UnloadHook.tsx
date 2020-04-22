import { useRef, useEffect } from "react";

const useUnload = (action: () => void) => {
  const listener = useRef(action);

  useEffect(() => {
    listener.current = action;
  }, [action]);

  useEffect(() => {
    const onUnload = (event: BeforeUnloadEvent) => {
      listener.current();
    };

    window.addEventListener("beforeunload", onUnload);

    return () => window.removeEventListener("beforeunload", onUnload);
  }, [listener]);
};

export default useUnload;
