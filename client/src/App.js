import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import AllUsers from "./components/AllUsers";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/all" element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
