import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCamera,
  faBalanceScale,
  faHome,
  faTimesCircle,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { AxiosResponse } from "axios";
import UploadImage from "./UploadFile";
import "./Analyze.css";
import piece1 from "../../ressources/piece1.png";
import piece2 from "../../ressources/piece2.png";

interface IState {
  analyze: boolean;
  loading: boolean;
  response: AxiosResponse<any> | null;
}

export default class Analyze extends React.PureComponent<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      analyze: false,
      loading: false,
      response: null,
    };
    this.handleClickAnalyze = this.handleClickAnalyze.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.endLoading = this.endLoading.bind(this);
    this.setResponse = this.setResponse.bind(this);
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

  setResponse(response: AxiosResponse<any>) {
    this.setState({ response });
  }

  render() {
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Analyse d'un véhicule</h1>
          <p className="lead">Prenez une ou plusieurs photo(s) du véhicule :</p>
        </div>

        <UploadImage
          analyze={this.state.analyze}
          onClickAnalyze={this.handleClickAnalyze}
          startLoading={this.startLoading}
          endLoading={this.endLoading}
          loading={this.state.loading}
          setResponse={this.setResponse}
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

        {this.state.analyze && this.state.response && !this.state.loading && (
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
                    <h1 className="card-title pricing-card-title">
                      {this.state.response.data.car.class === "car" ? (
                        <span>Ok</span>
                      ) : (
                        <span>KO</span>
                      )}
                    </h1>
                    {this.state.response.data.car.class === "car" ? (
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="mr-2 ml-2"
                        size="8x"
                        color="green"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="mr-2 ml-2"
                        size="8x"
                        color="red"
                      />
                    )}
                    {this.state.response.data.car.class !== "car" && (
                      <p className="mt-4">
                        Aucune voiture détecté sur votre photo. <br /> <br />{" "}
                        Si vous êtes sur qu'il y a le véhicule sur la photo
                        veuillez reprendre une photo avec une meilleure
                        exposition à environs 2-3m du véhicule sans utiliser de
                        zoom.
                      </p>
                    )}
                    <h4 className="mt-4 mb-4">
                      Précision:{" "}
                      {Math.round(
                        this.state.response.data.car.accuracy * 100 * 10
                      ) / 10}{" "}
                      %
                    </h4>
                  </div>
                </div>

                {this.state.response.data.car.class === "car" && (
                  <div className="card mb-4 box-shadow">
                    <div className="card-header">
                      <h4 className="my-0 font-weight-normal">
                        Détection du dommage
                      </h4>
                    </div>
                    <div className="card-body">
                      {this.state.response.data.damage.class === "00-damage" ? (
                        <h2 className="card-title pricing-card-title">
                          Endommagé
                        </h2>
                      ) : (
                        <h1 className="card-title pricing-card-title">Aucun</h1>
                      )}

                      {this.state.response.data.damage.class === "00-damage" ? (
                        <FontAwesomeIcon
                          icon={faBalanceScale}
                          className="mr-2 ml-2 mb-2"
                          size="6x"
                          color="orange"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faCar}
                          className="mr-2 ml-2 mb-2"
                          size="6x"
                          color="green"
                        />
                      )}
                      {this.state.response.data.damage.class === "00-damage" ? (
                        <p>
                          Nous avons bien détecté un ou des dommages sur le
                          véhicule.{" "}
                        </p>
                      ) : (
                        <p>
                          Aucuns dommage détectés sur votre véhicule. <br />{" "}
                          <br /> Si vous êtes sur qu'il y a bien un dommage
                          veuillez reprendre une photo avec une meilleure
                          exposition du dégat à environs 2-3m du véhicule sans
                          utiliser de zoom.
                        </p>
                      )}

                      <h4 className="mt-4 mb-4">
                        Précision:{" "}
                        {Math.round(
                          this.state.response.data.damage.accuracy * 100 * 10
                        ) / 10}{" "}
                        %
                      </h4>

                      {this.state.response.data.damage.class !==
                        "00-damage" && (
                        <button
                          className="btn"
                          // eslint-disable-next-line no-restricted-globals
                          onClick={() => location.reload()}
                        >
                          Reprendre la photo
                          <FontAwesomeIcon
                            icon={faCamera}
                            className="mr-2 ml-2"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {this.state.response.data.damage.class === "00-damage" &&
                  this.state.response.data.car.class === "car" && (
                    <div className="card mb-4 box-shadow">
                      <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                          Localisation des dommages
                        </h4>
                      </div>
                      <div className="card-body">
                        <ul className="list-group mb-4">
                          <li className="list-group-item">- Pare choc avant</li>
                          <li className="list-group-item">- Carroserie aile</li>
                        </ul>
                        <p>
                          Les dommages sont détectés au niveau du pare choc avant
                          du véhicule.
                        </p>
                        <br />
                      </div>
                    </div>
                  )}

                {this.state.response.data.damage.class === "00-damage" &&
                  this.state.response.data.car.class === "car" && (
                    <div className="card mb-4 box-shadow">
                      <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                          Gravité des dommages
                        </h4>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title pricing-card-title">
                          Faible
                        </h1>
                        <p>Les dommages sont des dommages matériels léger.</p>
                      </div>
                    </div>
                  )}
              </div>

              {this.state.response.data.damage.class === "00-damage" &&
                this.state.response.data.car.class === "car" && (
                  <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                      <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                          Synthèse et conseils :
                        </h4>
                      </div>
                      <div className="card-body">
                        <p>
                          Le véhicule est bien endommagé au niveau du pare choc
                          avant et l'aile droite de manière légère.
                          <br />
                          <br />
                          Estimation des coûts en pièces détachées :{" "}
                          <b>{Math.floor(Math.random() * 1159) + 127} euros</b>
                        </p>
                        <h4>Liste de pièces nécéssaire pour la réparation :</h4>
                        <ul className="list-group">
                          <li className="list-group-item">
                            1 -{" "}
                            <img
                              src={piece1}
                              alt=""
                              height="180"
                              className="mb-2"
                            />
                            Pare choc avant
                          </li>
                          <li className="list-group-item">
                            2 -{" "}
                            <img
                              src={piece2}
                              alt=""
                              height="180"
                              className="mb-2"
                            />
                            Phare avant droit
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
            </div>
            <button
              className="btn btn-primary btn-lg ml-3 mt-3 mb-4"
              // eslint-disable-next-line no-restricted-globals
              onClick={() => location.reload()}
            >
              Refaire un analyse
              <FontAwesomeIcon icon={faCamera} className="mr-2 ml-2" />
            </button>
            <Link to="/home">
              <span className="btn btn-primary btn-lg ml-3 mt-3 mb-4">
                <FontAwesomeIcon icon={faHome} className="mr-2 ml-2" />
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
