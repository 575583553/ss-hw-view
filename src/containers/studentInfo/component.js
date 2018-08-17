import React, { Component } from 'react';

import { Image } from '../../components/image';
import { Title } from '../../components/title';

export class StudentInfo extends Component {
    render() {
        const {AvatarUrl, Name} = this.props.data;
        return(
            <div className={this.props.className}>
                <div className="student-wrapper">
                    <div className="img-container">
                        <Image url={AvatarUrl}></Image>
                    </div>
                    <div className="name-container">
                        <Title text={Name} color='#fff'></Title>
                    </div>
                </div>
            </div>
        )
    }
}