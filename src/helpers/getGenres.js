import axios from 'axios';

export const getGenres = async() => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL_TMBD}/genre/movie/list`, {
            params: {
                api_key: import.meta.env.VITE_API_KEY_TMBD,
                language: 'en-US',
            },
        });
        return response.data.genres;
    } catch( error ) {
        console.error(error);
    }
};