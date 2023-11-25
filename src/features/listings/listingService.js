import axios from "axios";

// const API_URL = "/api/listings/";
const API_URL = "http://localhost:4000/listing/create-listing";
const API_URL2 = "http://localhost:4000/listing";

//Create a new listing
const createListing = async (listings, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, listings, config);

  return response.data;
};

//Get user listings
const getListings = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL2, config);

  return response.data;
};

const listingService = {
  createListing,
  getListings,
};

export default listingService;
