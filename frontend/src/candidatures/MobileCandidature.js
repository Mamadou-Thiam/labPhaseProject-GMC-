import React from "react";
import { Button } from "react-bootstrap";

const MobileCandidature = () => {
  return (
    <React.Fragment>
      <div>
        <div>
          <h1 style={{ textAlign: "center" }}>
            Candidature pour le poste de{" "}
            <span style={{ color: "#264653" }}>Developpeur Mobile</span>{" "}
          </h1>
        </div>
      </div>
      <div className="webStyle">
        <div>
          <img src="images/mobile.png" alt="" className="imgCandidature" style={{width:"535px"}}/>
        </div>
        <div class="infStyle">
          <h6>domaine</h6>
          <h6>poste</h6>
          <h6>date cloture</h6>
          <Button variant="secondary" className="button ButtonCandi" href="/admission">
            Postuler
          </Button>
        </div>
      </div>
      <div>
        <h2>Experience Professionnel</h2>
      </div>
    </React.Fragment>
  );
};

export default MobileCandidature;
