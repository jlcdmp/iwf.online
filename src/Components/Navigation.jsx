import React, { Component } from 'react';
import '../App.css'


import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import ClickOutside from './ClickOutside'

class Navigation extends Component {
  state = {
  }

  render() {
    return (

      <>


        <ClickOutside
          onClickOutside={() => {
            this.setState({ expanded: false });
          }}
        >
        </ClickOutside>

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
                Option 1
            </NavText>
            </NavItem>

            <NavItem >
              <NavIcon>
                <i style={{ fontSize: '3em' }} />
              </NavIcon>
              <NavText>
                Option 2
            </NavText>
            </NavItem>

          </SideNav.Nav>

        </SideNav>







      </>
    );
  }
}


export default Navigation;