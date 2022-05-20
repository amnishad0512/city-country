import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
