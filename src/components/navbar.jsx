import React, { Component } from 'react';

//this class does not have any state or helper methods
//consvert this component to Stateless Funtional Components
//since it is a functon we need to remove `this` by taking `props` as argument
const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  )
}

export default NavBar;