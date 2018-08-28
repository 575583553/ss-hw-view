import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Stimulus, Question } from '../../components';

export class Answer extends Component {
  render() {
    const { stimulus, options } = this.props.data;

    return (
      <div className={this.props.className}>
        <div className="stimulus-container">
          <Stimulus data={stimulus} size="16px" />
        </div>
        <div className="question-container">
          <div className="question-info">{this.props.data.title}</div>
          {options.map((option, index) => {
            return <Question key={index} data={option} />;
          })}
        </div>
      </div>
    );
  }
}

Answer.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
};
