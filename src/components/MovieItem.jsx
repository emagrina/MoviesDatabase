import PropTypes from 'prop-types';
import { useDateFormat, useImageUrl, useIMDBUrl, useMovieDetails } from '../hooks';
import { Button, Card } from 'react-bootstrap';
import { FaRegEye, SlPeople, TbMovie, VscCalendar } from 'react-icons/all';
import { useState } from 'react';

/**
 * El componente se encarga de crear cada carta y rellenarla con su contenido
 * @param id
 * @param title
 * @param release_date
 * @param poster_path
 * @param genre_ids
 * @param genres
 * @returns {JSX.Element}
 * @constructor
 */
export const MovieItem = ({ id, title, release_date, poster_path, genre_ids, genres }) => {

    // Mostramos la imagen y si una imagen responde con 404 la cambiamos por una por defecto
    const { imageUrl, handleImageError } = useImageUrl(poster_path);

    // Obtenemos los generos y los actores de cada pelicula
    const { genresList, actors } = useMovieDetails(genres, genre_ids, id);

    // Transforma la fecha de "YYYY-MM-DD" a "DD-MM-YYYY"
    const date = useDateFormat(release_date);

    // Abriremos en una nueva ventana la url de IMBD
    const handleClick = useIMDBUrl();

    // Para mejorar el rendimiento y la usabilidad se ha implementado que se desabilite el boton unos
    // segundos para no hacer multiples peticiones a la API sin querer
    const [ loading, setLoading ] = useState(false);
    const handleButtonClick = () => {
        setLoading(true);
        handleClick(title);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <div className="col-md-12">
            <Card className="mb-4 box-shadow">
                <Card.Img variant="top"
                          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                          alt="Thumbnail [100%x225]" style={ { width: '100%', display: 'block' } }
                          src={ imageUrl }
                          onError={ handleImageError }
                          data-holder-rendered="true"
                />
                <Card.Body className="text-center">
                    <Card.Title className="text-center">{ title }</Card.Title>
                    <div>
                        <small className="text-muted">
                            { genresList.length !== 0 && <><TbMovie/> { genresList } </> }
                        </small>
                    </div>
                    <div>
                        <small className="text-muted">
                            <VscCalendar/> { date }
                        </small>
                    </div>
                    <small className="text-muted">
                        { actors !== '' && <><SlPeople/> { actors }</> }
                    </small>
                </Card.Body>
                <Card.Footer className="bg-primary text-white text-center">
                    <Button className="text-white" onClick={ handleButtonClick } disabled={ loading }>
                        { loading ? 'Loading...' : <><FaRegEye/> Veure fitxa a IMDB</> }
                    </Button>
                </Card.Footer>
            </Card>

        </div>

    );
};

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};