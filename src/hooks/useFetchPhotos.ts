import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Photo {
  url: string;
}

const useFetchPhotos = (customerId: number): Photo[] => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  // Function to shuffle an array
  const shuffleArray = (array: Photo[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${customerId}&limit=9`);
      let photosData = response.data.map((item: any) => ({
        url: `https://picsum.photos/id/${item.id}/200/200`,
      }));


      photosData = shuffleArray(photosData);

      setPhotos(photosData);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  useEffect(() => {
    fetchPhotos();

    const interval = setInterval(fetchPhotos, 10000); 

    return () => clearInterval(interval); 
  }, [customerId]);

  return photos;
};

export default useFetchPhotos;
