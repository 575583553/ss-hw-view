import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Text, StudentInfo } from '../../components';

export class SideBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="group-name-container">
          <Text text="Group View" color="#fff" />
        </div>
        <div className="student-container">
          {this.props.data.map((item) => {
            return <StudentInfo key={item.UserId} data={item} />;
          })}
        </div>
      </div>
    );
  }
}

SideBar.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array
};
