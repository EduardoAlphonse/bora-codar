import { InputHTMLAttributes, PropsWithChildren } from "react";

interface RootProps extends PropsWithChildren {}

const InputRoot = ({ children }: RootProps) => {
  return (
    <label className="flex flex-1 items-center gap-3 rounded-[5px] bg-gray-100 py-3 px-[14px]">
      {children}
    </label>
  );
};

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputField = ({ type = "text", ...rest }: FieldProps) => {
  return <input className="outline-none bg-gray-100" {...rest} />;
};

export { InputRoot, InputField };
