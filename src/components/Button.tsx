import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild: boolean;
}

export const Button = ({ children, asChild }: ButtonProps) => {
  const CustomComponent = asChild ? Slot : "button";
  return (
    <CustomComponent
      className={clsx("py-4 px-3 bg-cyan-500 rounded font-semibold text-black transition-colors text-sm w-full hover:bg-cyan-300 focus:ring-2 ring-white")}
    >
      {children}
    </CustomComponent>
  );
};
