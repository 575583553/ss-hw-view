import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Unit } from './containers/unit';
import { LessonPanel } from './containers/lessonPanel';
import { ResultPanel } from './containers/resultPanel';

class App extends Component {
  checkToken = (component) => {
    return component;
  };
  componentWillMount() {
    console.log('willMount');
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Unit} />
          <Route path="/lesson" component={LessonPanel} />>
          <Route path="/result" component={ResultPanel} />
          {/* when router error jump to home page*/}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
