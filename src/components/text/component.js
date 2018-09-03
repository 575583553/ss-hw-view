import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Text extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.text.replace(/<[^>]+>/g, '')}
      </div>
    );
  }
}

Text.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};
