import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./reset.scss"
import AddPage from "./pages/Add";
import Basket from "./pages/Basket";
import Detail from "./pages/Details";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
