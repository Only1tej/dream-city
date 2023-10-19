import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import { v4 as uuidv4 } from "uuid";
import CreateAdmin from "./components/CreateAdmin";
import Admins from "./components/Admins";
import PaymentForm from "./components/PaymentForm";
import PaymentReceipt from "./components/PaymentReceipt";
import ListingPage from "./components/ListingPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import CreateListings from "./components/CreateListings";
import Listings from "./components/Listings";
import { AuthProvider, useAuth } from "./components/Auth/Auth";

function App() {
  const { ids } = useParams();
  const [listings, setListings] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [admin, setAdmin] = useState([]);

  const handleSaveListing = (newListing) => {
    setListings((prevListings) => [...prevListings, newListing]);
  };
  const handleAdminSave = (newAdmin) => {
    setAdmin((prevAdmin) => [...prevAdmin, newAdmin]);
  };
  const handlePaymentReceipt = (receipt) => {
    setPaymentDetails((prevReceipt) => [...prevReceipt, receipt]);
  };
  const id = uuidv4();
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/create-admin"
              element={<CreateAdmin onSaveAdminDetail={handleAdminSave} />}
            />
            <Route path="/admins" element={<Admins />} />
            <Route path="/payment" element={<PaymentForm />} />
            <Route path="/payment-receipt" element={<PaymentReceipt />} />
            <Route
              path="/create-listing"
              element={<CreateListings onSaveListing={handleSaveListing} />}
            />
            <Route
              path="/listing"
              element={
                <Listings listings={listings} setListings={setListings} />
              }
            />
            <Route
              path="/listing/:id"
              element={<ListingPage listings={listings} />}
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
