import styled from 'styled-components';

import { ResultPanel as component } from './component';

export const ResultPanel = styled(component)`
  max-width: 1140px;
  position: relative;
  height: 100%;
  background: #e6ebed;
  margin: 0 auto;
  > .icon {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    width: 11px;
    height: 110px;
  }
  .next-icon {
    right: 32px;
  }
  .prev-icon {
    left: 32px;
  }
`;
