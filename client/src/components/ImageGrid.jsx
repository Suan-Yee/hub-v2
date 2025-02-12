import React from 'react'

const ImageGrid = ({ images }) => {
    const imageCount = images.length;
  
    if (imageCount === 1) {
      return (
        <div className="w-full">
          <img
            src={images[0]}
            alt="Post content"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      );
    } else if (imageCount === 2) {
      return (
        <div className="grid grid-cols-2 gap-1">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Post content ${idx + 1}`}
              className="w-full h-42 object-cover rounded-md"
            />
          ))}
        </div>
      );
    } else if (imageCount === 3) {
      return (
        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-2 gap-1">
            {images.slice(0, 2).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Post content ${idx + 1}`}
                className="w-full h-32 object-cover rounded-md"
              />
            ))}
          </div>
          <div>
            <img
              src={images[2]}
              alt="Post content 3"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
        </div>
      );
    } else if (imageCount === 4) {
      return (
        <div className="grid grid-cols-2 gap-1">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Post content ${idx + 1}`}
              className="w-full h-36 object-cover rounded-md"
            />
          ))}
        </div>
      );
    } else if (imageCount > 4) {
      const extraCount = imageCount - 4;
      return (
        <div className="grid grid-cols-2 gap-1">
          {images.slice(0, 3).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Post content ${idx + 1}`}
              className="w-full h-36 object-cover rounded-md"
            />
          ))}
          <div className="relative">
            <img
              src={images[3]}
              alt="Post content 4"
              className="w-full h-36 object-cover rounded-md filter blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-md">
              <span className="text-white font-semibold text-xl drop-shadow-lg">
                +{extraCount}
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
};

export default ImageGrid