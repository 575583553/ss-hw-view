import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Audio, Image, Text} from '../index';

export class Stimulus extends Component {
  render() {
    const { image, audio, title } = this.props.data;

    return (
      <div className={this.props.className}>
        {title && (
          <div className="title-container">
            <Text text={title} />
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
  data: PropTypes.object
};


