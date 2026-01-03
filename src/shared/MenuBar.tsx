import clsx from "clsx";
import { useContext, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { ThemeContext } from "../contexts/ThemeContext";

type Menu = {
  children: React.ReactNode;
  direction: "left" | "right";
  open: boolean;
  setOpen: (value: boolean) => void;
};

const Menu = ({ children, direction, open, setOpen }: Menu) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <div
      className={clsx(
        "absolute inset-0 z-10 bg-black/20 backdrop-blur-md flex h-full w-full",
        "transition duration-300",
        direction === "left" && "justify-baseline",
        direction === "right" && "justify-end",
      )}
      onClick={() => setOpen(false)}
    >
      <div
        className={clsx(
          "flex h-full p-10 relative",
          "transition duration-300",
          open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <MdClose className="absolute inset-x-full inset-y-0" onClick={() => setOpen(false)} />
        {children}
      </div>
    </div>
  );
};

export default Menu;
