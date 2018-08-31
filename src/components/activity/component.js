import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StudentInfo, GroupInfo } from '../index';

export class Activity extends Component {
  render() {
    const { data, idx, studentId, unitKey } = this.props;
    const location = {
      pathname: '/result',
      state: { studentId, unitKey },
    };

    return (
      <div className={this.props.className}>
        <div className="title-container">ACTIVITY {idx + 1}</div>
        <div className="questions-container">
          {data.questions.map((item, index) => {
            return (
              <Link
                to={{
                  pathname: '/result',
                  state: { studentId, unitKey, questionKey: item.questionKey },
                }}
                className="question"
                key={index}
              >
                {studentId !== '-1' ? (
                  <StudentInfo data={item} idx={index} studentId={studentId} />
                ) : (
                  <GroupInfo data={item} idx={index} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

Activity.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  studentId: PropTypes.string,
  unitKey: PropTypes.string,
  idx: PropTypes.number,
};
