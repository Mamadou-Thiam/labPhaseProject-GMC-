import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";

const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();
  const{enqueueSnackbar}=useSnackbar();
  const handleSignIn= () => {
    const data = {
      
      email,
      password
    };

    axios
      .post("http://localhost:8082/candidature/login", data)
      .then(() => {
        enqueueSnackbar("Connexion successfully", {variant:"sucess"} )
        navigate("/");
      })
      .catch((err) => console.log(err));
    };
  return (
    <React.Fragment>
      <div className="loginStyle">
        <div>
          <img src="images/login.gif" alt="" style={{ width: "700px" }} />
        </div>

        <div className="logStyle">
          <h1 style={{ marginLeft: "120px", color: "#264653" }} className="animate__animated animate__bounce">WÜT LIGGUËY</h1>
          <h5>Sign In</h5>
          <div className="formStyle">
            <input type="email" required="required" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <span>Email</span>
          </div>
          <br />
          <div className="formStyle">
            <input type="password" required="required" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <span>Password</span>
          </div>
          <br />
          <br />
          <Button variant="secondary" className=" btButton signStyle" type="submit" onClick={handleSignIn}  >
          SIgn IN
        </Button>
          <span>ou</span>{" "}
          <a href="/register" style={{ color: "#264653" }}>
            Create account
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
