import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StudentItem } from '../index';

export class Tab extends Component {
  render() {
    const { students, answer, studentId } = this.props;
    console.log(answer);
    return (
      <div className={this.props.className}>
        <div className="student-container" />
        <div className="tab-container">
          <div className="studentInfo">
            <div className="student">
              {students.map((item) => {
                return (
                  item.UserId === studentId && (
                    <StudentItem data={item} key={studentId} />
                  )
                );
              })}
            </div>
            <div className="score-container">
              {answer &&
                answer.map((item) => {
                  return (
                    item.studentId === studentId && (
                      <div className="score" key={studentId}>
                        {item.score} / {item.TotalScore}
                      </div>
                    )
                  );
                })}
            </div>
          </div>
          <div className="tab">
            <div className="task active">Task</div>
            <div className="answers">Answers</div>
          </div>
        </div>
      </div>
    );
  }
}

Tab.propTypes = {
  className: PropTypes.string,
  students: PropTypes.array,
  answer: PropTypes.array,
  studentId: PropTypes.string,
};
