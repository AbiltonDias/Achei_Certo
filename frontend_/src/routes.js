import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Logon from './pages/Logon';
import NewIncident from './pages/NewIncident';
import Profile from './pages/Profile';
import Register from './pages/Register'
import Home from './pages/Home';
import LogonUsuario from './pages/LogonUsuario';
import ProfileUsuario from './pages/ProfileUsuario';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/instituicao' component={Logon} />
                <Route path='/incidents' component={NewIncident} />
                <Route path='/profiles' component={Profile} />
                <Route path='/register' component={Register} />
                <Route path='/usuarios' component={LogonUsuario} />
                <Route path='/profile-usuario'component={ProfileUsuario} />
            </Switch>
        </BrowserRouter>
    )
}