import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Text } from '../../components';

export class TopBar extends Component {
  render() {
    const {data, state} = this.props;
    
    return (
      <div className={this.props.className}>
        <div className="unit-name-container">
          <Link to='/unit'><Text text={state.name} /></Link>
        </div>
        <div className="lesson-name-container">
          {data.map((item) => {
            if(item.ParentNodeKey === state.key) {
              return (
                <Text
                  key={item.Sequence}
                  text={`Lesson ${+item.Sequence + 1}`}
                  color="#607F8D"
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  state: PropTypes.object
};
