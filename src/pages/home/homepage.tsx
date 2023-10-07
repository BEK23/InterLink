import { Input } from "ui/input";
import { TypeAnimation } from "react-type-animation";

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
      />
      <Input placeholder="Search..." className="w-[80%]" />
    </div>
  );
}
