import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Text } from '../../components';

export class Unit extends Component {
  render() {
    const {unit, changeUnitId} = this.context;

    return (
      <div className={this.props.className}>
        {unit.length > 0 && unit.map((item) => {
          return (
            <Link
              onClick={changeUnitId.bind(this, item.Key)}
              to={{
                pathname: '/lesson',
                state: {
                  key: item.Key,
                  name: item.Name
                }}}
              key={item.Sequence}>
              <Text text={item.Name}/>
            </Link>
          );
        })}
      </div>
    );
  }
}

Unit.contextTypes = {
  unit: PropTypes.array,
  changeUnitId: PropTypes.func
};

Unit.propTypes = {
  className: PropTypes.string
};
