import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ClickOutside from './ClickOutside'

class Nav extends Component {
  state = {}

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
          }}>

          <SideNav.Toggle />

          <SideNav.Nav defaultSelected="home" >

            <NavItem eventKey="home" >
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '3em' }} />
              </NavIcon>
              <NavText>
                Home
            </NavText>
            </NavItem>

            <NavItem eventKey='services' onClick={this.props.handleClick} >
              <NavIcon>
                <i style={{ fontSize: '3em' }} />
              </NavIcon>
              <NavText >
                Our Services
            </NavText>
            </NavItem>

            <NavItem eventKey='area'>
              <NavIcon>
                <i style={{ fontSize: '3em' }} />
              </NavIcon>
              <NavText>
                News
            </NavText>
            </NavItem>

            <NavItem eventKey='contact' onClick={this.props.handleClick}>
              <NavIcon>
                <i style={{ fontSize: '3em' }} />
              </NavIcon>
              <NavText id='nav-contact'>
                Get In Touch
            </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </ClickOutside>
    );
  }
















}
export default Nav;