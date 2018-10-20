import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle";

// import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {firebaseApp} from "../firebase/base";
import {Route, withRouter, Link ,Redirect} from 'react-router-dom'
class HeaderLinks extends React.Component {
  state = {
    open: false,
    anchorEl: null,
  };
  // this.logout = this.logout.bind(this);

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  logout = () => {
    firebaseApp.auth().signOut();
    <Redirect to exact ='/' />
}

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const { classes } = this.props;
    // const { open } = this.state;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  {/* <MenuItem onClick={this.handleClose}> */}
                  <Button 
                  variant="contained" color="primary" 
                  onClick={this.logout} >
                  <Link to ='/' >Logout </Link>
                  </Button>
                  {/* </MenuItem> */}
                  {/* <MenuItem onClick={this.handleClose}>My account</MenuItem> */}
                </Menu>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
