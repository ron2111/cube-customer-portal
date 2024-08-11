import React from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import './PhotoGrid.css';

interface PhotoGridProps {
  customerId: number;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ customerId }) => {
  const photos = useFetchPhotos(customerId);

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <img key={index} src={photo.url} alt="Random" />
      ))}
    </div>
  );
};

export default PhotoGrid;
