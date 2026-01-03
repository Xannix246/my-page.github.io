import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type Container = {
  children: React.ReactNode;
  className: string;
};

const Container = ({ children, className }: Container) => {
  const theme = useContext(ThemeContext);

  return <div className={clsx(className, "")}>{children}</div>;
};

export default Container;
