import { Switch, Route } from 'react-router-dom'; 
import {Home} from './Home'
import {About} from './About'

export function Content ( props ) {
    return(
        <div className="container">
            <h1>This is the CONTENT where we're going to add everything that we need for our homepage ;))</h1>
            <Switch>
                <Route exact path = "/">
                    <Home />
                </Route>
                <Route path = "/about">
                    <About />
                </Route>
            </Switch>
        </div>
    )
}