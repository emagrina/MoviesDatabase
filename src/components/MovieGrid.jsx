import { MovieItem } from './';
import PropTypes from 'prop-types';

/**
 * Se encarga de mostrar todos los MovieItems con sus datos
 * @param movies
 * @param genres
 * @returns {JSX.Element}
 * @constructor
 */
export const MovieGrid = ({ movies, genres }) => {

    return (
        <div className="container">
            <div className="row mt-5" id="movies">

                {movies.map((movie) => (
                    <div className="col-md-4 mb-4" key={movie.id}>
                        <MovieItem {...movie} genres={genres} />
                    </div>
                ))}
            </div>
        </div>
    );
};

MovieGrid.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
            genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
            genres: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                })
            ),
        })
    ).isRequired,
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};
