import React, { Component } from 'react';
import { Post } from './Post';
import { Comentario } from './Comentario';
import './index.css';
import derecha from './images/derecha.png';
import izquierda from './images/izquierda.png';
import logo from './logo.svg';

export class Home extends Component {
  render() {
    return(
      <div className="row altura">
        <div className="col-lg-2 izquierda"><img src= { izquierda } alt=""/></div>
        <div className="col-lg-6 center">
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Post image={ logo }/>
          <Comentario />
        </div>
        <div className="col-lg-3 derecha"><img alt="" src={ derecha }/></div>
      </div>
    );
  }
}