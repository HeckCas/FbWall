import React, { Component } from 'react';
import './index.css';
import like from './images/like.png';
import coment from './images/coment.png';
import share from './images/share.png';

export class Post extends Component {
  render() {
    return(
      <div className="row react-post">
        <div className="card mb-12">
          <div className="card-header bg-transparent">
            <h6 className="titulo-card"> Inglés a la Mexicana</h6>
            <h6> Loprem Ipsum Dolor sit amet</h6>
          </div>
          <div className="card-body">
            <img src={ this.props.image } alt="Card"/>
          </div>
          <div className="card-footer bg-transparent row">
            <div className="col-lg-3"><img alt=" " src= { like } className="like"/></div>
            <div className="col-lg-3"><a href="/"><img alt=" " src= { coment } className="coment"/></a></div>
            <div className="col-lg-6 foot-post"><img alt=" " src= { share } className="share"/></div>
          </div>
        </div>
      </div>
    );
  }
}