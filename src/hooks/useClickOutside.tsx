import { useEffect, RefObject } from "react";

const useClickOutside = (ref: RefObject<HTMLElement>, handler?: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler && handler();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handler]);
};

export default useClickOutside;
