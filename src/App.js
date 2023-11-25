import "./App.css";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  // useNavigate,
} from "react-router-dom";
import CreateListings from "./components/CreateListings";
import Listings from "./components/Listings";
import { AuthProvider, useAuth } from "./components/Auth/Auth";

function App() {
  const { ids } = useParams();
  const [listings, setListings] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [admin, setAdmin] = useState([]);

  // const navigate = useNavigate();

  const handleSaveListing = (newListing) => {
    async function postListings() {
      try {
        const response = await axios.post(
          // "https://dcanestate.onrender.com/listing/create-listing",
          "http://localhost:3000/listing/create-listing",
          { newListing },
          { headers: { "Content-Type": "application/json" } }
        );
        console.log("Response:", response.data);
        setListings(response.data);
      } catch (error) {
        console.error("Error:", error.response.data);
      }
    }
    postListings();
  };
  // const handleSaveListing = (newListing) => {
  //   setListings((prevListings) => [...prevListings, newListing]);
  // };
  const handleAdminSaved = (newAdmin) => {
    const totalAdmins = [...admin, newAdmin];
    setAdmin(totalAdmins);
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
              element={<CreateAdmin onSaveAdminDetail={handleAdminSaved} />}
            />
            <Route path="/admins" element={<Admins admin={admin} />} />
            <Route
              path="/create-listing"
              element={<CreateListings />}
              // onSaveListing={handleSaveListing}
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
            <Route path="/payment" element={<PaymentForm />} />
            <Route path="/payment-receipt" element={<PaymentReceipt />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

//  const client = axios.create({
//    baseURL: "https://dcanestate.onrender.com/listing/create-listing",
//  });
// const addListings = (newListing) => {
//       client
//         .post("", {
//           newListing,
//         })
//         .then((response) => {
//           setListings((newListing) => [response.data, ...newListing]);
//         });
//     };
// async function postListings() {
//   try {
//     const response = await axios.post(
//       "https://dcanestate.onrender.com/listing/create-listing",
//       { newListing }
//     );
//     console.log("Response:", response.data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// postListings();
