import PropTypes from 'prop-types';
import { useIMDBUrl } from '../hooks';

/**
 * Nos muestra sugerencias a medida que escribimos
 * @param suggestions
 * @returns {JSX.Element}
 * @constructor
 */
export const SuggestSearchMovie = ({ suggestions }) => {
    const handleClick = useIMDBUrl();

    const handleButtonClick = (title) => {
        handleClick(title);
    };

    return (
        <div className="input-group input-group-sm col-sm-12 animate__animated animate__fadeInUp">
            <div className="card" id="suggestions">
                { suggestions.map((suggestion, index) => (
                    <div
                        key={ index }
                        className="suggest-element"
                        onClick={ () => handleButtonClick(suggestion) }
                    >
                        { suggestion }
                    </div>
                )) }
            </div>
        </div>
    );
};

SuggestSearchMovie.propTypes = {
    suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
