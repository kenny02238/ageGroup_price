import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { PriceList } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/price-list" />} />
      <Route path="price-list" element={<PriceList />} />
    </Routes>
  );
}

export default App;
