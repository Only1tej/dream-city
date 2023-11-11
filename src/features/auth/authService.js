import axios from "../../http";

//For registering admin
// const API_URL = "api/superAdmin/register";
const API_URL = "api/superAdmin/register";
const API_URL_LOGIN = "api/superAdmin/login";

//Register user
const register = async (adminDetail) => {
  const response = await axios.post(API_URL, adminDetail);
  console.log(response.data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
//Login user
const login = async (adminDetail) => {
  const response = await axios.post(API_URL_LOGIN, adminDetail);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Logout
const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  logout,
  login,
};

export default authService;
