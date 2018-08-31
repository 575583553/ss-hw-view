import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text, Tab, Answer } from '../../components';

export class Page extends Component {
  render() {
    const {studentId, students, data} = this.props;
    const {
      activityIdx,
      lessonIdx,
      questionIdx,
      options,
      answers,
      stimulus,
      studentsAnswer,
    } = data;


    const title = `LESSON ${lessonIdx + 1} - Activity ${activityIdx +
      1}, Question ${questionIdx + 1}`;

    return (
      <div className={this.props.className}>
        <div className="title-container">
          <Text text={title} />
        </div>
        <div className="main-container">
          <Tab students={students} answer={studentsAnswer} studentId={studentId}></Tab>
          <div className="answer-container">
            <Answer answer={answers} options={options} stimulus={stimulus}></Answer>
          </div>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  students: PropTypes.array,
  studentId: PropTypes.string
};
