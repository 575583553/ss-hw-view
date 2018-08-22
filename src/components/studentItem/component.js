import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Image, Text} from '../index';

export class StudentItem extends Component {
    render() {
        const {AvatarUrl, Name} = this.props.data;

        return(
            <div className={this.props.className}>
                <div className="student-wrapper">
                    <div className="img-container">
                        <Image url={AvatarUrl}></Image>
                    </div>
                    <div className="name-container">
                        <Text text={Name} color='#fff'></Text>
                    </div>
                </div>
            </div>
        );
    }
}

StudentItem.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object
};
