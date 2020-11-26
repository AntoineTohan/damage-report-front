/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../ressources/damage-report-icon.png";
import "../App.css";

interface IPropsNavbar {
  view: string;
}
export default class Navbar extends React.PureComponent<IPropsNavbar, {}> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: IPropsNavbar) {
    super(props);
  }
  private renderViewSchedule() {
    if (this.props.view === "profile")
      return (
        <Link to="/home">
          <FontAwesomeIcon icon={faHome} className="mr-2 ml-2"/>
          Accueil
        </Link>
      );
    else
      return (
        <Link to="/profile">
          <FontAwesomeIcon icon={faPortrait} className="mr-2 ml-2" />
          Profile
        </Link>
      );
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-custom text-white">
        <div className="navbar-brand font-weight-bold">
          <div className="float-left">
            <Link to="/home">
              <img src={logo} className="navbar-logo" alt="logo" />
            </Link>
          </div>
          <div className="text-white mt-2">Damage Report</div>
        </div>
        <div className="form-inline">
          <span className="mr-3">
            <strong>user.example@psa-sochaux.com</strong>
          </span>
          {this.renderViewSchedule()}
          <Link to="/">
            <FontAwesomeIcon icon={faPowerOff} className="mr-2 ml-2" />
            Déconnexion
          </Link>
        </div>
      </nav>
    );
  }
}
