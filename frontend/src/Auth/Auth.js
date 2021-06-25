import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Grid,
} from "@material-ui/core";

import { loginApi, signupApi } from "../Api/authApi";
import { AuthContext } from "../shared/context/auth-context";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "60vh",
  },
  pointer: {
    cursor: "pointer",
  },
  lowerCase: {
    textTransform: "none",
  },
}));

const Auth = (props) => {
  const auth = useContext(AuthContext);
  const { open, handleClose } = props;
  const authStyles = useStyles();

  const [isLoginMode, setIsLoginMode] = useState(true);

  const [userState, setUserState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserState({ ...userState, [name]: value });
    console.log(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (isLoginMode) {
      login();
    } else {
      signup();
    }
  };

  const login = async () => {
    try {
      const { data } = await loginApi(userState);
      auth.login(data.userId, data.token);
      console.log("User logged in");
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async () => {
    try {
      const { data } = await signupApi(userState);
      auth.login(data.userId, data.token);
      console.log("User signed up");
    } catch (error) {
      console.log(error);
    }
  };

  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isLoginMode ? "Login" : "Signup"}</DialogTitle>
        <DialogContent className={authStyles.container}>
          <form onSubmit={onSubmit}>
            <Grid container spacing={1}>
              {!isLoginMode && (
                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <OutlinedInput
                      id="name"
                      name="name"
                      type="name"
                      value={userState.name}
                      onChange={handleInput}
                      label="Name"
                      required
                    />
                  </FormControl>
                </Grid>
              )}
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <OutlinedInput
                    id="email"
                    name="email"
                    type="email"
                    value={userState.email}
                    onChange={handleInput}
                    label="Email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    name="password"
                    type="password"
                    value={userState.password}
                    onChange={handleInput}
                    label="Password"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  {isLoginMode ? "Login" : "Signup"}
                </Button>
              </Grid>
            </Grid>
          </form>
          <Button
            onClick={switchModeHandler}
            fullWidth
            className={authStyles.lowerCase}
          >
            {isLoginMode
              ? "Don't have an account? Signup"
              : "Already have an account? Login"}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Auth;
