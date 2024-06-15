import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export default function HeadingTitle(props: {
  children: ReactNode;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}) {
  const Tag = props.as;
  return (
    <Tag
      className={cn(
        "text-[3rem] text-center font-sans-accent text-blue-600",
        props.className
      )}
    >
      {props.children}
    </Tag>
  );
}
