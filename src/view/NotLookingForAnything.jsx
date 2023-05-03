import NotLookingForAnythingIMG from '../assets/img/NotLookingForAnythingIMG.png';

export const NotLookingForAnything = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" >
            <img
                src={NotLookingForAnythingIMG}
                alt="Director"
                className="mx-auto d-block animate-floating"
                style={{ width: '450px', height: 'auto' }}
            />
        </div>
    );
};