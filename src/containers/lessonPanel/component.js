import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Http from '../../services/http';
import { TopBar } from '../topBar';
import { SideBar } from '../sideBar';
import { Info } from '../info';

export class LessonPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sudents: [],
    };
    console.log(this.props.location.state);
    console.log(this);
  }

  componentWillMount() {
    Http.get({ url: 'http://10.128.36.152:8080/lessonInfo' }).then((res) => {
      this.setState({ data: res.data });
    });
    Http.get({ url: 'http://10.128.36.152:8080/studentsInfo' }).then((res) => {
      this.setState({ sudents: res.data });
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.state.data.length > 0 && (
          <div className="lesson-contianer">
            <div className="topBar-container">
              <TopBar data={this.state.data[0].lessons} />
            </div>
            <div className="main-container">
              <div className="sideBar-container">
                <SideBar data={this.state.sudents} />
              </div>
              <div className="info-container">
                <Info />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

LessonPanel.contextTypes = {
  lessonInfo: PropTypes.array
};
