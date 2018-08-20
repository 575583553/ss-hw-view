import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import GetData from './services/getData';
import { Unit } from './pages/unit';
import { LessonPanel } from './pages/lessonPanel';
import { ResultPanel } from './pages/resultPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: [],
      lessonInfo: []
    };
  }

  getChildContext() {
    return {
      unit: this.state.unit,
      lessonInfo: this.state.lessonInfo
    };
  }

  componentDidMount() {
    GetData.getUnit()
    .then(res => {
      this.setState({unit: res});
    });

    GetData.getLesson()
    .then(res => {
      this.setState({lessonInfo: res});
    });
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
  lessonInfo: PropTypes.array
};

export default App;
