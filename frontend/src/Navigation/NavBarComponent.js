import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Search, Menu, ShoppingCart, Person } from "@material-ui/icons";

import SearchComponent from "./SearchComponent";
import SideDrawerComponent from "./SideDrawerComponent";
import Auth from "../Auth/Auth";
import { AuthContext } from "../shared/context/AuthContext";
import utilityClasses from "../util/utilityClasses";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.contrastText,

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  link: {
    color: "white",

    [theme.breakpoints.up("md")]: {
      flexGrow: 0,
    },
  },
  logo: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "1.3rem",
  },
  btnStyle: {
    textTransform: "none",
    fontWeight: "bold",
  },
  toolBarStyle: {
    [theme.breakpoints.up("md")]: {
      width: "70%",
      margin: "auto",
    },
  },
  noTextDecoration: {
    textDecoration: "none",
  },
}));

const NavBarComponent = () => {
  const auth = useContext(AuthContext);
  const navBarStyles = useStyles();
  const utilClasses = utilityClasses();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  const handleOpenLoginDialog = () => {
    !auth.isLoggedIn && setOpenDialog(true);
  };

  const handleCloseLoginDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={navBarStyles.toolBarStyle}>
          <SideDrawerComponent
            open={openDrawer}
            setOpen={setOpenDrawer}
            toggleDrawer={toggleDrawer}
          />

          <IconButton
            className={navBarStyles.icon}
            onClick={() => toggleDrawer(true)}
          >
            <Menu />
          </IconButton>

          <Link
            to="/"
            className={`
              ${navBarStyles.link} 
              ${navBarStyles.noTextDecoration} 
              ${utilClasses.flexOne}
            `}
          >
            <Typography className={`${navBarStyles.logo}`}>Flipkart</Typography>
          </Link>

          <IconButton className={navBarStyles.icon}>
            <Search />
          </IconButton>

          <Link to="/cart">
            <IconButton className={navBarStyles.icon}>
              <ShoppingCart />
            </IconButton>
          </Link>

          <div className={`${utilClasses.desktopView} ${utilClasses.flexOne}`}>
            <SearchComponent />
          </div>

          <Button
            color="primary"
            onClick={handleOpenLoginDialog}
            className={navBarStyles.btnStyles}
          >
            {auth.isLoggedIn ? (
              <>
                <span className={utilClasses.desktopView}>{auth.name}</span>
                <Person className={utilClasses.mobileView} />
              </>
            ) : (
              "Login"
            )}
          </Button>

          <Button
            color="primary"
            className={`${navBarStyles.btnStyle} ${utilClasses.desktopView}`}
          >
            More
          </Button>

          <Link to="/cart" className={navBarStyles.noTextDecoration}>
            <Button
              color="primary"
              className={`${navBarStyles.btnStyle} ${utilClasses.desktopView}`}
              startIcon={<ShoppingCart />}
            >
              Cart
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Auth open={openDialog} handleClose={handleCloseLoginDialog} />
    </>
  );
};

export default NavBarComponent;
