import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddCar from "./components/AddCar";
import ViewCars from "./components/ViewCars";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/view-cars" element={<ViewCars />} />
      </Routes>
    </>
  );
}

export default App;