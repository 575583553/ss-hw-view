import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Stimulus, Question } from '../../components';

export class Answer extends Component {
  render() {
    const { stimulus, options, answer } = this.props;
    console.log(this.props);

    return (
      <div className={this.props.className}>
        {/* {answer.map((item, idx) => {
          return (
            <div className="option-container" key={idx}>
              <div className="stimulus">
                <Stimulus data={stimulus[idx]} />
              </div>
            </div>
          );
        })} */}
      </div>
    );
  }
}

Answer.propTypes = {
  className: PropTypes.string,
  stimulus: PropTypes.array,
  options: PropTypes.array,
  answers: PropTypes.array,
};
