import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { GetData } from '../../services';
import { Arrow } from '../../components';
import { Page } from '../../containers';

export class ResultPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      students: []
    };
  }

  async componentDidMount() {
    const currentUnitKey = this.props.location.state.unitKey;
    const result = await GetData.getResult();
    const students = await GetData.getStudentInfo();

    const questions = result.filter((item) => {
      return currentUnitKey === item.unitKey;
    })[0];
    this.setState({ result: questions, students, });
  }

  render() {
    const { studentId, questionKey } = this.props.location.state;
    const questions = this.state.result.questions;
    const students = this.state.students;

    return (
      <div className={this.props.className}>
        <div className="next-icon icon">
          <Arrow />
        </div>
        <div className="prev-icon icon">
          <Arrow direction="left" />
        </div>
        <div className="main-container">
          {questions &&
            questions.map((item, idx) => {
              return (
                item.questionKey === questionKey && (
                  <Page data={item} students={students} key={idx} studentId={studentId} />
                )
              );
            })}
        </div>
      </div>
    );
  }
}

ResultPanel.propTypes = {
  className: PropTypes.string,
  location: PropTypes.object,
};
