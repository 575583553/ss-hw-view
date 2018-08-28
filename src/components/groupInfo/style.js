import styled from 'styled-components';

import { GroupInfo as component } from './component';

export const GroupInfo = styled(component)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  .result-container {
    font-size: 12px;
  }
  .progress-bar {
    width: 100%;
    height: 7px;
    padding: 10px 0;
  }
  .result-info {
    > span {
      font-size: 14px;
      margin-right: 8px;
    }
  }
  .arrow {
    position: absolute;
    right: 8px;
    width: 11px;
    height: 15px;
  }
`;
