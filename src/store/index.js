import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

export default (initialState) => {
    const logger = createLogger();

    console.log('initialState', initialState);

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger))

    console.error('store', store);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}