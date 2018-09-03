import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Stimulus, Question } from '../../components';

export class Answer extends Component {
  render() {
    const { stimulus, options, answer, studentsAnswer, studentId } = this.props;
    console.log(this.props);

    return (
      <div className={this.props.className}>
        {answer &&
          answer.map((item, idx) => {
            return (
              <div className="option-container" key={idx}>
                <div className="stimulus">
                  <Stimulus data={stimulus[idx]} size="18px" align="left" />
                </div>
                <div className="lab">corretc answer</div>
                <div className="info-container">
                  {item.map((info, index) => {
                    return (
                      <Question
                        key={index}
                        index={idx}
                        answer={options[info]}
                        options={options}
                        studentsAnswer={studentsAnswer}
                        studentId={studentId}
                      />
                    );
                  })}
                </div>
                <div className="lab">student answer</div>
              </div>
            );
          })}
      </div>
    );
  }
}

Answer.propTypes = {
  className: PropTypes.string,
  stimulus: PropTypes.array,
  options: PropTypes.array,
  answer: PropTypes.array,
  studentsAnswer: PropTypes.array,
  studentId: PropTypes.string,
};
