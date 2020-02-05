import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    navbarLinks() {
        if (this.props.authenticated) {
            return [
                <li key="secret" className="nav-item"><Link className="nav-link" to="/secret">Secret</Link></li>,
                <li key="signout" className="nav-item"><Link className="nav-link" to="/signout">Sign out</Link></li>
            ];
        }
        return [
            <li key="signin" className="nav-item"><Link className="nav-link" to="/signin">Sign in</Link></li>,
            <li key="signup" className="nav-item"><Link className="nav-link" to="/signup">Sign up</Link></li>
        ];
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand">DnDTome Hub</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        {this.navbarLinks()}
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}
export default connect(mapStateToProps)(Navbar);
