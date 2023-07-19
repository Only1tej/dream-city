import "./App.css";
import Notyet from "./components/Notyet";
import Home from "./components/Home";
import CreateAdmin from "./components/CreateAdmin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-admin" element={<CreateAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
