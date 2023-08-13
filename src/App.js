import "./App.css";
import Home from "./components/Home";
import CreateAdmin from "./components/CreateAdmin";
import Listings from "./components/Listings";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-admin" element={<CreateAdmin />} />
          <Route path="/listings" element={<Listings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
