import React, { Component } from 'react';
import './index.css';

export class Comentario extends Component {
  render() {
    return(
      <div className="Comentario">
        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <input type="text" className="form-control input-comentario" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            <a className="link-comentario">ver más Comentarios</a>
          </div>
        </div>
      </div>
    );
  }
}