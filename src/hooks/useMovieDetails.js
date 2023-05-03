import { getActorsForMovie } from '../helpers';
import { useEffect, useState } from 'react';

/**
 * Transformaremos los actores y los generos separados con ","
 * @param genres
 * @param genre_ids
 * @param id
 * @returns {{actors: string, genresList: *[]}}
 */
export const useMovieDetails = (genres, genre_ids, id) => {
    const [ genresList, setGenresList ] = useState([]);
    const [ actors, setActors ] = useState('');

    useEffect(() => {
        if( genres && genres.length ) {
            const genresString = genres
                .filter((genre) => genre_ids.includes(genre.id))
                .map((genre) => genre.name)
                .join(', ');
            setGenresList(genresString);
        }

        getActorsForMovie(id).then((actors) => {
            const joinedActors = actors
                .filter((credit) => credit.known_for_department === 'Acting')
                .slice(0, 3)
                .map((actor) => actor.name)
                .join(', ');
            setActors(joinedActors);
        });
    }, [ genres, genre_ids, id ]);

    return { genresList, actors };
};