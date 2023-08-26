import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import CreateAdmin from "./components/CreateAdmin";
import Listings from "./components/Listings";
import CreateListing from "./components/CreateListing";
import FormListing from "./components/FormListing";
import ConfirmListings from "./components/ConfirmListings";
import ListingPage from "./components/ListingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SampleForm from "./components/SampleForm";
import SampleFirst from "./components/SampleFirst";
import SampleFirstSubmit from "./components/SampleFirstSubmit";
import { AuthProvider, useAuth } from "./components/Auth/Auth";

function App() {
  const [formData, setFormData] = useState(null);
  const handleFormSubmit = (data) => {
    setFormData(data);
  };
  return (
    // <div>
    //   {!formData ? (
    //     <SampleFirst onSubmit={handleFormSubmit} />
    //   ) : (
    //     <SampleFirstSubmit formData={formData} />
    //   )}
    // </div>
    // <div className="App">
    //   <SampleForm />
    // </div>
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-admin" element={<CreateAdmin />} />
            <Route path="/listings" element={<Listings />} />
            {/* <Route path="/create-listing" element={<CreateListing />} /> */}
            <Route path="/create-listing" element={<SampleFirst />} />
            <Route path="/listing" element={<SampleFirstSubmit />} />
            <Route path="/listing-page" element={<ListingPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
