import "../src/styles/main.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="container-main">
        <Router>
          <Routes>
            <Route path="*" element={<h1>not found</h1>} />
            <Route path="/" element={<Home />} />
            <Route path="/monitores" element={<h1>monitores</h1>} />
            <Route path="/perifericos" element={<h1>perifericos</h1>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
