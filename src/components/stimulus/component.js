import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Audio, Image, Text } from '../index';

export class Stimulus extends Component {
  render() {
    const { image, audio, text} = this.props.data;

    return (
      <div className={this.props.className}>
        {text && (
          <div className="title-container">
            <Text text={text} align={this.props.align}/>
          </div>
        )}
        <div className="stimulus-bottom">
          {image && (
            <div className="image-container">
              <Image url={image} />
            </div>
          )}
          {audio && (
            <div className="audio-container">
              <Audio src={audio} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

Stimulus.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  align: PropTypes.string
};
