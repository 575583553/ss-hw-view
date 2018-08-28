import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Arrow, ProgressBar } from '../index';

export class GroupInfo extends Component {
  render() {
    const { data, idx } = this.props;

    return (
      <div className={this.props.className}>
        <div className="result-container">
          <div className="question-name">Question {idx + 1}</div>
          <div className="progress-bar">
            <ProgressBar progress={data.correctNum / data.totalNum} />
          </div>
          <div className="result-info">
            <span>
              {data.correctNum} / {data.totalNum}{' '}
            </span>
            students are correct
          </div>
        </div>
        <div className="arrow">
          <Arrow />
        </div>
      </div>
    );
  }
}

GroupInfo.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  idx: PropTypes.number,
};
