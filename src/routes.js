import React from 'react';
import { Route, IndexRoute } from 'react-router'

import Page from './components/Page';
import Create from './components/Create';
import Export from './components/Export';
import Explore from './components/Explore';
import Presets from './components/Presets';

export const routes = (
    <div>
        <Route path='/' component={ Page }>
            <IndexRoute component={ Create } />
            <Route path='create' component={ Create } />
            <Route path='explore' component={ Explore } />
            <Route path='export' component={ Export } />
            <Route path='presets' component={ Presets } />
        </Route>
    </div>
)