import error404 from '../assets/img/error404.svg';

export const WithoutResults = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" >
            <img
                src={error404}
                alt="Director"
                className="mx-auto d-block animate-floating"
                style={{ width: '450px', height: 'auto' }}
            />
        </div>
    );
};