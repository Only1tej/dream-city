import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import { v4 as uuidv4 } from "uuid";
import CreateAdmin from "./components/CreateAdmin";
import CreateListing from "./components/CreateListing";
import FormListing from "./components/FormListing";
import ConfirmListings from "./components/ConfirmListings";
import ListingPage from "./components/ListingPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import SampleForm from "./components/SampleForm";
import SampleFirst from "./components/SampleFirst";
import Listings from "./components/Listings";
import { AuthProvider, useAuth } from "./components/Auth/Auth";

function App() {
  const [formData, setFormData] = useState(null);
  const handleFormSubmit = (data) => {
    setFormData(data);
  };
  const { ids } = useParams();
  const [listings, setListings] = useState([]);

  const handleSaveListing = (newListing) => {
    setListings((prevListings) => [...prevListings, newListing]);
  };
  const id = uuidv4();
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
            {/* <Route path="/listings" element={<Listings />} /> */}
            {/* <Route path="/create-listing" element={<CreateListing />} /> */}
            <Route
              path="/create-listing"
              element={<SampleFirst onSaveListing={handleSaveListing} />}
            />
            <Route path="/listing" element={<Listings listings={listings} />} />
            <Route
              path="/listing/:id"
              element={<ListingPage listings={listings} />}
            />
            {/* <Route path="/listing/:id">
              <ListingPage listings={listings} />
            </Route> */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
