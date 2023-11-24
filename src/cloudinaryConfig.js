// import cloudinary from "cloudinary-react";
// import { Cloudinary } from "@cloudinary/url-gen";
// const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: "dc7rhipsj",
//   api_key: "896524896615482",
//   api_secret: "6DMlZPWT8pDnQThYa6M4K1tHlX0",
// });

// module.exports = cloudinary;

require("browserify-fs");
const cloudinary = require("./cloudinaryConfig");
// import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dc7rhipsj",
  api_key: "896524896615482",
  api_secret: "6DMlZPWT8pDnQThYa6M4K1tHlX0",
});

export default cloudinary;

// const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: "dc7rhipsj",
//   api_key: "896524896615482",
//   api_secret: "6DMlZPWT8pDnQThYa6M4K1tHlX0",
// });

// module.exports = cloudinary;
