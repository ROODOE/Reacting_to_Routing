import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

    const FilmsDetail = () => {

        const [film, setFilmsInfo] = useState([]);
        const {id} = useParams();

        useEffect(() => {
            fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
            .then((response) => response.json())
            .then((response) => setFilmsInfo(response))
        },[])

        return(
            <div className='content-container'>
                return (
                    <div className="card shadow mb-1">
                        <div className="card-body bg-light text-center" key={id}>
                            <h5 className="card-title bg-light">{id}</h5>
                            <h6 className="card-subtitle mb-2 text-muted bg-light"></h6>
                            {/* <Link to={`/films/${id}`}className="card-text bg-light" href={url}>{director}</Link> */}
                        </div>
                    </div>
                )
        </div>

        )
    }

export default FilmsDetail;