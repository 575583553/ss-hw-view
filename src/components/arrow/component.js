import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Arrow extends Component {
  render() {
    return <div className={this.props.className} />;
  }
}

Arrow.propTypes = {
  className: PropTypes.string,
};
