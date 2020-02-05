import React, { Component } from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from 'components/Home'
import Login from 'components/Login'
import Signup from 'components/Register'
import Welcome from 'components/Welcome'
import NavigationBar from 'components/NavigationBar'
import requireAuth from 'components/requireAuth'

export default class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <NavigationBar/>
                    <Switch>
                        <Route path='/' component={Home} />
                        <Route path='/login' component={Login} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/welcome' component={requireAuth(Welcome)} />
                        <Route render={() => <h3>No Match</h3>} />
                    </Switch>
                </div>
            </BrowserRouter>)
    }
}
