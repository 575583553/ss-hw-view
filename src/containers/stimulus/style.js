import styled from 'styled-components';

import { Stimulus as component } from './component';

export const Stimulus = styled(component)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    .title-container {
        height: ${props => props.data.audio || props.data.image ? '30%' : '100%'};
        font-size: ${props => props.size ? props.size : '12px'};
    }
    .stimulus-bottom {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
    }
    .image-container {
        width: 100%;
    }
    .audio-container {
        width: 50px;
        height: 50px;
        position: ${props => props.data.image ? 'absolute' : 'relative'};
        bottom: 0;
        right: 0;
    }
`