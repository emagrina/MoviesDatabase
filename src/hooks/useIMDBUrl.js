import { getIMDBIdForMovie } from '../helpers';

export const useIMDBUrl = () => {
    const handleClick = (title) => {
        const imdbTitle = getIMDBIdForMovie(title);
        imdbTitle.then((valor) => {
            const imdbUrl = `https://www.imdb.com/title/${valor}/`;
            window.open(imdbUrl, '_blank');
        }).catch((error) => {
            console.error(error);
        });
    };

    return handleClick;
};
