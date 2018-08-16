import React, { Component } from 'react';

import { TopBar } from '../topBar';
import { SideBar } from '../sideBar';
import { Info } from '../info';

export class LessonPanel extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <div className="topBar-container">
                    <TopBar></TopBar>
                </div>
                <div className="main-container">
                    <div className="sideBar-container">
                        <SideBar></SideBar>
                    </div>
                    <div className="info-container">
                        <Info></Info>
                    </div>
                </div>
            </div>
        )
    }
}