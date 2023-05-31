import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  customTextField: {
    height: "3rem",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      height: "100%",
      color: "#fff",
    },
    backgroundColor: "#525355",
    // width: "45rem",
    borderRadius: "8px",
  },
  iconStyle: {
    color: "#8f8f91",
    cursor: "pointer",
  },
});

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "30vw",
            gap: 2,
          }}
        >
          <TextField
            className={classes.customTextField}
            // required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.customTextField}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={onLogin}>
            Login
          </Button>
          <p className="text-sm text-white text-center">
            No account yet? <NavLink to="/signup">Sign up</NavLink>
          </p>
        </Box>
      </Container>
    </>
  );
};

export default Login;
