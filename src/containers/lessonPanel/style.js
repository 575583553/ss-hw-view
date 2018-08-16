import styled from 'styled-components';

import { LessonPanel as component } from './component';

export const LessonPanel = styled(component)`
    width: 100%;
    height: 100%;
    .topBar-container {
        width: 100%;
        height: 100px;
        background: #f99;
    }
    .main-container {
        display: flex;
        height: calc(100% - 100px);
    }
    .sideBar-container {
        width: 150px;
        background: #f9f;
    }
    .info-container {
        flex; 1;
    }
`;