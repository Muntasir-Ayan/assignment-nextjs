'use client';
import React, { useState } from 'react';

interface Image {
  src: string;
  title: string;
}

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [isViewerOpen, setViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => setViewerOpen(false);
  const nextImage = () => setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  const prevImage = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="container mx-auto mt-5">
      {/* Gallery */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg cursor-pointer ${
              index === 0 ? 'col-span-2 row-span-2' : ''
            }`}
            onClick={() => openViewer(index)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      {/* Image Viewer */}
      {isViewerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-white max-w-3xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-red-500"
              onClick={closeViewer}
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                className="max-h-[70vh] w-auto object-contain"
              />
              <div className="flex justify-between items-center w-full mt-4">
                <button
                  className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
                  onClick={prevImage}
                  disabled={currentIndex === 0}
                >
                  Previous
                </button>
                <div className="text-center">
                  <p className="font-bold">{images[currentIndex].title}</p>
                  <p>
                    {currentIndex + 1} / {images.length}
                  </p>
                </div>
                <button
                  className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
                  onClick={nextImage}
                  disabled={currentIndex === images.length - 1}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;