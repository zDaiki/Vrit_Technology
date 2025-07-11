import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Task4 from "./pages/Task4";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Nav />
        <Routes>
          <Route path="/" element={<Task1 />} />
          <Route path="/task2" element={<Task2/>} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
