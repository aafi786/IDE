import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './x.css'


const SmallSquare = ({ onClick, ...rest}) => (
  <div className="square2" onClick={onClick} {...rest} >
    <div className="card shadow" >
  <img className="card-img-top" src="http://dtutimes.dtu.ac.in/img/society/iosd/1.png" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title2</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Details</a>
  </div>
</div>
    </div>
);

const BigSquare = ({ onClick, ...rest }) => (
  <div className="full-screen-square2" onClick={onClick} {...rest}>
     <div className="card shadow">
     <img className="card-img-top" src="https://iosd.tech/img/svg/student.svg" alt="Card image cap"/>
     <div className="card-body">
    <h5 className="card-title">Details</h5>
    <p className="card-text">wWOOWOWOWOWOWOWOW</p>
    <a href="#" class="btn btn-primary">WOWOWOWOWOWOWO</a>
  </div>
     </div>
    </div>
);

export default class FlipperCard2 extends Component {
  state = { fullScreen: false };

  toggleFullScreen = () => {
    this.setState(prevState => ({
      fullScreen: !prevState.fullScreen
    }));
  };

  render() {
    return (
      <Flipper flipKey={this.state.fullScreen}>
        {this.state.fullScreen ? (
          <Flipped flipId="square">
            <BigSquare onClick={this.toggleFullScreen} />
          </Flipped>
        ) : (
          <Flipped flipId="square">
            <SmallSquare onClick={this.toggleFullScreen} />
          </Flipped>
        )}
      </Flipper>
    );
  }
}
