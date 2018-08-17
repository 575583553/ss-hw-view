import React, { Component } from 'react';

import Http from '../../servers/http';
import { Answer } from '../answer';

export class ResultPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      num: 0,
    };
  }

  componentWillMount() {
    Http.get({ url: 'http://10.128.36.152:8080/result' }).then((result) => {
      this.setState({ data: result.data });
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="title-Container">Title</div>
        <div className="main-container">
          <div className="student-container">student Info</div>
          <div className="answer-container">
            {this.state.data.length > 0 && (
              <Answer data={this.state.data[0].answer} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
