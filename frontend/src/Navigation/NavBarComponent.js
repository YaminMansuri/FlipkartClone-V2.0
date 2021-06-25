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
import { Search, Menu, ShoppingCart } from "@material-ui/icons";

import SearchComponent from "./SearchComponent";
import SideDrawerComponent from "./SideDrawerComponent";
import Auth from "../Auth/Auth";
import { AuthContext } from "../shared/context/auth-context";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.contrastText,

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  flexOne: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
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
  desktopView: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

const NavBarComponent = () => {
  const auth = useContext(AuthContext);
  const navBarStyles = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  const handleOpenLoginDialog = () => {
    setOpenDialog(true);
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
            className={`${navBarStyles.link} ${navBarStyles.flexOne}`}
          >
            <Typography className={`${navBarStyles.logo}`}>Flipkart</Typography>
          </Link>

          <IconButton className={navBarStyles.icon}>
            <Search />
          </IconButton>

          <IconButton className={navBarStyles.icon}>
            <ShoppingCart />
          </IconButton>

          <div
            className={`${navBarStyles.desktopView} ${navBarStyles.flexOne}`}
          >
            <SearchComponent />
          </div>

          {auth.isLoggedIn ? null : (
            <Button
              color="primary"
              onClick={handleOpenLoginDialog}
              className={navBarStyles.btnStyle}
            >
              Login
            </Button>
          )}

          <Button
            color="primary"
            className={`${navBarStyles.btnStyle} ${navBarStyles.desktopView}`}
          >
            More
          </Button>
          <Button
            color="primary"
            className={`${navBarStyles.btnStyle} ${navBarStyles.desktopView}`}
            startIcon={<ShoppingCart />}
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>
      <Auth open={openDialog} handleClose={handleCloseLoginDialog} />
    </>
  );
};

export default NavBarComponent;
