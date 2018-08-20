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
      lessonInfo: []
    };

    this.getData = this.getData.bind(this);
  }
  
  getData() {
    GetData.getUnit()
    .then(res => {
      this.setState({unit: res});
    });

    GetData.getLesson()
    .then(res => {
      this.setState({lessonInfo: res});
    });
  }

  getChildContext() {
    return {
      unit: this.state.unit,
      lessonInfo: this.state.lessonInfo
    };
  }


  componentDidMount() {
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
  lessonInfo: PropTypes.array
};

export default App;
