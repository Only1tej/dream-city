import React, { useState } from "react";


function ImageUploader() {
    const [images, setImages] = useState([]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImages((prevImages) => [...prevImages, reader.result]);
        };
    };

    const renderCarousel = () => {
        return (
            <div className="carousel">
                {images.map((image, index) => (
                    <div key={index} className="carousel-item w-40 h-40 rounded-2xl mx-1">
                        <img src={image} alt="Property Pictures" />
                    </div>
                ))}
            </div>
        )
    };

    return (
        <div>
            <input type="file" onChange={handleImageUpload} />
            <button onClick={() => setImages([])}>Clear Images</button>
            <div>{renderCarousel()}</div>
        </div>
    )

}


export default ImageUploader;