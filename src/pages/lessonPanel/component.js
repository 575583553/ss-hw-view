import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Http from '../../services/http';
import { TopBar, SideBar, Info } from '../../containers';

export class LessonPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sudents: [],
    };
  }

  componentDidMount() {
    Http.get({ url: 'http://10.128.36.152:8080/studentsInfo' }).then((res) => {
      this.setState({ sudents: res.data });
    });
  }

  render() {
    const lessonInfo = this.context.lessonInfo;
    const state = this.props.location.state;

    return (
      <div className={this.props.className}>
        {lessonInfo.length > 0 && (
          <div className="lesson-contianer">
            <div className="topBar-container">
              <TopBar data={lessonInfo} state={state}/>
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

LessonPanel.propTypes = {
  className: PropTypes.string,
  location: PropTypes.object
};

