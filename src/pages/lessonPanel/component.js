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
      currentLessonId: ''
    };

    this.changeStudentId = this.changeStudentId.bind(this);
    this.changeLessonId = this.changeLessonId.bind(this);
  }

  changeStudentId(id) {
    this.setState({currentStudentId: id});
  }

  changeLessonId(id) {
    this.setState({currentLessonId: id});
  }

  componentDidMount() {
    GetData.getStudentInfo().then(res => {
      this.setState({sudents: res.data, currentStudentId: res.data[0].UserId});
    });

    GetData.getLesson().then(res => {
      this.setState({lessonInfo: res, currentLessonId: res[0].Key});
    });
  }

  render() {
    const {
      sudents,
      lessonInfo,
      currentStudentId,
      currentLessonId }= this.state;

      const state = this.props.location.state;

    return (
      <div className={this.props.className}>
        {lessonInfo.length > 0 && (
          <div className="lesson-contianer">
            <div className="topBar-container">
              <TopBar
              data={lessonInfo}
              state={state}
              click={this.changeLessonId}/>
            </div>
            <div className="main-container">
              <div className="sideBar-container">
                <SideBar
                data={sudents}
                studentId={currentStudentId}
                click={this.changeStudentId}/>
              </div>
              <div className="info-container">
                <Info
                data={lessonInfo}
                studentId={currentStudentId}
                lessonId={currentLessonId}
                currentUnitId={state.key}
                click={this.changeLessonId}/>
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
  location: PropTypes.object
};

