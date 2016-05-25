import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import NavBar from './components/NavBar';

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

export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={NavBar}>
            <Route path="/riba" component={Riba} />
        </Route>
    </Router>
)