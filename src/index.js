import './custom.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/universal/navbar';
import Home from './components/Home';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import reducers from './rootReducer';
import reduxThunk from 'redux-thunk';
import { AUTHENTICATED } from './actions';
import requireAuth from './components/require_auth';
import noRequireAuth from './components/no_require_auth';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);


const user = localStorage.getItem('user');

if(user) {
    store.dispatch({ type: AUTHENTICATED });
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/signin" component={noRequireAuth(Signin)} />
                <Route path="/signup" component={noRequireAuth(Signup)} />
        </Router>
    </Provider>,
    document.querySelector('#root')
);
