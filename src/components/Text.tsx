import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Text = ({ size = "md", children, asChild, className }: TextProps) => {
  const CustomComponent = asChild ? Slot : "span";
  return (
    <CustomComponent
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      },
      className
      )}
    >
      {children}
    </CustomComponent>
  );
};