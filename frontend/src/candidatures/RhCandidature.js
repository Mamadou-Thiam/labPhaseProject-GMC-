import React from "react";
import { Button } from "react-bootstrap";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import ComputerIcon from '@mui/icons-material/Computer';
import WorkIcon from '@mui/icons-material/Work';
import EngineeringIcon from '@mui/icons-material/Engineering';

const RhCandidature = () => {
  return (
    <React.Fragment>
      <div>
        <div>
          <h1 style={{ textAlign: "center" }}>
            Candidature pour le poste de {""}
            <span style={{ color: "#264653" }}>RH</span>{" "}
          </h1>
        </div>
      </div>
      <div className="webStyle">
        <div>
          <img src="images/Resume.png" alt="" className="imgCandidature" style={{width:"535px"}}/>
        </div>
        <div class="infStyle">
          <h5><WorkIcon/>Secteur d'activite</h5>
          <h6>ressource humaine</h6>
          <h5><AccessTimeFilledIcon />Temps de Travail</h5>
          <h6>Temps plein</h6>
          <h5><EngineeringIcon/>Experience</h5>
          <h6>2 ans</h6>
          <h5><HourglassBottomIcon/>Expire le</h5>
          <h6>11/03/2024</h6>
          <h5><ComputerIcon/>Mode travail</h5>
          <h6>sur site</h6>
          
          <Button variant="secondary" className="button ButtonCandi" href="/admission">
            Postuler
          </Button>
        </div>
      </div>
      <div>
        <h2>Description de l'offre</h2>
      </div>
    </React.Fragment>
  );
};

export default RhCandidature;
