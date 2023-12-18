import React from "react";
import { Button } from "react-bootstrap";

const WebCandidature = () => {
  return (
    <React.Fragment>
      <div>
        <div>
          <h1 style={{ textAlign: "center" }}>
            Candidature pour le poste de{" "}
            <span style={{ color: "#264653" }}>Developpeur web</span>{" "}
          </h1>
        </div>
      </div>
      <div className="webStyle">
        <div>
          <img src="images/webSite.png" alt="" className="imgCandidature" style={{width:"535px"}} />
        </div>
        <div class="infStyle">
          <h6>Domaine</h6>
          <h6>Poste</h6>
          <h6>Date Cloture</h6>
          <Button variant="secondary" className="button ButtonCandi" href="/admission">
            postuler
          </Button>
        </div>
      </div>
      <div>
        <h2>Experience Professionnel</h2>
        
      </div>
    </React.Fragment>
  );
};

export default WebCandidature;
