import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Films = () => {
    const [filmsInfo, setFilmsInfo] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((response) => {
                return response.json()
            }).then(allFilms => setFilmsInfo(allFilms))
    }, []);

    return (
        <div className='content-container'>
            {filmsInfo.map(film => {
                return (
                    <div className="card shadow mb-1">
                     <div className="card-body bg-light text-center">
                            <h5 className="card-title bg-light">{film.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted bg-light">{film.original_title_romanised}</h6>
                            {/* <a className="card-text bg-light" target="_blank" href={film.id}>{film.title}</a> */}
                            {/* <Link className="card-text bg-light" to={`/films/${id}`} target="_blank" href={film.id}>{film.title}</Link> */}
                            <Link className="card-text bg-light" to='/films/:filmsDetail' target="_blank" href={film.id}>{film.title}</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default Films;