import React from "react";
import {useNavigate} from "react-router-dom"
import { Button,Form } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios'
import { useSnackbar } from "notistack";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const{enqueueSnackbar}=useSnackbar();
  const handleSignUp= () => {
    const data = {
      firstName,
      lastName,
      email,
      password
    };

    axios
      .post("http://localhost:8082/candidature/register", data)
      .then(() => {
        enqueueSnackbar("SIGN Up successfully", {variant:"sucess"} )
        navigate("/");
      })
      .catch((err) => console.log(err));
    };
  return (
    <React.Fragment>
      <div className="loginStyle">
        <div>
          <img src="images/signUp.gif" alt="" style={{ width: "700px" }} />
        </div>

        <div className="logStyle">
          <h1 style={{ marginLeft: "120px", color: "#264653" }}className="animate__animated animate__bounce">WÜT LIGGUËY</h1>
          <h5>Sign Up</h5>
          <Form action="">
          <div className="formStyle">
            <input type="text" required="required" value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
            <span>First Name</span>
          </div>
          <br />
          <div className="formStyle">
            <input type="text" required="required"  value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
            <span>Last Name</span>
          </div>
          <br />
          <div className="formStyle">
            <input type="email" required="required" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <span>Email</span>
          </div>
          <br />
          <div className="formStyle">
            <input type="password" required="required"  value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <span>password</span>
          </div>
          </Form>
          <br />
          
          <br />
          <Button variant="secondary" className=" btButton signStyle" type="submit" onClick={handleSignUp} >
          SIgn UP
        </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
