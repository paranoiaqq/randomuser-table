import { useEffect, RefObject } from "react";

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: () => void,
  isOpened: boolean
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && isOpened && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handler]);
};

export default useClickOutside;
