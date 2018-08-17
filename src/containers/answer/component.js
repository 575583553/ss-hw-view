import React, { Component } from 'react';

import { Stimulus } from '../stimulus';
import { Question } from '../question';

export class Answer extends Component {
  // constructor(props) {
  //     super(props);
  // }

  render() {
    const { stimulus, options } = this.props.data;
    return (
      <div className={this.props.className}>
        <div className="stimulus-container">
          <Stimulus data={stimulus} size="16px" />
        </div>
        <div className="question-container">
          <div className="question-info">{this.props.data.title}</div>
          {options.map((option, index) => {
            return <Question key={index} data={option} />;
          })}
        </div>
      </div>
    );
  }
}
