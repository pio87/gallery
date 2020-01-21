import { useEffect, useState } from 'react';

const useImageLoader = (imageUrl: string) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.onload = () => setLoading(false);
      img.src = imageUrl;
    }
  }, [imageUrl]);

  return [loading];
};

export default useImageLoader;
