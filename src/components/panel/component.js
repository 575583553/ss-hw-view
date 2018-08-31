import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Activity } from '../activity';

export class Panel extends Component {
  render() {
    const { data, studentId, unitKey, click } = this.props;
    // console.log(data);
    return (
      <div className={this.props.className}>
        <div className="title-container">
          LESSON
          {data.Sequence + 1}
        </div>
        <div className="activity-container">
          {data.activitys.map((item, index) => {
            return (
              <div className="activity" key={index}>
                <Activity
                  data={item}
                  idx={index}
                  unitKey={unitKey}
                  studentId={studentId}
                  click={click}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Panel.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  studentId: PropTypes.string,
  unitKey: PropTypes.string,
  lessonId: PropTypes.string,
  click: PropTypes.func,
};
