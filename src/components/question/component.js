import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Option, Stimulus } from '../index';

export class Question extends Component {
  render() {
    const { answer, options, studentsAnswer, studentId, index } = this.props;

    return (
      <div className={this.props.className}>
        <div className="info-item">
          <div className="correct-answer">
            <Stimulus data={answer} size="14px" />
          </div>
          <div className="student-answer">
            {studentsAnswer ? (
              studentsAnswer.map((student) => {
                return (
                  student.studentId === studentId && (
                    <Option
                      key={studentId}
                      options={options}
                      data={student.optionSelection}
                      index={index}
                      correct={student.TotalScore === student.score}
                    />
                  )
                );
              })
            ) : (
              <div>miss</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  className: PropTypes.string,
  answer: PropTypes.object,
  options: PropTypes.array,
  studentsAnswer: PropTypes.array,
  studentId: PropTypes.string,
  index: PropTypes.number,
};
