import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'



const App = () => {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/films">
                        <Films />
                    </Route>
                    <Route exact path="/films/:filmid">
                        <FilmDetails />
                    </Route>
                    <Route exact path="/people">
                        <People />
                    </Route>
                    <Route exact path="/people/:personid">
                        <PersonDetails />
                    </Route>
                    <Route exact path="/locations">
                        <Locations />
                    </Route>
                    <Route exact path="/locations/:locationid">
                        <LocationDetails />
                    </Route>
                    <Route exact path="*">
                        {() => <h1>404 Not found</h1>}
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }

export default App;
// make sure to put back exact in between <route .... path="/"
// put your most specific path at the top and less specific at the bottom
// make a route tha catches 404 pages, <route path="*"> anything not matching above paths, {() => <h1> 404 Not Found :(</h1>} </route>