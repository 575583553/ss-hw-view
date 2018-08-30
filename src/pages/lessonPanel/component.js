import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { GetData } from '../../services';
import { TopBar, SideBar, Info } from '../../containers';

export class LessonPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sudents: [],
      lessonInfo: [],
      currentStudentId: '',
      currentLessonId: '',
    };

    this.changeStudentId = this.changeStudentId.bind(this);
    this.changeLessonId = this.changeLessonId.bind(this);
  }

  changeStudentId(id) {
    this.setState({ currentStudentId: id });
  }

  changeLessonId(id) {
    this.setState({ currentLessonId: id });
  }

  async componentDidMount() {
    const lessons = await GetData.getLesson();
    const studentsInfo = await GetData.getStudentInfo();
    this.setState({
      lessonInfo: lessons,
      currentLessonId: lessons[0].Key,
      sudents: studentsInfo,
      currentStudentId: studentsInfo[0].UserId,
    });
  }

  render() {
    const {
      sudents,
      lessonInfo,
      currentStudentId,
      currentLessonId,
    } = this.state;
    const state = this.props.location.state;

    return (
      <div className={this.props.className}>
        {lessonInfo.length > 0 && (
          <div className="lesson-contianer">
            <div className="topBar-container">
              <TopBar
                data={lessonInfo}
                state={state}
                click={this.changeLessonId}
              />
            </div>
            <div className="main-container">
              <div className="sideBar-container">
                <SideBar
                  data={sudents}
                  studentId={currentStudentId}
                  click={this.changeStudentId}
                />
              </div>
              <div className="info-container">
                <Info
                  data={lessonInfo}
                  studentId={currentStudentId}
                  lessonId={currentLessonId}
                  currentUnitId={state.key}
                  click={this.changeLessonId}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

LessonPanel.propTypes = {
  className: PropTypes.string,
  location: PropTypes.object,
};
