import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Arrow } from '../arrow';

export class StudentInfo extends Component {
  render() {
    const { data, idx, studentId } = this.props;
    console.log(data.studentsAnswer);
    return (
      <div className={this.props.className}>
        <div className="question-name">
          Question <span>{idx + 1}</span>
        </div>
        {data.studentsAnswer ? (
          data.studentsAnswer.map((item) => {
            return (
              item.studentId === studentId && (
                <div className="result-container" key={item.studentId}>
                  Score:{' '}
                  <span
                    className={item.score === item.TotalScore ? 'correct' : ''}
                  >
                    {item.score} / {item.TotalScore}
                  </span>
                </div>
              )
            );
          })
        ) : (
          <div className="result-container">
            Score:{' '}
            <span>
              {data.score} / {data.TotalScore}
            </span>
          </div>
        )}
        <div className="arrow">
          <Arrow />
        </div>
      </div>
    );
  }
}

StudentInfo.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  studentId: PropTypes.string,
  idx: PropTypes.number,
};
