import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { QuestionBar } from '../questionBar';

export class Activity extends Component {
  render() {
    const {data, idx} = this.props;
    return(
      <div className={this.props.className}>
        <div className='title-container'>
          ACTIVITY {idx + 1}
        </div>
        <div className="questions-container">
        {
          data.questions.map((item, index) => {
            return <div className="question" key={index}>
              <QuestionBar data={item} idx={index}/>
            </div>;
          })
        }
        </div>
      </div>
    );
  }
}

Activity.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  idx: PropTypes.number
};
