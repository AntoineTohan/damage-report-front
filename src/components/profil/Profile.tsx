import React from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import carIcon from "../../ressources/car-icon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";

export default function Profile() {
  const history = useHistory();
  function handleClickUpdate() {
    Swal.fire({
      title: "Vos données sont mise à jours !",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.value) {
        history.push("/profile");
      }
    });
  }
  function handleClickDeleteProfil() {
    Swal.fire({
      title:
        "Êtes vous sur de vouloir supprimer votre compte et toutes vos données héberger chez Damage Report ? ",
      icon: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "Oui !",
      cancelButtonText: "Non surtout pas !",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.value) {
        history.push("/profile");
      }
    });
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 mb-2">
          <div className="text-center mt-3">
            <h3 className="mb-0 mt-3">Dernière photo :</h3>
            <img
              src={carIcon}
              className="avatar img-circle img-thumbnail mb-2 h-75 w-75"
              alt="avatar"
            />
          </div>
          <hr />
          <h2 className="mb-2 mt-3">Informations sur votre utilisation :</h2>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row">Nombre de véhicules scannés aujourd'hui :</th>
                <td>240</td>
              </tr>
              <tr>
                <th scope="row">Temps de traitement :</th>
                <td>15 min 34 s</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
        </div>

        <div className="col-sm-9 mb-3">
          <div id="profile">
            <h2 className="mb-0 mt-3">Profil</h2>
            <hr />
            <p className="mb-1 mt-1">
              Modifier à tout moment les informations
              relative à votre compte Damage Report.
            </p>
            <form>
              <div className="row">
                <div className="col mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nom"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Prénom"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mot de passe"
                  />
                </div>
                <div className="col">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirmer mot de passe"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Adresse email"
                  />
                </div>
              </div>
            </form>
            <span
              onClick={() => handleClickUpdate()}
              className="btn btn-success btn-lg mt-3"
            >
              Mettre à jour
            </span>

            <span
              onClick={() => handleClickDeleteProfil()}
              className="btn btn-danger btn-lg ml-3 mt-3"
            >
              Supprimer mon compte et mes données
            </span>
          </div>

          <hr className="mb-4 mt-4" />

          <div id="vehicule">
            <h2 className="mb-0 mt-3">Listes de véhicules scannés :</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Numéros</th>
                  <th scope="col">Dommage</th>
                  <th scope="col">Estimation (euros)</th>
                  <th scope="col">Nombre de pièces à changer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">3409</th>
                  <td>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 ml-2"
                      size="1x"
                      color="green"
                    />
                  </td>
                  <td>350</td>
                  <td>2</td>
                </tr>
                <tr>
                  <th scope="row">3410</th>
                  <td>
                    <FontAwesomeIcon
                      icon={faTimesCircle}
                      className="mr-2 ml-2"
                      size="1x"
                      color="red"
                    />
                  </td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <th scope="row">3234</th>
                  <td>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 ml-2"
                      size="1x"
                      color="green"
                    />
                  </td>
                  <td>230</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">3235</th>
                  <td>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 ml-2"
                      size="1x"
                      color="green"
                    />
                  </td>
                  <td>750</td>
                  <td>3</td>
                </tr>
                <tr>
                  <th scope="row">2398</th>
                  <td>
                    {" "}
                    <FontAwesomeIcon
                      icon={faTimesCircle}
                      className="mr-2 ml-2"
                      size="1x"
                      color="red"
                    />
                  </td>
                  <td>O</td>
                  <td>0</td>
                </tr>
                <tr>
                  <th scope="row">4509</th>
                  <td>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 ml-2"
                      size="1x"
                      color="green"
                    />
                  </td>
                  <td>950</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <br />
            <br />
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
