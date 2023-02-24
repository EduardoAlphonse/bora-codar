import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from "react";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "medium" | "small";
  buttonStyle?: "primary" | "secondary";
}

export const Button = ({
  children,
  size = "medium",
  buttonStyle = "primary",
  ...rest
}: ButtonProps) => {
  const buttonSize = {
    medium: "px-8 py-3",
    small: "px-6 py-1",
  };

  const buttonBackground = {
    primary: "bg-indigo-500 text-white",
    secondary: "bg-white text-indigo-500",
  };

  return (
    <button
      className={`rounded-[5px] leading-6 text-sm ${buttonSize[size]} ${buttonBackground[buttonStyle]} font-bold uppercase`}
      {...rest}
    >
      {children}
    </button>
  );
};
