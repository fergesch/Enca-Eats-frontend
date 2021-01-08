// import logo from "../../assets/logo.svg";

// function Header() {
//   return (
//     <header className="App-header">
//       {/* <img src={logo} className="App-logo" alt="logo" /> */}
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   );
// }

// export default Header;

// import React from "react";
// import Navbar from "react-materialize";
// import NavItem from "react-materialize";

// function Header() {
//   return (
//     <Navbar brand="logo" left>
//       <NavItem><Link to="/Home" activeClassName="active">Home</Link></NavItem>
//         <NavItem><Link to="/Sign-In" activeClassName="active">Sign In</Link></NavItem>
//         <NavItem><Link to="/Register" activeClassName="active">Register</Link></NavItem>
//     </Navbar>
//   );
// }
// export default Header;

// function Header() {
//   return(
//     <nav>
//     <div class="nav-wrapper">
//       <p>Logo</p>
//       <p>Section 1</p>
//       {/* <ul id="nav-mobile" class="right hide-on-med-and-down">
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//       </ul> */}
//     </div>
//   </nav>
//   );
// }

// export default Header;

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (

    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        Enca Eats
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
    </AppBar>
  );
}

export default Header;
