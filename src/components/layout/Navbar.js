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
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn waves-effect waves-light hoverable blue accent-3"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-flat waves-effect white black-text"
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