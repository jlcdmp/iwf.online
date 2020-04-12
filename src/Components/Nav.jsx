import React, { Component } from 'react';

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import ClickOutside from './ClickOutside'

class Nav extends Component {
  state = {}

  componentDidMount() {

  }

  render() {
    return (


      <ClickOutside
        onClickOutside={() => {
          this.setState({ expanded: false });
        }}
      >

        <SideNav
          expanded={this.state.expanded}
          onToggle={(expanded) => {
            this.setState({ expanded });
          }}
        >

          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '3em' }} />
              </NavIcon>
              <NavText>
                Home
            </NavText>
            </NavItem>
            <NavItem eventKey='services'>
              <NavIcon>
                <i style={{ fontSize: '3em' }} />
              </NavIcon>
              <NavText>
                Our Services
            </NavText>
            </NavItem>
            <NavItem eventKey='contact'>
              <NavIcon>
                <i style={{ fontSize: '3em' }} />
              </NavIcon>
              <NavText>
                Contact Us
            </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>

      </ClickOutside>

    );
  }
}

export default Nav;