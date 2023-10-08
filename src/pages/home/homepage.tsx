import { Input } from "ui/input";
import { TypeAnimation } from "react-type-animation";
import { SearchIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <TypeAnimation
        sequence={[
          "We support scientific communities to validate and disseminate their research.",
          1000,
        ]}
        speed={50}
        className="h-[250px] w-[60%] text-center text-6xl"
        repeat={Infinity}
        cursor={false}
      />
      <div className="relative w-[80%]">
        <Input placeholder="Search..." />
        <SearchIcon
          className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={18}
        />
      </div>
    </div>
  );
}
