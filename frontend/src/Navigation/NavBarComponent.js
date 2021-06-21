import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  searchField: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
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
    display: "none",
    textTransform: "none",
    fontWeight: "bold",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  toolBarStyle: {
    [theme.breakpoints.up("md")]: {
      width: "70%",
      margin: "auto",
    },
  },
}));

const NavBarComponent = () => {
  const navBarStyles = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
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

        <Link to="/" className={`${navBarStyles.link} ${navBarStyles.flexOne}`}>
          <Typography className={`${navBarStyles.logo}`}>Flipkart</Typography>
        </Link>

        <IconButton className={navBarStyles.icon}>
          <Search />
        </IconButton>

        <IconButton className={navBarStyles.icon}>
          <ShoppingCart />
        </IconButton>

        <div className={`${navBarStyles.searchField} ${navBarStyles.flexOne}`}>
          <SearchComponent />
        </div>

        <Button color="primary" className={navBarStyles.btnStyle}>
          Yamin
        </Button>
        <Button color="primary" className={navBarStyles.btnStyle}>
          More
        </Button>
        <Button
          color="primary"
          className={navBarStyles.btnStyle}
          startIcon={<ShoppingCart />}
        >
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarComponent;
