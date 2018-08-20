import styled from 'styled-components';

import { LessonPanel as component } from './component';

export const LessonPanel = styled(component)`
    width: 100%;
    height: 100%;
    .lesson-contianer {
        width: 100%;
        height: 100%;
    }
    .topBar-container {
        width: 100%;
        height: 100px;
        background: #F8F9FC;
    }
    .main-container {
        display: flex;
        height: calc(100% - 100px);
    }
    .sideBar-container {
        width: 18%;
        background: #3A4E5F;
    }
    .info-container {
        flex; 1;
    }
`;
