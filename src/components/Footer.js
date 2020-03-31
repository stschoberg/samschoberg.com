import React from 'react';
import {Container} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr/>
        <Container>
          <a href="https://www.linkedin.com/in/stschoberg/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
          <a href="https://github.com/stschoberg"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
          <a href="https://medium.com/@stschoberg"><FontAwesomeIcon icon={faMedium}></FontAwesomeIcon></a>
          <a href="https://twitter.com/stschoberg"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
        </Container>
      </footer>
    );
  }
}

export default Footer;
