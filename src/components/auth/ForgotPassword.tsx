import React from "react";
import { useHistory, Link } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../ressources/damage-report-logo-xl.png";

export default function ForgotPassword() {
  const history = useHistory();
  function handleClickForgot() {
    Swal.fire({
      title: "Réinitialisation mot de passe",
      icon: "success",
      text:
        "Damage Report vous a envoyé un mail avec toutes les informations pour réinitialiser votre mot de passe",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.value) {
        history.push("/");
      }
    });
  }
  return (
    <form className="form-signin">
      <h1 className="h3 mb-3 font-weight-bold">Damage Report</h1>
      <img className="mb-4" src={logo} alt="" width="224" height="224" />
      <h1 className="h3 mb-3 font-weight-normal">Mot de passe oublié?</h1>
      <label className="sr-only">Adresse email</label>
      <input
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Adresse email"
      />
      <span className="mt-3">
        <span
          onClick={() => handleClickForgot()}
          className="btn btn-lg btn-primary btn-block mt-3"
        >
          Envoie de email
        </span>
      </span>
      <Link to="/">S'inscrire</Link>
      <p className="mt-5 mb-3 text-muted">© 2020-2021 damage report</p>
    </form>
  );
}
