import styled from 'styled-components';

import { Tab as component } from './component';

export const Tab = styled(component)`
  width: 100%;
  .studentInfo {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
  .tab {
    width: 328px;
    margin: 44px auto 36px;
    line-height: 36px;
    border: 1px solid #6d8693;
    border-radius: 8px;
    display: flex;
    background: #e6ebed;
    color: #637e8c;
    font-size: 18px;
  }
  .task {
    flex: 1;
    text-align: center;
  }
  .answers {
    flex: 1;
    text-align: center;
  }
  .active {
    background: #6d8693;
    color: #fff;
  }
`;
