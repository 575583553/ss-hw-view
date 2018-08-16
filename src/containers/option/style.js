import styled from 'styled-components';

import { Option as component } from './component';

const FontSize = 20;

export const Option  = styled(component)`
    width:  ${150/FontSize}rem;
    margin-right: 10px;

    .option {
        width: 100%;
        border: 2px solid #76CD48; 
    }
    .option-result {
        font-size: 14px;
        height: 20px;
        line-height: 20px;
    }
    .inCorrect {
        border-color: #F15E38;
    }
`