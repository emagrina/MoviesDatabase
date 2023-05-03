import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMovies } from '../hooks';
import { MovieGrid } from '../components';
import { Loading, WithoutResults } from '../view';



export const MovieLayout = ({ searchText }) => {
    const { movies, genres } = useMovies(searchText);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true);
    }, [ searchText ]);

    useEffect(() => {
        setIsLoading(false);
    }, [ movies ]);


    return (
        <>
        { isLoading ? (
            (<Loading/>)
        ) : (
            <>
                { movies.length !== 0 ? (
                    <MovieGrid movies={ movies } genres={ genres }/>
                ) : (
                    <WithoutResults/>
                ) }
            </>
        )
        }
        </>
    );
};

MovieLayout.propTypes = {
    searchText: PropTypes.string.isRequired,
};
