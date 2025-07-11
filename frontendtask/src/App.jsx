import React from "react";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import RedHover from "./components/RedHover";
import BlueHover1 from "./components/BlueHover1";
import BlueHover2 from "./components/BlueHover2";
import Task4 from "./pages/Task4";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Task1 />
      <Task2/>
      <Task3/>
      <Task4/>
    </div>
  );
}

export default App;
