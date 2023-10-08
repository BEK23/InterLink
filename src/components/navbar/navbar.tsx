import Logo from "../logo";
import { Link } from "react-router-dom";
import { SunIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="fixed z-30 flex w-full items-center border-b bg-background px-10 py-4 shadow transition-colors duration-300">
      <div className="flex h-full flex-none items-center justify-center duration-500 ease-in-out dark:text-white">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex grow items-center justify-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/correlation">Correlation</Link>
        <Link to="/dataset">Dataset</Link>
      </div>
      <div className="flex w-24 items-center justify-end">
        <SunIcon className="text-foreground" />
      </div>
    </div>
  );
};
