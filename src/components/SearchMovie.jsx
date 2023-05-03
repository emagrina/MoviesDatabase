import PropTypes from "prop-types";
import { SuggestSearchMovie } from './';
import { useMovieSuggestions, useInputValidation, useShowSuggestions } from '../hooks';
import { RiSearchEyeLine } from 'react-icons/all';

/**
 * El componente se encarga de mostrarnos un search para buscar
 * @param onNewCategory
 * @returns {JSX.Element}
 * @constructor
 */
export const SearchMovie = ({ onNewCategory }) => {

    const [inputValue, handleChange, isDisabled, setInputValue] = useInputValidation('', 3);
    const showSuggestions = useShowSuggestions(inputValue, isDisabled);
    const suggestions = useMovieSuggestions(inputValue)


    const handleSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();

        if (newInputValue.length < 3) return;

        onNewCategory(newInputValue);
        setInputValue('');
    };

    return (
        <div className="container flex-shrink-0 text-center">
            <h2 className="lead">Escribe el nombre de la película</h2>
            <div className="row py-3 text-center">
                <div id="content" className="col-lg-6 mx-auto text-left">
                    <div className="form-inline">
                        <div className="input-group input-group-sm col-sm-12">
                            <form
                                onSubmit={handleSubmit}
                                aria-label="form"
                                className="text-center"
                                style={{ display: 'flex', flexDirection: 'row', width: '100%' }}
                            >
                                <input
                                    className="search_query form-control"
                                    type="text"
                                    name="key"
                                    id="filmSearch"
                                    autoComplete="off"
                                    placeholder="Buscar..."
                                    value={inputValue}
                                    onChange={handleChange}
                                />

                                <button
                                    className={`btn btn-info btn-flat ${isDisabled ? 'disabled' : ''}`}
                                    id="filmButton"
                                    type="submit"
                                    disabled={isDisabled}
                                >
                                    <RiSearchEyeLine />
                                </button>
                            </form>
                            {(showSuggestions) && <SuggestSearchMovie suggestions={suggestions}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SearchMovie.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};
