import React from "react";
import { Link } from "react-router-dom";
import logo from "../../ressources/damage-report-logo-xl.png";
import "./Login.css";

export default class Login extends React.PureComponent<{}, {}> {
  render() {
    return (
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-bold">Damage Report</h1>
        <img className="mb-4" src={logo} alt="" width="224" height="224" />
        <h1 className="h3 mb-3 font-weight-normal">Connexion</h1>
        <label className="sr-only">Adresse email</label>
        <input
          type="email"
          id="inputEmail"
          className="form-control mt-2"
          placeholder="Adresse email"
        />
        <label className="sr-only">Mot de passe</label>
        <input
          type="password"
          id="inputPassword"
          className="form-control mt-2"
          placeholder="Mot de passe"
        />
        <Link to="/home">
          <button className="btn btn-lg btn-primary btn-block mt-2" type="submit">
            Se connecter
          </button>
        </Link>
        <span className="left">
          <Link to="/register">S'inscrire</Link>
        </span>
        <span className="right">
          <Link to="/forgot-password">Mot de passe oublié?</Link>
        </span>
        <p className="mt-5 mb-3 text-muted">© 2020-2021 Damage Report</p>
      </form>
    );
  }
}
