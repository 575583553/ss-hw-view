import styled from 'styled-components';

import { Panel as component } from './component';

export const Panel = styled(component)`
  width: 100%;
  margin-bottom: 25px;
  min-height: 100px;
  box-shadow: 0px 2px 4px 0px rgba(57, 77, 95, 0.3);
  background: rgba(230, 235, 237, 0.3);
  > .title-container {
    background: #e6ebed;
    font-size: 18px;
    color: #9b9b9b;
    line-height: 60px;
    padding-left: 60px;
    border-bottom: 1px solid rgba(90, 127, 141, 0.4);
  }
  .activity-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-x: hidden;
  }
  .activity {
    width: 33%;
    padding-right: 0.5%;
    &:nth-child(3n) {
      padding-right: 0;
    }
  }
`;
