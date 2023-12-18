import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PlaceIcon from "@mui/icons-material/Place";
import QueryBuilder from "@mui/icons-material/QueryBuilder";
import WorkIcon from "@mui/icons-material/Work";



const Accueil = () => {
  return (
    <React.Fragment>
      {/* implementation de la barre de navigaton */}

      <header>
        <div className="hero">
          <nav>
            <h1 style={{ color: "#264653" }}>WÜT LIGGUËY</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/candidatureList">Candidature-List</a>
              </li>
              <li>
                <a href="/login"> SIGN IN</a>
              </li>
              <li>
                <a className="btn btn btn-secondary" href="/register">
                  SIGN UP
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* implementation de l'image */}
       <div className="backStyle" >
        <div className="titreStyle">
          <h4>
            Bienvenue sur <b style={{ color: "#264653" }}> WÜT LIGGUËY</b>
          </h4>
          <h5>Candidatez en quelques clics où que vous soyez !</h5>
        </div>
        <img src="/images/office.gif" alt="" className="gifStyle" />
      </div>
  
    
      {/* implementation des cards */}
      <div>
        
        <h1 style={{ textAlign: "center" }}>
          Trouvez les <span style={{ color: "#264653" }}>campagnes</span>{" "}
          actuellement ouvertes{" "}
        </h1>
        <h6 style={{ textAlign: "center" }}>
          Identifiez la campagne pour laquelle vous souhaitez soumettre votre{" "}
          <br />
          candidature et affichez les détails.
        </h6>
      </div>

      <div className="cardStyle" style={{ width: "18rem" }}>
        <div className="imgStyle">
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/236x/fb/c7/89/fbc78917a6ac6e73cf66907bdcd92c5f.jpg"
          />
        </div>
        <div className="card-body bodyStyle">
          <Card.Title>
            APPEL CANDIDATURE POUR LE POSTE DE DEVELOPPEUR WEB
          </Card.Title>
          <Card.Text className="cardText">
            MERN Stack <br />
            Wordpress <br />
            Java-Angular
          </Card.Text>
          <div className="iconStyle">
           
            <div>
              <WorkIcon />
              informatique
            </div>
            <div>
              <PlaceIcon />
              Dakar
            </div>
            <div>
              <QueryBuilder />
              09/11/2023
            </div>
          </div>
          <Button variant="secondary" className="button" href="/webCandidature">
            En Savoir Plus
          </Button>
        </div>
      </div>

      <div className="cardStyle" style={{ width: "18rem" }}>
        <div className="imgStyle">
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/236x/91/6b/4b/916b4bd44f429ba9d69e3976d778ae2d.jpg"
          />
        </div>
        <div className="card-body bodyStyle">
          <Card.Title>
            APPEL CANDIDATURE POUR LE POSTE DE DEVELOPPEUR MOBILE
          </Card.Title>
          <Card.Text className="cardText">
            Flutter <br />
            React Native <br />
            Java Objet
          </Card.Text>
          <div className="iconStyle">
            <div>
              <WorkIcon />
              informatique
            </div>

            <div>
              <PlaceIcon />
              Dakar
            </div>
            <div>
              <QueryBuilder />
              09/11/2023
            </div>
          </div>
          <Button
            variant="secondary"
            className="button"
            href="/mobileCandidature"
          >
            En Savoir Plus
          </Button>
        </div>
      </div>
      <div className="cardStyle" style={{ width: "18rem" }}>
        <div className="imgStyle">
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/236x/45/00/52/450052c8e40ee1be2cb1edd4311b4429.jpg"
          />
        </div>
        <div className="card-body bodyStyle">
          <Card.Title>APPEL CANDIDATURE POUR LE POSTE DE RH</Card.Title>
          <Card.Text className="cardText">
            Participer et définir la stratégie RH de l’entreprise <br />
            Conseiller les opérationnels <br />
            Mettre en place des projets RH
          </Card.Text>
          <div className="iconStyle">
            <div>
              <WorkIcon />
              ressource humaine
            </div>
            <div>
              <PlaceIcon />
              Dakar
            </div>

            <div>
              <QueryBuilder />
              09/11/2023
            </div>
          </div>
          <Button variant="secondary" className="button" href="/rhCandidature">
            En Savoir Plus
          </Button>
        </div>
      </div>

      {/* implementation du guide d'utilisation de la plateforme */}
      <div className="divStyle">
        <h1 style={{ textAlign: "center" }}>
          Découvrez le{" "}
          <span style={{ color: "#264653" }}>Guide d'utilisation</span> de la
          plateforme{" "}
        </h1>
        <h6 style={{ textAlign: "center" }}>
          Suivez les étapes ci-dessous pour savoir comment démarrer sa
          candidature sur la plateforme WÜT LIGGUËY. <br />
          candidature et affichez les détails.
        </h6>
      </div>

      <div className="divCard">
        <div>
          <Card
            style={{ width: "19rem", height: "36rem" }}
            className="guideStyle"
          >
            <Card.Img variant="top" src="/images/lumiere.png" />
            <Card.Body>
              <Card.Title>Identifier la campagne qui vous intéresse</Card.Title>
              <Card.Text>
                Identifier la campagne qui vous intéresse Trouvez toutes les
                campagnes ouvertes au niveau de la page d'accueil, identifiez
                celle qui vous intéresse puis cliquez sur le bouton En savoir
                plus.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "19rem", height: "36rem" }}>
            <Card.Img variant="top" src="images/reflect.png" />
            <Card.Body>
              <Card.Title>
                Prendre connaissance des termes de la campagne
              </Card.Title>
              <Card.Text>
                Prendre connaissance des termes de la campagne Vérifiez les
                détails de la campagne en lisant la description. Si vous êtes
                intéressé, il suffira de cliquer sur le bouton Soumettre ma
                candidature.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "19rem", height: "36rem" }}>
            <Card.Img variant="top" src="images/join.png" />
            <Card.Body>
              <Card.Title>Soumettre son dossier de candidature</Card.Title>
              <Card.Text>
                Soumettre son dossier de candidature Remplissez le formulaire de
                candidature puis sur la page suivante, renseigner toutes les
                informations manquantes. Si le dossier est complet, cliquez sur
                Soumettre mon dossier
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "19rem", height: "36rem" }}>
            <Card.Img variant="top" src="images/folow.png" />
            <Card.Body>
              <Card.Title>Suivre l'évolution de son dossier</Card.Title>
              <Card.Text>
                {" "}
                Suivre l'évolution de son dossier Vérifiez de temps en temps
                votre dossier et votre boite email pour ne rien rater de
                l'évolution de votre candidature sur la plateforme.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* implementation du footer */}

      <footer>
        <div className="footerStyle">
          <h6>¤ Copyright 2023 GOMYCODE. Tous droits réservés</h6>
          <h6>
            Design by <span style={{ color: "#264653" }}>Mamadou THIAM</span>{" "}
          </h6>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Accueil;
