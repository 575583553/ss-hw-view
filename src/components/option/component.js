import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Stimulus } from '../stimulus';

export class Option extends Component {
  render() {
    const inCorrect = this.props.data.isAnswer === 'false' ? 'inCorrect' : '';
    return (
      <div className={this.props.className}>
        <div className={`option ${inCorrect}`}>
          <Stimulus data={this.props.data} />
        </div>
        {/* <div className="option-result">
                    1 student correct
                </div> */}
      </div>
    );
  }
}

Option.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object
};
