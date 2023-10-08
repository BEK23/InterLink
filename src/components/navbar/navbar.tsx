import Logo from "../logo";
import { Link, useLocation } from "react-router-dom";
import { SunIcon } from "lucide-react";
import { cn } from "@/utils";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="fixed z-30 flex w-full items-center border-b bg-background px-10 py-4 shadow transition-colors duration-300">
      <div className="flex h-full flex-none items-center justify-center duration-500 ease-in-out dark:text-white">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex grow items-center justify-center gap-6">
        <Link
          to="/"
          className={cn(pathname === "/" && "text-primary", "transition")}
        >
          Home
        </Link>
        <Link
          to="/correlation"
          className={cn(
            pathname.startsWith("/correlation") && "text-primary",
            "transition"
          )}
        >
          Correlation
        </Link>
        <Link
          to="/dataset"
          className={cn(
            pathname === "/dataset" && "text-primary",
            "transition"
          )}
        >
          Dataset
        </Link>
      </div>
      <div className="flex w-24 items-center justify-end">
        <SunIcon className="text-foreground" />
      </div>
    </div>
  );
};
