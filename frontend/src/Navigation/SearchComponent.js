import React from "react";

import { InputBase, makeStyles, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    width: "60%",
    borderRadius: 2,
    backgroundColor: "white",
    marginLeft: theme.spacing(3),
  },
  searchIcon: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(0, 2),
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 2),
  },
}));

const SearchComponent = () => {
  const searchComponentStyles = useStyles();

  return (
    <div className={searchComponentStyles.search}>
      <InputBase
        placeholder="Search…"
        classes={{
          root: searchComponentStyles.inputRoot,
          input: searchComponentStyles.inputInput,
        }}
      />
      <IconButton className={searchComponentStyles.searchIcon}>
        <Search color="primary" />
      </IconButton>
    </div>
  );
};

export default SearchComponent;
