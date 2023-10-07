import { Navbar } from "@/components/navbar/navbar";
import HomePage from "@/pages/home";

function App() {
  return (
    <div className="dark">
      <Navbar />
      <div className="min-h-screen w-screen bg-background p-8 pb-10 pt-[5.5rem]">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
