import React from "react";
import Emoji from "react-emoji-render";
import '../App.css'

export default class Footer extends React.PureComponent<{}, {}> {
  render() {
    return (
      <nav className="navbar relative-bottom navbar-light bg-custom text-white">
        <div className="text-center w-100">
          <div>© 2020-2021 Damage Report,</div>
          <Emoji text="Made with ❤️ by dev team" />
        </div>
      </nav>
    );
  }
}
