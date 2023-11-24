import axios from "axios";

const API_URL = "/api/listings/";

//Create a new listing
const createListing = async (listingData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, listingData, config);

  return response.data;
};

//Get user listings
const getListings = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, config);

  return response.data;
};

const listingService = {
  createListing,
  getListings,
};

export default listingService;
