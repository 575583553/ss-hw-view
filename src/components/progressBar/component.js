import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProgressBar extends Component {

  constructor(props){
    super(props);
    this.state ={
      ready: false
    };

    setTimeout(() => {
      this.setState({ready: true});
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className={`progress-bar ${this.state.ready && 'in'}`}></div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  progress: PropTypes.number
};
