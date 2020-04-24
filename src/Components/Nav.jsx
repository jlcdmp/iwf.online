import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ClickOutside from './ClickOutside'

class Nav extends Component {

  state = {
    expanded: false,
    overlay: null,
    click: false,
  }

  render() {
    return (
      <ClickOutside className='test'
        onClickOutside={this.handleOutsideClick}>

        <SideNav
          expanded={this.state.expanded}
          onToggle={(expanded) => {
            this.setState({ expanded, overlay: !this.state.overlay, click: !this.state.click })
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
              <NavText>
                Areas Of Operation
            </NavText>
            </NavItem>
            <NavItem eventKey='contact'>
              <NavIcon>
                <i style={{ fontSize: '3em' }} />
              </NavIcon>
              <NavText>
                Reviews
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

  handleOutsideClick = e => {
    const expanded = this.state.expanded
    const overlay = this.state.overlay
    const click = this.state.click

    if (expanded === true) {
      this.setState({
        expanded: !expanded,
        overlay: !overlay
      })
    }
    if (click === true) {
      this.props.addClass()
      this.setState({ click: !click })
    }
  }

}

export default Nav;