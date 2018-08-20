import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Stimulus } from '../stimulus';

export class Option extends Component {
  render() {
    const {data, showResult, num} = this.props;
    const inCorrect = data.isAnswer === 'false' ? 'inCorrect' : '';
    const resultText = data.isAnswer === 'true' ? 'correct' : 'incorrect';

    return (
      <div className={this.props.className}>
        <div className={`option ${inCorrect}`}>
          <Stimulus data={this.props.data} />
        </div>
        {
          showResult &&
          <div className="option-result">
            {num} student {resultText}
          </div>
        }
      </div>
    );
  }
}

Option.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  showResult: PropTypes.bool,
  num: PropTypes.number
};
