import axios from "axios";

const http = axios.create({
  baseURL: "https://dcanestate.onrender.com",
  // baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default http;
