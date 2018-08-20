import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Text } from '../../components';

export class Unit extends Component {
  constructor(props/* , context */) {
    super(props);
  }
  render() {
    const unit = this.context.unit;
    return (
      <div className={this.props.className}>
        {unit.length > 0 && unit.map((item) => {
          return (
            <Link to={{ pathname: '/lesson', state: item.Key }} key={item.Sequence}>
              <Text text={item.Name} />
            </Link>
          );
        })}
      </div>
    );
  }
}

Unit.contextTypes = {
  unit: PropTypes.array
};

Unit.propTypes = {
  className: PropTypes.string
};
