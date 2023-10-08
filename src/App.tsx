import { Navbar } from "@/components/navbar/navbar";
import HomePage from "@/pages/home";
import { Route, Routes } from "react-router-dom";
import CorrelationPage from "@/pages/correlation";
import DatasetPage from "@/pages/dataset";

function App() {
  return (
    <div className="dark">
      <Navbar />
      <div className="h-screen min-h-screen w-screen bg-background p-8 pb-10 pt-[5.5rem]">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/correlation" element={<CorrelationPage />} />
          <Route path="/dataset" element={<DatasetPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
