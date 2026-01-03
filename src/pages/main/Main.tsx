import clsx from "clsx";
import { useState } from "react";
import Button from "../../shared/Button";
import { ThemeContext } from "../../contexts/ThemeContext";

const Main = () => {
  const [theme, setTheme] = useState<Theme>("modern-light");

  return (
    <div
      className={clsx(
        "flex flex-col w-full h-full",
        "transition duration-300",
        theme === "modern-light" && "bg-blue-300 text-black",
        theme === "modern-dark" && "bg-gray-900 text-white",
      )}
    >
      <ThemeContext value={theme}>
        <h1 className="text-4xl uppercase">hello world!</h1>
        <div className="flex flex-col w-fit">
          <Button onClick={() => setTheme("modern-dark")}>Dark theme</Button>
          <Button onClick={() => setTheme("modern-light")}>Light theme</Button>
        </div>
      </ThemeContext>
    </div>
  );
};

export default Main;
