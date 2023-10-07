import Logo from "../logo";

export const Navbar = () => {
  return (
    <div className="fixed z-30 flex w-full items-center border-b bg-background px-10 py-4 shadow transition-colors duration-300">
      <div className="flex h-full flex-none items-center justify-center duration-500 ease-in-out dark:text-white">
        <Logo />
      </div>
      <div className="grow" />
      <div className="flex items-center gap-4">{/* TODO: theme toggle */}</div>
    </div>
  );
};
