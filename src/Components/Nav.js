import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Collage_Cooperative_logo from "./Images/Collage_Cooperative_logo.png";

class Nav extends React.Component {
  componentDidMount() {
    //
    //  Add in const M =window.M;
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      // Change options to an open object
      var instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="grey lighten-1 blue-text !important">
            <div className="nav-wrapper">
              <a href="#" className="sidenav-trigger" data-target="slide-out">
                <i className="material-icons">menu</i>
              </a>
              <a className="brand-logo center" href="#">
                <img className="menulogo" src={Collage_Cooperative_logo} />
              </a>
              {/* Make sure to keep nav-mobile in top nav*/}
              <ul
                id="nav-mobile"
                className="nav-mobile right hide-on-med-and-down"
              >
                <li>
                  <a className="homebtn" href="/Home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="overviewtbtn" href="/Overview">
                    2020 Programs
                  </a>
                </li>
                <li>
                  <a className="aboutbtn" href="/About">
                    About
                  </a>
                </li>
                <li>
                  <a className="faqbtn" href="/FAQ">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="contactbtn" href="/Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <ul id="slide-out" className="sidenav !important mobile-menu">
          <li>
            <a className="homebtn" href="/Home">
              Home
            </a>
          </li>
          <li>
            <a className="contactbtn" href="/Overview">
              2020 Programs
            </a>
          </li>
          <li>
            <a className="resumebtn" href="/About">
              About
            </a>
          </li>
          <li>
            <a className="faqbtn" href="/FAQ">
              FAQ
            </a>
          </li>
          <li>
            <a className="contactbtn" href="/Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
