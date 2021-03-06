import cn from "classnames";
import { Link as RouterLink, LinkProps } from "react-router-dom";

const Link = ({ children, ...props }: LinkProps) => {
  return (
    <RouterLink
      className={cn(
        "flex",
        "items-center",
        "gap-3",
        "px-6",
        "py-2.5",
        "bg-blue-600",
        "text-white",
        "font-medium",
        "text-md",
        "leading-tight",
        "uppercase",
        "rounded",
        "shadow-md",
        "hover:bg-blue-700",
        "hover:shadow-lg",
        "focus:bg-blue-700",
        "focus:shadow-lg",
        "focus:outline-none",
        "focus:ring-0",
        "active:bg-blue-800",
        "active:shadow-lg",
        "transition",
        "duration-150",
        "ease-in-out"
      )}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
