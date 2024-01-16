import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ItemsList from "./components/ItemsList";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState(0);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <ItemsList />
      </div>
      <Footer />
    </>
  );
}

export default App;
