import styled from 'styled-components';

import { StudentInfo as component } from './component';

export const StudentInfo = styled(component)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .student-wrapper {
        display: flex;
        width: 100%;
        height: 30px;
        padding-right: 12px;
    }
    .img-container {
        width: 30px;
        height: 30px;
        margin: 0 10px 0 15px;
    }
    .name-container {
        font-size: 14px;
    }
`;
