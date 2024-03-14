import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hamburgers from "./pages/Hamburgers/Hamburgers";
import Appetizers from "./pages/Entradinhas/Entradinhas";
import Desserts from "./pages/Sobremesas/Sobremesas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hamburgers" element={<Hamburgers />} />
        <Route path="/entrada" element={<Appetizers />} />
        <Route path="/sobremesas" element={<Desserts />} />
      </Routes>
    </BrowserRouter>
  );
}
