import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ItemsList from "./components/ItemsList";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CreateItem from "./pages/CreateItem";
import UpdateItem from "./pages/UpdateItem";
import listJSON from "./list.json";

function App() {
  const [list, setList] = useState(listJSON);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<ItemsList list={list} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/create" element={<CreateItem />} />
          <Route path="/update" element={<UpdateItem />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
