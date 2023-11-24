import { useState } from "react";
import axios from "axios";
import { AdvancedImage } from "@cloudinary/react";
import { ImageFlags } from "@cloudinary/url-gen/types/types";
import { Cloudinary } from "@cloudinary/url-gen";
import { image } from "@cloudinary/url-gen/qualifiers/source";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dc7rhipsj/image/upload";
// const CLOUDINARY_URL =
//   "cloudinary://896524896615482:6DMlZPWT8pDnQThYa6M4K1tHlX0@dc7rhipsj";https://api.cloudinary.com/v1_1/dc7rhipsj
const CLOUDINARY_UPLOAD_PRESET = "ydbmcimb";

// const image1 = document.querySelector("#fileupload");
// const image = document.getElementById("fileupload");
// console.log("the image1: ", image1);
// console.log("the image: ", image);
// image.addEventListener("change", (e) => {
//   const file = e.target.files[0];
//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

//   fetch(CLOUDINARY_URL, {
//     method: "POST",
//     body: formData,
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.secure_url !== "") {
//         const uploadedFileUrl = data.secure_url;
//         localStorage.setItem("passportUrl", uploadedFileUrl);
//       }
//     })
//     .catch((err) => console.error(err));
// });

const Rough = () => {
  const preset_key = "ydbmcimb";
  const cloud_name = "https://api.cloudinary.com/v1_1/dc7rhipsj/image/upload";
  // const [images, setImages] = useState([]);

  const cld = new Cloudinary({
    cloud: {
      //       //   cloudName: "demo",
      cloudName: "dc7rhipsj",
    },
  });

  // const myImage = cld.image("number_one");
  const myImage = cld.image("tej_timi");

  // https://res.cloudinary.com/dc7rhipsj/image/upload/v1700848578/c8nkjfpdrtfssc0mrc9k.jpg
  // const handleFile = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", preset_key);
  //   // fetch(`${cloud_name}`, {
  //   //   method: "POST",
  //   //   body: formData,
  //   // });
  //   const response = await axios.post(
  //     "https://api.cloudinary.com/v1_1/dc7rhipsj/image/upload",
  //     formData
  //   );
  //   const data = await response.data;
  //   console.log("this is the data", data);
  //   const imageUrl = data.secure_url;
  //   console.log(imageUrl);
  //   setImages((prevImages) => [...prevImages, imageUrl]);
  //   // .then((response) => console.log(response.data.secure_url))
  //   // .then((response) => setImage(response.data.secure_url))
  //   // .catch((err) => console.log(err));
  //   // const imageUrl = data.secure_url;
  //   // setImage((prevImages) => [...prevImages, response.data.secure_url]);
  // };

  //         // const response = await axios.post('https://api.cloudinary.com/v1_1/dc7rhipsj/image/upload', formData);
  //         // const data = await response.json();
  //         // console.log(data);
  //         // const imageUrl = data.secure_url;

  //         // setImages((prevImages) => [...prevImages, imageUrl]);

  // .then((response) => setImage(response.url))

  const ImageUploader = () => {
    const [uploading, setUploading] = useState(false);
    const [images, setImages] = useState([]);
    const [imageSelected, setImageSelected] = useState("");

    const handleFile = async (e) => {
      // const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("upload_preset", preset_key);

      const response = await axios
        .post(
          "https://api.cloudinary.com/v1_1/dc7rhipsj/image/upload",
          formData
        )
        // .then((res) => setImages(res.data.secure_url))
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      // const datas = await response.data;
      // console.log(response);
      // console.log(response.statusText);
      // const datas = await response.data;
      // console.log("this is the data", datas);
      // const imageUrl = data.secure_url;
      // console.log(imageUrl);
      // setImages((prevImages) => [...prevImages, imageUrl]);

      // .then((response) => console.log(response.data.secure_url))
      // .then((response) => setImage(response.data.secure_url))
      // .catch((err) => console.log(err));
      // const imageUrl = data.secure_url;
      // setImage((prevImages) => [...prevImages, response.data.secure_url]);
    };

    // const handleUpload = () => {
    //   setUploading(true);
    //   handleFile(images[0])
    //     .then(() => {
    //       setUploading(false);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       // Optionally, you can display a user-friendly error message
    //     });
    // };

    // const renderCarousel = () => {
    //   return (
    //     <div className="carousel rounded-3xl">
    //       {images.map((image, index) => (
    //         <div key={index} className="carousel-item w-[100px] h-[100px]">
    //           <img
    //             src={image}
    //             alt="Property Pictures"
    //             min="1"
    //             max="6"
    //             className="w-[280px] "
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   );
    // };
    return (
      <div>
        {/* <input type="file" multiple name="image" onChange={handleFile} /> */}
        <input
          type="file"
          multiple
          name="image"
          onChange={(e) => setImageSelected(e.target.files[0])}
          // onChange={(e) => images.push(e.target.files[0])}
          // onChange={(e) => setImages([...images, e.target.files[0]])}
        />
        <button onClick={handleFile}>Upload</button>
        {/* {<img src={imageSelected} className="w-[200px] h-[200px]" />} */}
        {/* {images.map((image, index) => (
          <img key={index} src={images} className="w-[200px] h-[200px]" />
        ))} */}
        <AdvancedImage cldImg={myImage} />
        {/* <div>{renderCarousel()}</div> */}
      </div>
    );
  };

  return <ImageUploader />;
};

export default Rough;
// const Rough = () => {
//   // Create and configure your Cloudinary instance.
//   const cld = new Cloudinary({
//     cloud: {
//       //   cloudName: "demo",
//       cloudName: "dc7rhipsj",
//     },
//   });

//   // Use the image with public ID, 'front_face'.
//   const myImage = cld.image("front_face");

//   const handleImageUpload = async (e) => {
//     const files = e.target.files;
//     console.log("the files: ", files);

//     console.log("the files: ", files.FileList);

// for (const file of files) {
//     const formData = new FormData();
// //     formData.append('file', file);

// }
// };

// return (
// <div>
//   <p>Testing testers</p>
//   <AdvancedImage cldImg={myImage} />

//   {/* <input type="file" multiple onChange={handleImageUpload} /> */}
//   <input type="file" id="fileupload" placeholder="Photos" />
// </div>

// );
// };

// function handleFileUpload(files) {}
