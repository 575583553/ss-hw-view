import styled from 'styled-components';

import { SideBar as component } from './component';

export const SideBar = styled(component)`
    width: 100%;
    height: 100%;
    .group-name-container {
        width: 100%;
        height: 70px;
    }
    .student-container {
        width: 100%;
        >div {
            width: 100%;
            height: 70px;
            background: #00ae9e;
        }
    }
`;