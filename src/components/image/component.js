import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Image extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <img src={this.props.url} alt="" />
      </div>
    );
  }
}

Image.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
};
