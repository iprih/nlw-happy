import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OngsMap from './pages/OngsMap';

function Routes() {
     return (
         <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/app" component={OngsMap}/>
         </BrowserRouter>
     );
}

export default Routes;