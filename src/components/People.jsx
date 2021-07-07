import React, { useState, useEffect } from 'react';

    const People = () => {

        const [peopleInfo, setPeopleInfo] = useState([]);

        useEffect(() => {
            fetch('https://ghibliapi.herokuapp.com/people')
            .then((response) => {
                return response.json()
            }).then(allPeople => setPeopleInfo(allPeople));
        })

        return(
            <div className='content-container d-flex-row text-center'>
            {peopleInfo.map(people => {
                return (
                    <div className="card shadow mb-1">
                        <div className="card-body bg-light align-items-center" key={people.id}>
                            <h5 className="card-title bg-light">{people.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted bg-light">{people.age}</h6>
                            <a className="card-text bg-light" target="_blank" href={people.url}>{people.name}</a>
                        </div>
                    </div>
                )
            })}
            </div>
        )
    }
    

export default People;