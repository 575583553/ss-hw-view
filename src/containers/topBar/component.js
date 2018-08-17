import React, { Component } from 'react';

import { Title } from '../../components/title';

export class TopBar extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <div className="unit-name-container">
                    <Title text='Unit 1'></Title>
                </div>
                <div className="lesson-name-container">
                    {
                        this.props.data.map(item => {
                            return <Title key={item.Sequence} text={`Lesson ${+item.Sequence+1}`} color='#607F8D'></Title>
                        })
                    }
                </div>
            </div>
        )
    }
}