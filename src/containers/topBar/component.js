import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../components';

export class TopBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="unit-name-container">
          <Text text="Unit 1" />
        </div>
        <div className="lesson-name-container">
          {this.props.data.map((item) => {
            return (
              <Text
                key={item.Sequence}
                text={`Lesson ${+item.Sequence + 1}`}
                color="#607F8D"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array
};
