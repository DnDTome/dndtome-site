import React, {Component} from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper tomeColor">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo black-text"
            >
              <i className="material-icons"><FontAwesomeIcon icon={faDiceD20} className="animated bounce" /></i>
              DnDTome Hub
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link
                  to="/register"
                  className="waves-effect waves-light btn-small btn-nav  black-text"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="waves-effect waves-light btn-small btn-nav black-text"
                >
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;