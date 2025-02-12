import React from 'react'
import ImageGrid from './ImageGrid';

const DocumentSection = ({ content, images = [] }) => {
  return (
    <div className="mt-3">
      {content && <p className="text-gray-800 mb-3">{content}</p>}
      {images.length > 0 && <ImageGrid images={images} />}
    </div>
  );
};

export default DocumentSection