import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGrid = ({ images }) => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageCount = images.length;

  const openCarousel = (index) => {
    setCurrentIndex(index);
    setIsCarouselOpen(true);
  };

  return (
    <div>
      {/* Render Images in Grid Layout */}
      {imageCount === 1 && (
        <div className="w-full">
          <img
            src={images[0]}
            alt={`Post content 1`}
            className="w-full h-auto object-cover rounded-md cursor-pointer"
            onClick={() => openCarousel(0)}
          />
        </div>
      )}

      {imageCount === 2 && (
        <div className="grid grid-cols-2 gap-1">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Post content ${idx + 1}`}
              className="w-full h-32 md:h-38 lg:h-42 2xl:h-52 object-cover rounded-md cursor-pointer"
              onClick={() => openCarousel(idx)}
            />
          ))}
        </div>
      )}

      {imageCount === 3 && (
        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-2 gap-1">
            {images.slice(0, 2).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Post content ${idx + 1}`}
                className="w-full h-32 md:h-38 lg:h-42 2xl:h-52 object-cover rounded-md cursor-pointer"
                onClick={() => openCarousel(idx)}
              />
            ))}
          </div>
          <div>
            <img
              src={images[2]}
              alt="Post content 3"
              className="w-full h-36 md:h-40 lg:h-48 2xl:h-54 object-cover rounded-md cursor-pointer"
              onClick={() => openCarousel(2)}
            />
          </div>
        </div>
      )}

      {imageCount === 4 && (
        <div className="grid grid-cols-2 gap-1">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Post content ${idx + 1}`}
              className="w-full h-32 md:h-38 lg:h-42 2xl:h-52 object-cover rounded-md cursor-pointer"
              onClick={() => openCarousel(idx)}
            />
          ))}
        </div>
      )}

      {imageCount > 4 && (
        <div className="grid grid-cols-2 gap-1">
          {images.slice(0, 3).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Post content ${idx + 1}`}
              className="w-full h-32 md:h-38 lg:h-42 2xl:h-52 object-cover rounded-md cursor-pointer"
              onClick={() => openCarousel(idx)}
            />
          ))}
          <div className="relative cursor-pointer" onClick={() => openCarousel(3)}>
            <img
              src={images[3]}
              alt="Post content 4"
              className="w-full h-32 md:h-38 lg:h-42 2xl:h-52 object-cover rounded-md filter blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-md pointer-events-none">
              <span className="text-white font-semibold text-xl drop-shadow-lg">
                +{imageCount - 4}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Modal Carousel */}
      {isCarouselOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsCarouselOpen(false)} 
        >
          <div
            className="relative max-w-3xl max-h-full"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={images[currentIndex]}
              alt={`Post content ${currentIndex + 1}`}
              className="max-w-full max-h-screen object-contain rounded-2xl"
            />
            {/* Close Button */}
            <button
              onClick={() => setIsCarouselOpen(false)}
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-1 hover:bg-gray-700 cursor-pointer"
            >
              <X size={24} />
            </button>
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                {currentIndex > 0 && (
                  <button
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-1 hover:bg-gray-700 cursor-pointer"
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}
                {currentIndex < images.length - 1 && (
                  <button
                    onClick={() => setCurrentIndex(currentIndex + 1)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-1 hover:bg-gray-700 cursor-pointer"
                  >
                    <ChevronRight size={24} />
                  </button>
                )}
              </>
            )}
            {/* Overlaid Pagination Bar */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-opacity-80 rounded flex space-x-1 ">
                {imageCount > 1 && images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1 ${idx === currentIndex ? 'bg-gray-800' : 'bg-gray-300'} w-8 cursor-pointer`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
