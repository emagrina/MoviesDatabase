import axios from 'axios';

export async function getActorsForMovie(movieId) {
    const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        params: {
            api_key: import.meta.env.VITE_API_KEY_TMBD,
        },
    });

    const actors = creditsResponse.data.cast

    return actors;
}