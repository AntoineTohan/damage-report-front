import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import imageParticulier from "../../ressources/particulier-image.jpg";
import imageEntreprise from "../../ressources/entreprise-image.jpg";
import "./Home.css";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">
              Votre véhicule est accidenté ?
            </h1>
            <p className="lead font-weight-normal">
              Pas de panique, pas de problème avec Damage Report votre conseillé
              carrosier personnel.
              <br />
              <br />
              Prennez en photo votre véhicule afin d'obtenir votre expertise
              rapidement.
            </p>
            <Link to="/analyze" className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faCamera} className="mr-2 ml-2" />
              Commencer mon expertise !
            </Link>
          </div>
          <div className="product-device box-shadow d-none d-md-block"></div>
          <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-dark mr-md-3 text-center text-white overflow-hidden mt-4 mb-4">
            <div className="my-3 py-3">
              <h2 className="display-5">Particulier</h2>
              <p className="lead">
                Damage Report propose une solution pour aider les particuliers à
                chiffre les dommages d'un véhicule et conseillé des garage qui
                propose des prestations de réparation adaptées.
              </p>
            </div>
            <img src={imageParticulier} alt="" />
          </div>
          <div className="bg-dark mr-md-3 text-center text-white overflow-hidden mt-4 mb-4">
            <div className="my-3 p-3">
              <h2 className="display-5">Entreprise</h2>
              <p className="lead ">
                Damage Report propose une solution pour aider les entreprises à
                suivre l'état de leur véhicule à chaque sortie. Avec un scan en
                6 photos du véhicule vous-pourrez comparer l'état du véhicule
                avec un état précedent.
              </p>
            </div>
            <img src={imageEntreprise} alt="" height="339" className="mb-2" />
          </div>
        </div>
      </div>
    );
  }
}
