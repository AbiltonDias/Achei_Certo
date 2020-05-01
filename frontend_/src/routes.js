import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Logon from './pages/Logon';
import NewIncident from './pages/NewIncident';
import Profile from './pages/Profile';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Logon} />
                <Route path='/incidents' component={NewIncident} />
                <Route path='/profiles' component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}