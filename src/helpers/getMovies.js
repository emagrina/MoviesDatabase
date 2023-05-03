import axios from 'axios';
import { getActorsForMovie } from './getActorsForMovie.js';

/**
 * Obtenemos todas las peliculas
 * Por motivos esteticos descartamos todos los elementos que no tengan como minimo un actor o un genero.
 * @param searchText
 * @returns {Promise<*[]>}
 */
export const getMovies = async(searchText) => {
    try {
        const {
            data: { results },
        } = await axios.get(`${ import.meta.env.VITE_API_URL_TMBD }/search/movie`, {
            params: {
                api_key: import.meta.env.VITE_API_KEY_TMBD,
                query: searchText,
                media_type: 'movie',
            },
        });

        const filteredResults = [];

        for (let i = 0; i < results.length; i++) {
            const movie = results[i];
            const { genre_ids } = movie;
            const actors = await getActorsForMovie(movie.id);
            if (genre_ids.length > 0 && actors.length > 0) {
                filteredResults.push({
                    ...movie,
                    genres: [],
                    actors,
                });
            }
        }

        return filteredResults;


    } catch( error ) {
        console.error(error);
    }
};
