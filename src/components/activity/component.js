import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StudentInfo, GroupInfo } from '../index';

export class Activity extends Component {
  render() {
    const {data, idx, studentId} = this.props;

    return(
      <div className={this.props.className}>
        <div className='title-container'>
          ACTIVITY {idx + 1}
        </div>
        <div className="questions-container">
        {
          data.questions.map((item, index) => {
            return <div className="question" key={index}>
              {studentId !== '-1' ?
              <StudentInfo data={item}
              idx={index}
              studentId={studentId} />
              :
              <GroupInfo data={item}
              idx={index}/>}
            </div>;
          })
        }
        </div>
      </div>
    );
  }
}

Activity.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  studentId: PropTypes.string,
  idx: PropTypes.number
};
