import axios from 'axios';

/**
 * La introduces el titulo de la pelicula y te devuelve el id que tiene en IMBD
 * @param movieTitle
 * @returns {Promise<*>}
 */
export const getIMDBIdForMovie = async(movieTitle) => {
    try {
        const url = `https://imdb-api.com/en-US/API/SearchMovie/${ import.meta.env.VITE_API_KEY_IMDB }/${ movieTitle }`;
        const response = await axios.get(url);
        const results = response.data.results[0].id;

       return results;

    } catch( error ) {
        console.error(`Error al buscar ${ movieTitle } en IMDB: ${ error }`);
        throw error;
    }
};
