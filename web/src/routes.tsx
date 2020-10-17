import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Landing from './pages/Landing';
import OngsMap from './pages/OngsMap';
import Ong from './pages/Ong';
import CreateOng from './pages/CreateOng';


function Routes() {
     return (
         <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/app" component={OngsMap}/>
            <Route path="/ongs/create" component={CreateOng}/>
            <Route path="/ongs/:id" component={Ong}/>
          </Switch>
         </BrowserRouter>
     );
}

export default Routes;