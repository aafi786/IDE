import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

const SmallSquare = ({ onClick, ...rest}) => (
  <div className="square" onClick={onClick} {...rest} >bbbbbbbbbbbbbbb</div>
);

const BigSquare = ({ onClick, ...rest }) => (
  <div className="full-screen-square" onClick={onClick} {...rest}>aaaaaaaaaaaaaa</div>
);

export default class Flipper2 extends Component {
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
