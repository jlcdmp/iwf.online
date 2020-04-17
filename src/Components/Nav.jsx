import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ClickOutside from './ClickOutside'

class Nav extends Component {

  state = {
    expanded: false
  }

  render() {
    return (
      <ClickOutside className='test'
        onClickOutside={() => {
          this.setState({ expanded: false });
          this.props.addClass()
        }}
      >

        <SideNav
          expanded={this.state.expanded}
          onToggle={(expanded) => {
            this.setState({ expanded })
            this.props.addClass();
          }}>



          <SideNav.Toggle />

          <SideNav.Nav defaultSelected="home" >

            <NavItem eventKey="home" onClick={this.props.handleScrollNav} >


              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '3em' }} />
              </NavIcon>
              <NavText>
                Home
            </NavText>
            </NavItem>

            <NavItem eventKey='services' onClick={this.props.handleScrollNav} >
              <NavIcon>
                <i style={{ fontSize: '3em' }} />
              </NavIcon>
              <NavText >
                Our Services
            </NavText>
            </NavItem>

            <NavItem eventKey='news' onClick={this.props.handleScrollNav}>
              <NavIcon>
                <i style={{ fontSize: '3em' }} />
              </NavIcon>
              <NavText>
                News
            </NavText>
            </NavItem>

            <NavItem eventKey='contact'>
              <NavIcon>
                <i style={{ fontSize: '3em' }} />
              </NavIcon>
              <NavText id='nav-contact'>
                Get In Touch
            </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </ClickOutside >
    );
  }
















}
export default Nav;