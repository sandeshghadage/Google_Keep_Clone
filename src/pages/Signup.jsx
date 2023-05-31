import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
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

const Signup = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
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
          <Button variant="contained" onClick={onSubmit}>
            Submit
          </Button>
          <p>
            Already have an account? <NavLink to="/login">Sign in</NavLink>
          </p>
        </Box>
      </Container>
    </>
    // <main>
    //   <section>
    //     <div>
    //       <div>
    //         <h1> FocusApp </h1>
    //         <form>
    //           <div>
    //             <label htmlFor="email-address">Email address</label>
    //             <input
    //               type="email"
    //               label="Email address"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               required
    //               placeholder="Email address"
    //             />
    //           </div>

    //           <div>
    //             <label htmlFor="password">Password</label>
    //             <input
    //               type="password"
    //               label="Create password"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               required
    //               placeholder="Password"
    //             />
    //           </div>

    //           <button type="submit" onClick={onSubmit}>
    //             Sign up
    //           </button>
    //         </form>

    //         <p>
    //           Already have an account? <NavLink to="/login">Sign in</NavLink>
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    // </main>
  );
};

export default Signup;
