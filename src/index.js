import React from 'react';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { render } from 'react-dom';

import { routes } from './routes';
import configureStore from './store'

const store = configureStore()

render(
    <Provider store={store}>
        <Router history={ browserHistory } routes={routes} />
    </Provider>,
    document.getElementById('app')
)