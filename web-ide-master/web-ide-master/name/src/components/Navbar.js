import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar  navbar-expand-lg navbar-light bg-white shadow">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active dropdown ml-3 mr-3">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Languages
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/python">
                    {" "}
                    PYTHON
                  </Link>
                  <Link className="dropdown-item" to="/php">
                    {" "}
                    PHP
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Navbar);
