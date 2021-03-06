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
    background: #f8f9fc;
  }
  .main-container {
    display: flex;
    height: calc(100% - 100px);
  }
  .sideBar-container {
    width: 18%;
    background: #3a4e5f;
  }
  .info-container {
    flex: 1;
    padding: 28px 45px;
    /* background: #F0F7F9; */
  }
`;
