import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { useSnackbar } from "notistack";

const Admission = () => {
 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [cv, setCv] = useState("");
  const [motivation, setMotivation] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveCandidature = () => {
    const data = {
      firstName,
      lastName,
      cv,
      motivation,
      email,
      telephone,
    };

    axios
      .post("http://localhost:8082/candidature/newCandidature", data)
      .then(() => {
        enqueueSnackbar("candidature created successfully", {
          variant: "sucess",
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>
        Veuillez soumettre votre{" "}
        <span style={{ color: "#264653" }}>Candidature</span>{" "}
      </h1>
      <Form action="">
        <div className="bloc">
          <div className="bloc1">
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder=""
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required="true"
              />
              <Form.Control.Feedback type="invalid">
                this input is required.
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Email Adress"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Votre CV"
              className="mb-3"
            >
              <Form.Control
                type="file"
                placeholder=""
                value={cv}
                onChange={(e) => setCv(e.target.value)}
              />
            </FloatingLabel>
          </div>
          {/* ------------------------------------------------------------------------------------------------------------------- */}

          <div className="bloc2">
            <FloatingLabel
              controlId="floatingInput "
              label="Last Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder=""
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Phone Number"
              className="mb-3"
            >
              <PhoneInput
                type="text"
                placeholder=""
                value={telephone}
                onChange={setTelephone}
               
                
              />
              
            </FloatingLabel>
          </div>
        </div>
        <div className="textarea">
          <FloatingLabel controlId="floatingTextarea2" label="Vos Motivations">
            <Form.Control
              as="textarea"
              style={{ height: "300px", width: "500px" }}
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
            />
          </FloatingLabel>
        </div>
        <br />
        <br />
      </Form>

      <div>
        <Button
          variant="secondary"
          className=" btButton"
          type="submit"
          onClick={handleSaveCandidature}
        >
          Valider!!!
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Admission;
