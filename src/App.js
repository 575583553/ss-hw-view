import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { GetData } from './services';
import { Unit, LessonPanel, ResultPanel } from './pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: [],
      lessonInfo: [],
      studentsAnswer: [],
      currentUnitId: '',
      currentStudentId: '',
      currentLessonId: ''
    };

    this.getData = this.getData.bind(this);
    this.changeStudentId = this.changeStudentId.bind(this);
    this.changeLessonId = this.changeLessonId.bind(this);
  }

  changeStudentId(id) {
    this.setState({currentStudentId: id});
  }

  changeLessonId(id) {
    this.setState({currentLessonId: id});
  }

  getData() {
    GetData.getUnit().then(res => {
      this.setState({unit: res, currentUnitId: res[0].Key});
    });

    GetData.getLesson().then(res => {
      this.setState({lessonInfo: res, currentLessonId: res[0].Key});
    });

    GetData.getStudentAnswer().then(res => {
      this.setState({studentsAnswer: res, currentStudentId: res[0].studentId});
    });
  }

  getChildContext() {
    return {
    ...this.state,
    changeStudentId: this.changeStudentId,
    changeLessonId: this.changeLessonId};
  }


  componentDidMount() {
    // if(window.location.search.indexOf('token') === -1) {
    //   alert('error')
    // }
    this.getData();
  }

  componentDidCatch() {
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Unit} />
          <Route path="/lesson" component={LessonPanel} />
          <Route path="/result" component={ResultPanel} />
          {/* when router error jump to home page*/}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    );
  }
}

App.childContextTypes = {
  unit: PropTypes.array,
  lessonInfo: PropTypes.array,
  studentsAnswer: PropTypes.array,
  currentUnitId: PropTypes.string,
  currentStudentId: PropTypes.string,
  currentLessonId: PropTypes.string,
  changeStudentId: PropTypes.func,
  changeLessonId: PropTypes.func
};

export default App;
