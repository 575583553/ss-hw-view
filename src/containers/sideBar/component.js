import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Text, StudentInfo } from '../../components';

export class SideBar extends Component {
  render() {
    const {click, studentId, data} = this.props;
    const active = studentId === '-1' ? 'active' : '';

    return (
      <div className={this.props.className}>
        <div className={`group-name-container ${active}`}
          onClick={click.bind(this,'-1')}>
          <Text text="Group View" color="#fff"/>
        </div>
        <div className="student-container">
          {data.map((item) => {
            return <div className={`student ${studentId === item.UserId ? 'active': ''}`} key={item.UserId}
              onClick={click.bind(this,item.UserId)}>
              <StudentInfo data={item}/>
            </div>;
          })}
        </div>
      </div>
    );
  }
}

SideBar.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  studentId: PropTypes.string,
  click: PropTypes.func
};
