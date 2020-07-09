import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/home';
import QuemSomos from '../pages/QuemSomos/index';
import Contato from '../pages/Contato/contato';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/quemSomos' exact component={QuemSomos} />
                <Route path='/contato' exact component={Contato} />
            </Switch>
        </BrowserRouter>
    )
} 