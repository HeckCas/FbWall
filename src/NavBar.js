import React, { Component } from 'react';
import './index.css';
import iconsrait from './images/iconsrait.png'

export class NavBar extends Component {
  state = {};
  render() {
    return(
      <div className="reactnavBar">
        <nav className="navbar" style={{ backgroundColor: '#4267B2' }}>
          <span className="navbar-brand"><i className="fab fa-facebook-square"></i></span>
          <form className="form" >
          <div className="searchy"><i className="fas fa-search"></i></div>
            <input className="form-control align-self-start" type="search" placeholder="Search" aria-label="Search" ></input>
          </form>
        <div className="navbar-iconos align-self-right">
          <img className="profile_photo" src={ this.props.profilePhoto } alt="profile_photo"/>
          <span className="text-name-navbar nav-item"> Iván </span>
          <span className="pipe"> | </span>
          <span className="text-name-navbar"> Inicio </span>
          <span className="pipe"> | </span>
          <img src={ iconsrait } alt="iconos-navbar"/>
        </div>
        </nav>
      </div>
    );
  }
}