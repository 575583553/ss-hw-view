import React, { Component } from 'react';

import { Stimulus } from '../stimulus';

export class Option extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const inCorrect = this.props.data.isAnswer === 'false' ? 'inCorrect' : '';
        return(
            <div className={this.props.className}>
                <div className={`option ${inCorrect}`}>
                    <Stimulus data={this.props.data}></Stimulus>
                </div>
                {/* <div className="option-result">
                    1 student correct
                </div> */}
            </div>
        )
    }
}