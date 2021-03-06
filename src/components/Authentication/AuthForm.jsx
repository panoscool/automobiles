import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography } from "@material-ui/core";
import InputForm from "../Shared/forms/InputForm";
import Spinner from "../Shared/Spinner";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 auto",
    maxWidth: 1280,
    padding: 16,
    minHeight: "calc(100vh - 131px)"
  },
  paper: {
    maxWidth: 600,
    margin: "0 auto",
    padding: 50,
    fontSize: 26,
    textAlign: "center",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
      fontSize: 20
    }
  },
  inputField: {
    marginTop: 16,
    marginBottom: 16
  },
  title: {
    fontSize: 26,
    fontWeight: 500,
    lineHeight: 1.62,
    letterSpacing: "normal",
    paddingBottom: 10
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 1.73,
    letterSpacing: 0.2,
    color: "#8e8e8e",
    paddingBottom: 6
  }
}));

function AuthForm(props) {
  const classes = useStyles();
  const {
    onSubmit,
    emailLabel,
    passwordLabel,
    buttonLabel,
    loading,
    error
  } = props;

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = state;
    onSubmit(email, password);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.title}>
          SignIn to your account!
        </Typography>

        <span style={{ color: "red", fontSize: "14px" }}>{error}</span>

        {loading ? (
          <Spinner />
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={classes.inputField}>
              <InputForm
                required
                name="email"
                type="email"
                value={state.identity}
                handleChange={handleInputChange}
                label={emailLabel}
              />
            </div>
            <div className={classes.inputField}>
              <InputForm
                required
                name="password"
                type="password"
                value={state.password}
                handleChange={handleInputChange}
                label={passwordLabel}
              />
            </div>

            <Button type="submit" color="primary" variant="contained" fullWidth>
              <strong>{buttonLabel}</strong>
            </Button>
          </form>
        )}
      </Paper>
    </div>
  );
}

export default AuthForm;
