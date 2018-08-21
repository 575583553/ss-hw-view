import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Arrow } from '../arrow';

export class QuestionBar extends Component {
  render() {
    const {data, idx} = this.props;

    return (
      <div className={this.props.className}>
        <div className="question-name">
          Question <span>{idx + 1}</span>
        </div>
        <div className="result-container">
          Score: <span>0 / 2</span>
        </div>
        <div className="arrow">
          <Arrow></Arrow>
        </div>
      </div>
    );
  }
}

QuestionBar.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  idx: PropTypes.number
};
