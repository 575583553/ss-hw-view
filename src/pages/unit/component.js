import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Text } from '../../components';
import { GetData } from '../../services';

export class Unit extends Component {
  constructor() {
    super();

    this.state = {
      unit: [],
    };
  }

  async componentDidMount() {
    const unit = await GetData.getUnit();
    this.setState({ unit: unit });
  }

  render() {
    const { unit } = this.state;

    return (
      <div className={this.props.className}>
        {unit.length > 0 &&
          unit.map((item) => {
            return (
              <Link
                to={{
                  pathname: '/lesson',
                  state: {
                    key: item.Key,
                    name: item.Name,
                  },
                }}
                key={item.Sequence}
              >
                <Text text={item.Name} />
              </Link>
            );
          })}
      </div>
    );
  }
}

Unit.propTypes = {
  className: PropTypes.string,
};
