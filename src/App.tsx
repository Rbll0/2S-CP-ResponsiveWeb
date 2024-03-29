import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hamburgers from "./pages/Hamburgers/Hamburgers";
import Appetizers from "./pages/Entradinhas/Entradinhas";
import Desserts from "./pages/Sobremesas/Sobremesas";
import Beverages from "./pages/Bebidas/Bebidas";
import Combos from "./pages/Combos/Combos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hamburgers" element={<Hamburgers />} />
        <Route path="/sobremesas" element={<Desserts />} />
        <Route path="/bebidas" element={<Beverages />} />
        <Route path="/combos" element={<Combos />} />
        <Route path="/entradas" element={<Appetizers />} />
      </Routes>
    </BrowserRouter>
  );
}
