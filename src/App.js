import "./App.css";
import Home from "./components/Home";
import CreateAdmin from "./components/CreateAdmin";
import Listings from "./components/Listings";
import CreateListing from "./components/CreateListing";
import FormListing from "./components/FormListing";
import ConfirmListings from "./components/ConfirmListings";
import ListingPage from "./components/ListingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SampleForm from "./components/SampleForm";

function App() {
  return (
    <div className="App">
      <SampleForm />
    </div>
    // <Router>
    //   <div className="App">
    //     <SampleForm/>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/create-admin" element={<CreateAdmin />} />
    //       <Route path="/listings" element={<Listings />} />
    //       {/* <Route path="/create-listing" element={<CreateListing />} /> */}
    //       <Route path="/create-listing" element={<FormListing />} />
    //       <Route path="/listing-page" element={<ListingPage />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
