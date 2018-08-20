import styled from 'styled-components';

import { TopBar as component } from './component';

export const TopBar = styled(component)`
  width: 100%;
  height: 100%;
  display: flex;
  .unit-name-container {
    width: 18%;
    height: 100%;
    background: #fff;
  }
  .lesson-name-container {
    flex: 1;
    display: flex;
    box-shadow: 0px 2px 4px 0px rgba(57, 77, 95, 0.3);
    > div {
      flex: 1;
      border-right: 1px solid #eee;
    }
  }
`;
