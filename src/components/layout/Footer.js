import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPatreon, faDiscord} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer deep-purple ">
        <div className="footer-copyright">
          <div className="container">
            © 2020 <b>The DnDTome Team</b>

            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href="https://www.patreon.com/bePatron?u=25310394" target="_blank"
               className="grey-text text-lighten-4 right"><i className="material-icons"><FontAwesomeIcon
              icon={faPatreon}/></i> Become a patron </a>

            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href="https://discord.gg/2KB3tzG" target="_blank"
               className="grey-text text-lighten-4 right"><i className="material-icons"><FontAwesomeIcon
              icon={faDiscord}/></i> Join the discord</a>

          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
