import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Panel } from '../../components';

export class Info extends Component {
  render() {
    const { data, studentId, lessonId, click, currentUnitId, unitKey } = this.props;

    return (
      <div className={this.props.className}>
        {data.map(
          (item) =>
            item.ParentNodeKey === currentUnitId && (
              <Panel
                data={item}
                key={item.Sequence}
                studentId={studentId}
                lessonId={lessonId}
                unitKey={unitKey}
                click={click}
              />
            ),
        )}
      </div>
    );
  }
}

Info.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  studentId: PropTypes.string,
  lessonId: PropTypes.string,
  unitKey: PropTypes.string,
  currentUnitId: PropTypes.string,
  click: PropTypes.func,
};
