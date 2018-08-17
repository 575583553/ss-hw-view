import React, { Component } from 'react';

import { Option } from '../option';

export class Question extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render() {
    const { title, option, studentAnswer } = this.props.data;

    return (
      <div className={this.props.className}>
        {title && <div className="question-title">{title}</div>}
        <div className="main-container">
          <div className="options-container">
            {option.map((item, index) => {
              return <Option key={index} data={item} info="correct answer" />;
            })}

            <div className="result-info">correct answers</div>
          </div>
          <div className="student-answer">
            {studentAnswer.map((item) => {
              return item.optionSelection.map((option, index) => {
                return (
                  <Option
                    key={index}
                    data={option}
                    info={
                      option.isAnswer === 'trueinCorrect'
                        ? 'correct response'
                        : 'incorrect response'
                    }
                  />
                );
              });
            })}
            <div className="result-info">student answers</div>
          </div>
        </div>
      </div>
    );
  }
}
