import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Page from './components/Page';

// import ReactRouter from '';
// import Counter from './components/Counter/Counter';
// import './styles/main.scss';

/*export default () => (
  <div className="container">
    <h1 className="title"> Basic Counter Example</h1>
    <Counter />
  </div>
);*/

/*export default () => (
    <Router history={browserHistory}>
        <Route path='/' component={Riba}>
            <IndexRoute component={Foo} />
            <Route path='bar' component={Bar} />
            <Route path='zoo' component={Zoo} />
        </Route>
    </Router>
)*/

// export default () => (
//     <Router history={browserHistory}>
//         <Route path="/" component={Page}>
//         </Route>
//     </Router>
// )
// console.log('configureStore', configureStore);

const store = configureStore();

// console.log('store', store);
// console.log('state', store.getState());

export default () => (
    <Provider store={store}>
        <Page />
    </Provider>
)