import React from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import carIcon from "../../ressources/car-icon.jpg";
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

  function handleClickUpdateVehicule() {
    Swal.fire({
      title: "Nous avons pu mettre à jour les données de votre véhicule.",
      text: "Vous pouvez les vérifier dans la page : Profil",
      icon: "success",
      showCancelButton: false,
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
            <h3 className="mb-0 mt-3">Avatar</h3>
            <img
              src={carIcon}
              className="avatar img-circle img-thumbnail mb-2 h-75 w-75"
              alt="avatar"
            />
            <input
              type="file"
              className="text-center center-block file-upload"
            />
          </div>
          <hr />
          <h2 className="mb-2 mt-3">Véhicule enregistré :</h2>
          <p className="mb-1 mt-1">
            Informations sur votre véhicule d'après votre plaque
            d'immatriculation.
          </p>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row">Immatriculation :</th>
                <td>VR-205-ZR</td>
              </tr>
              <tr>
                <th scope="row">Marque :</th>
                <td>BMW</td>
              </tr>
              <tr>
                <th scope="row">Molède :</th>
                <td>M3 E30</td>
              </tr>
              <tr>
                <th scope="row">Type :</th>
                <td>Berline coupé</td>
              </tr>
              <tr>
                <th scope="row">Année :</th>
                <td>1990</td>
              </tr>
              <tr>
                <th scope="row">Carburant :</th>
                <td>Essence</td>
              </tr>
              <tr>
                <th scope="row">Puissance :</th>
                <td>238 ch</td>
              </tr>
              <tr>
                <th scope="row">Transmission :</th>
                <td>Propulsion</td>
              </tr>
              <tr>
                <th scope="row">Boite de vitesse :</th>
                <td>Manuelle</td>
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
              C'est ici que vous pourrai modifier à tout moment les informations
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
            <h2 className="mb-0 mt-3">
              Mettre à jour les données de mon véhicule :
            </h2>
            <p className="mb-1 mt-1">
              Entrez votre plaque d'immatriculation, nous nous chargerons de
              retrouver les informations de votre véhicule.
            </p>
            <form>
              <div className="row mt-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control custom-imput"
                    placeholder="VR"
                  />
                </div>
                -
                <div className="col">
                  <input
                    type="text"
                    className="form-control custom-imput"
                    placeholder="205"
                  />
                </div>
                -
                <div className="col">
                  <input
                    type="text"
                    className="form-control custom-imput"
                    placeholder="ZR"
                  />
                </div>
              </div>
            </form>
            <span
              onClick={() => handleClickUpdateVehicule()}
              className="btn btn-success btn-lg mt-3"
            >
              Mettre à jour
            </span>
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
