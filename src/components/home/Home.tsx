import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import imageEntreprise2 from "../../ressources/entreprise-2.png";
import imageEntreprise from "../../ressources/entreprise-image.jpg";
import "./Home.css";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">
              Votre gestionnaire qualité de parc automobile
            </h1>
            <p className="lead font-weight-normal">
              Damage Report met en place une solution permettant de suivre
              quotidiennement la qualité de la carroserie des véhicules de votre
              parc automobile.
              <br />
              <br />
              Damage Report permettra un suivi précis et un gain de productivité
              pour les employés. De plus, il vous permettra d'éviter des erreurs
              qualités dans la chaine de production / vente afin d'améliorer la
              satisfaction client.
            </p>
            <Link to="/analyze" className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faCamera} className="mr-2 ml-2" />
              Commencer une expertise !
            </Link>
          </div>
          <div className="product-device box-shadow d-none d-md-block"></div>
          <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-dark mr-md-3 text-center text-white overflow-hidden mt-4 mb-4">
            <div className="my-3 p-3">
              <h2 className="display-5">
                Une solution destinée à des grands groupes industriels
              </h2>
              <p className="lead ">
                Damage Report propose une solution pour aider les entreprises à
                suivre l'état de leurs véhicules sur un parc automobile.
                <br />
                <br />
                Avec un scan photo du véhicule vous pourrez : vérifier l'intégrité
                de la carroserie du véhicule, avoir sa position au sein de votre
                parc, avoir une estimation du prix de réparation avec la listes des pièces
                nécessaires.
              </p>
            </div>
            <img src={imageEntreprise} alt="" height="339" className="mb-2" />
            <img
              src={imageEntreprise2}
              alt=""
              height="339"
              className="mb-2 mr-2 ml-2"
            />
          </div>
        </div>
      </div>
    );
  }
}
