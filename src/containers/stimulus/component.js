import React, { Component } from 'react';

import { Audio } from '../../components/audio';
import { Image } from '../../components/image';
import { Title } from '../../components/title';

export class Stimulus extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {image, audio , title} = this.props.data;
        return(
            <div className={this.props.className}>
                {title && 
                    <div className="title-container">
                            <Title text={title}></Title>
                    </div>
                }
                <div className="stimulus-bottom"> 
                    {image && 
                        <div className="image-container">
                            <Image url={image}></Image>
                        </div>
                    }
                    {audio && 
                        <div className="audio-container">
                            <Audio src={audio}></Audio>
                        </div>
                    }
                </div>
            </div>
        )
    }
}