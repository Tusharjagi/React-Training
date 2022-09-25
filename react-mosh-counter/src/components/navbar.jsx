import React, { Component } from "react";

// stateless function components

const NavBar = ({totalCounters}) => {
    console.log("NavBar Rendered")
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-md">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge bg-secondary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {

//   }
// }

export default NavBar;
