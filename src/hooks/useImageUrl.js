import { useEffect, useState } from 'react';
import defaultImage from '/src/assets/img/defaultImage.jpeg';

/**
 * Mostramos la imagen y si una imagen responde con 404 la cambiamos por una por defecto
 * @param posterPath
 * @returns {[string,handleImageError]}
 */
export const useImageUrl = (posterPath) => {
    const [imageUrl, setImageUrl] = useState(`${import.meta.env.VITE_URL_IMAGE}/${posterPath}`);

    const handleImageError = () => {
        setImageUrl(defaultImage);
    };

    useEffect(() => {
        if (!posterPath) {
            setImageUrl(defaultImage);
        }
    }, [posterPath, defaultImage]);

    return { imageUrl, handleImageError };

};
