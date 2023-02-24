import { PropsWithChildren, HTMLAttributes } from "react";

interface CardContainerProps extends PropsWithChildren {
  title: string;
  divAttributes?: HTMLAttributes<HTMLDivElement>;
}

export const CardContainer = ({
  title,
  divAttributes,
  children,
}: CardContainerProps) => {
  return (
    <div
      className="animate-wiggle flex flex-col justify-between items-center gap-8 px-12 py-7 rounded-2xl bg-violet-800 shadow-[3px_4px_26px_rgba(0,0,0,0.25)]"
      {...divAttributes}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </div>
  );
};
