import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Stimulus } from '../stimulus';

export class Option extends Component {
  render() {
    const { data, index, options, correct } = this.props;
    const showOption = data.filter((item) => {
      return +item.test === index;
    });

    return (
      <div className={`${this.props.className}${correct ? '' : ' inCorrect'}`}>
        {showOption.map((item, idx) => {
          return <Stimulus data={options[item.option]} key={idx} />;
        })}
      </div>
    );
  }
}

Option.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  index: PropTypes.number,
  options: PropTypes.array,
  correct: PropTypes.bool,
};
