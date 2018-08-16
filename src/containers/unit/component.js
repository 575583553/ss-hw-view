import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Title } from '../../components/title';
import { timingSafeEqual } from 'crypto';

export class Unit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: [
                {
                    name: 'unit 1',
                    key: '123'
                },
                {
                    name: 'unit 2',
                    key: '123'
                },
                {
                    name: 'unit 3',
                    key: '123'
                },
                {
                    name: 'unit 4',
                    key: '123'
                }
            ]
        }
    }
    render() {
        return(
            <div className={this.props.className}>
                {
                    this.state.units.map((item, index) => {
                        return <Link to={{pathname: '/lesson', state: item.key}} key={index}>
                        <Title text={item.name}></Title>
                        </Link>
                    })
                }
            </div>
        )
    }
}