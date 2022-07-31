import { useState } from "react";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Details from "./pages/Details";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [state, setState] = useState({
    inputValue: "",
    fileName: "",
    text: "",
  });

  return (
    <main>
      <Routes>
        <Route exact path="/"
          element={<Login state={state} setState={setState} />} />
        <Route exact path="/upload"
          element={<Upload state={state} setState={setState} />} />
        <Route exact path="/details"
          element={<Details state={state} setState={setState} />} />
      </Routes>
    </main>
  );
}

export default App;
