import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Films from './components/Films';
import FilmsDetail from './components/filmsDetail';
import People from './components/People';
// import People from './components/People/peopleDetail';


const App = () => {
    return (
        <BrowserRouter>
            <div className="d-flex justify-content-center mt-5 border-bottom border-2 shadow ">
                <Link to="/" className="btn btn-primary mx-2 shadow mx-5 mb-2 mt-2">Go Home</Link>
                <Link to="/films" className="btn btn-primary mx-2 shadow mx-5 mb-2 mt-2">View Films</Link>
                <Link to="/people" className="btn btn-primary mx-2 shadow mx-5 mb-2 mt-2">View People</Link>
            </div>
            <main className="container mt-5 d-flex flex-wrap justify-content-around">
                <Switch>
                    <Route exact path="/">
                        <div className="card rounded shadow">
                            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcb3fcda-5925-491b-b841-334e641965cb/d95wnnl-fc911c55-de09-4817-b6b2-427cc63581c1.jpg/v1/fill/w_900,h_507,q_75,strp/studio_ghibli_logo_by_schneefuechsin_d95wnnl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTA3IiwicGF0aCI6IlwvZlwvZGNiM2ZjZGEtNTkyNS00OTFiLWI4NDEtMzM0ZTY0MTk2NWNiXC9kOTV3bm5sLWZjOTExYzU1LWRlMDktNDgxNy1iNmIyLTQyN2NjNjM1ODFjMS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7ZFkQwLGEqJdwJ8QcMLw4pDUAReMCh-qdPeieyTPOZ8" className="card-img-top" alt="..."></img>
                        </div>
                    </Route>
                    <Route exact path="/films">
                        <Films />
                    </Route>
                    <Route exact path="/films/:filmsDetail">
                        <FilmsDetail />
                    </Route>
                    <Route exact path="/people">
                        <People />
                    </Route>
                    <Route exact path="*">
                        {() => <h1>404: Page Not Found :(</h1>}
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    )
}


export default App;