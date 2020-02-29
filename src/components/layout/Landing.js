import React, {Component} from "react";
import logo from '../../assets/img/dice_icon.png'

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <br/>
            <h1 className="header center orange-text">Welcome to The Hub</h1>
            <div className="row center">
              <div className="col s2 offset-s5 center-align ">
                <img className="responsive-img" src={logo} alt="DnDTome Logo"/>

              </div>
              <h5 className="header col s12 light">The Place for controlling your DnDTomeApp</h5>
            </div>
            {/*<div className="row center">*/}
            {/*  <a href="http://materializecss.com/getting-started.html" id="download-button"*/}
            {/*     className="btn-large waves-effect waves-light orange">Get Started</a>*/}
            {/*</div>*/}
            <br/>
          </div>
        </div>
        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                  <h5 className="center">Push Data to your App</h5>

                  <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
                  <h5 className="center">Sync with your group</h5>

                  <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2>
                  <h5 className="center">Realtime Sessions</h5>

                  <p className="light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>
            </div>

          </div>
          <br/><br/>
        </div>
      </div>
    );
  }
}

export default Landing;