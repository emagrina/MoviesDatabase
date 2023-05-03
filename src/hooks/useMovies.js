import { useState, useEffect } from 'react';
import { getMovies, getGenres } from '../helpers';

/**
 * Obtendremos las peliculas y los generos que hay.
 * @param searchText
 * @returns {{movies: *[], genres: *[]}}
 */
export const useMovies = (searchText) => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        getGenres().then((data) => setGenres(data));
    }, []);

    useEffect(() => {
        if (searchText !== '') {
            getMovies(searchText).then((data) => setMovies(data));
        }
    }, [searchText]);

    return { movies, genres };
};
