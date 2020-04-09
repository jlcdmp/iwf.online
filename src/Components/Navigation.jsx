import React, { Component } from 'react';
import '../App.css'


import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import ClickOutside from './ClickOutside'

class Navigation extends Component {
  state = {}

  render() {
    return (

      <>
        <SideNav onSelect={(selected) => { }} >

          <SideNav.Toggle />

          <SideNav.Nav defaultSelected="home">

            <NavItem eventKey="home">

              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
              </NavIcon>

              <NavText>
                Option 1
            </NavText>

            </NavItem>

          </SideNav.Nav>

        </SideNav>





        {/* <ClickOutside
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
                  <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                  Home
                </NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>

        </ClickOutside> */}

      </>
    );
  }
}


export default Navigation;