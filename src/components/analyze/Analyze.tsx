import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCamera,
  faBalanceScale,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import UploadImage from "./UploadFile";
import "./Analyze.css";

interface IState {
  analyze: boolean;
  loading: boolean;
}

export default class Analyze extends React.PureComponent<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      analyze: false,
      loading: false,
    };
    this.handleClickAnalyze = this.handleClickAnalyze.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.endLoading = this.endLoading.bind(this);
  }

  handleClickAnalyze() {
    this.setState({ analyze: true });
  }

  startLoading() {
    this.setState({ loading: true });
  }

  endLoading() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Analyse de votre véhicule</h1>
          <p className="lead">
            Prennez une ou plusieurs photo du possible dégat détecté sur votre
            véhicule :
          </p>
        </div>

        <UploadImage
          analyze={this.state.analyze}
          onClickAnalyze={this.handleClickAnalyze}
          startLoading={this.startLoading}
          endLoading={this.endLoading}
          loading={this.state.loading}
        />

        {this.state.loading && (
          <div className="container text-center mt-4">
            <div className="loader"></div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )}

        {this.state.analyze && !this.state.loading && (
          <div>
            <h1 className="display-4">Synthèse de l'analyse :</h1>
            <div className="container">
              <div className="card-deck mb-3 text-center">
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">
                      Détection du véhicule
                    </h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">Ok</h1>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 ml-2"
                      size="8x"
                      color="green"
                    />
                  </div>
                </div>

                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">
                      Détection du dommage
                    </h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">Aucun</h1>
                    <FontAwesomeIcon
                      icon={faBalanceScale}
                      className="mr-2 ml-2 mb-2"
                      size="6x"
                      color="orange"
                    />
                    <p>
                      Nous n'avous détecter aucun dommage sur votre véhicule.{" "}
                      <br /> <br /> Si vous êtes sur qu'il y a bien un dommage
                      veuillez repprendre un photo avec une meilleur exposition
                      du dégat à environs 2-3m du véhicule sans utiliser de
                      zoom.
                    </p>
                    <Link to="/analyze">
                      Repprendre la photo
                      <FontAwesomeIcon icon={faCamera} className="mr-2 ml-2" />
                    </Link>
                  </div>
                </div>

                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">
                      Gravité des dommages
                    </h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">Faible</h1>
                    <p>
                      Les dommages sont des dommages matériels léger, qui seront
                      pris en charge par votre assurance à contre partie d'une
                      franchise.
                      <br />
                      <br />
                      Rien de grave vous perdrez simplement un peu de temps,
                      soyez patient.
                    </p>
                  </div>
                </div>

                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">
                      Localisation des dommages
                    </h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-group mb-4">
                      <li className="list-group-item">- Vitre(s)</li>
                      <li className="list-group-item">- Carroserie aile</li>
                    </ul>
                    <p>
                      Les dommages sont détecté au niveau de(s) vitre(s) de
                      votre véhicules.
                    </p>
                    <br />
                  </div>
                </div>
              </div>

              <div className="card-deck mb-3 text-center">
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">
                      Synthèse et conseils :
                    </h4>
                  </div>
                  <div className="card-body">
                    <p>
                      Votre véhicule est bien endommagé au niveau de(s) vitre(s)
                      de manière légère.
                      <br />
                      <br />
                      Estimation des coûts : <b>250 euros</b>
                    </p>
                    <p>
                      Nous vous conseillons de vous orienté vers un service tels
                      que :
                      <br />
                      <br />
                      <a href="https://www.carglass.fr/">
                        https://www.carglass.fr/
                      </a>
                      <br />
                      <br />
                      Joignable au : 09 77 40 19 28
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/home">
              <span className="btn btn-success btn-lg ml-3 mt-3 mb-4">
                <FontAwesomeIcon icon={faImages} className="mr-2 ml-2" />
                Retour à l'accueil
              </span>
            </Link>
          </div>
        )}
        {!this.state.analyze && (
          <div className="blank">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )}
      </div>
    );
  }
}
