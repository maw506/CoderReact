import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import './styles/main.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Sidebar />
        <div className="container-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
