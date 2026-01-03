import { Button as HeadlessButton, ButtonProps } from "@headlessui/react";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface Button extends ButtonProps {
  children: React.ReactNode;
  color?: "blue" | "orange" | "purple";
  className?: string;
  disabled?: boolean;
}

const Button = ({ children, className, disabled, ...props }: Button) => {
  const theme = useContext(ThemeContext);

  return (
    <HeadlessButton className={clsx(className, "")} disabled={disabled} {...props}>
      {children}
    </HeadlessButton>
  );
};

export default Button;
