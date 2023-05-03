import { BsCameraReels } from 'react-icons/all';
import { Footer,NotLookingForAnything, SearchMovie } from './components';
import { useState } from 'react';
import { MovieLayout } from './layout/MovieLayout.jsx';

export const MovieApp = () => {
    const [ searchText, setSearchText ] = useState('');

    const handleSubmit = (searchText) => {
        setSearchText(searchText);
    };

    return (
        <>
            <div className="px-4 py-2 text-center">
                <h1 className="display-5 fw-bold"><BsCameraReels/></h1>
                <h1 className="display-5 fw-bold">Movies Database</h1>
            </div>

            <SearchMovie onNewCategory={ handleSubmit }/>
            {
                searchText === ''
                    ? <>
                        <NotLookingForAnything/>
                        <Footer/>
                    </>
                    : <MovieLayout searchText={ searchText }/>
            }
        </>
    );
};
