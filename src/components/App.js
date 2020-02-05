import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Login, {fakeAuth} from "./Login";
import {PrivateRoute} from "./PrivateRoute";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/items" component={Items}/>
                        <Route path="/category" component={Category}/>
                        <Route path="/login" component={Login}/>}/>
                        <PrivateRoute path="/admin" component={Admin} isAuthenticated={fakeAuth.isAuthenticated}/>
                    </Switch>
                </div>

            </div>
        );
    }
}


export const Items = () => (
    <div>
        <h1>Items Component</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
    </div>
);

export const Category = ({match}) => (
    <div>
        <h1>Category Component</h1>
        <h5>Click on a category</h5>
        <ul>
            <li>
                <Link to={`${match.url}/shoes`}>Shoes</Link>
            </li>
            <li>
                <Link to={`${match.url}/food`}>Food</Link>
            </li>
            <li>
                <Link to={`${match.url}/dresses`}>Dresses</Link>
            </li>
        </ul>

        <Route
            path={`${match.path}/:categoryName`}
            render={props => (<div>{props.match.params.categoryName} category</div>)}
        />
    </div>
);

export const Admin = () => (
    <div>
        <h1>Protected Admin Component</h1>
        <p>
            You now access to this component because you are logged in.
        </p>
    </div>
);

export default App;
