import React, { Component } from 'react';

import { Title } from '../../components/title';
import { StudentInfo } from '../studentInfo';

export class SideBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="group-name-container">
          <Title text="Group View" color="#fff" />
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
