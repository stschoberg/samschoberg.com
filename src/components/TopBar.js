import React from 'react';
import {Container, Navbar, NavbarBrand} from 'reactstrap';
import profilePic from '../profilePic.jpg';


class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">
          <img src={profilePic} className="profile-pic" alt="Sam Schoberg"/>

            <span>Sam Schoberg</span>
          </NavbarBrand>

        </Container>
      </Navbar>

    );
  }
}

export default TopBar;
