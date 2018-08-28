import styled from 'styled-components';

import { ProgressBar as component } from './component';

export const ProgressBar = styled(component)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #d2d2d2;
  overflow: hidden;
  position: relative;
  .progress-bar {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #00ae9e;
    left: -100%;
    top: 0;
    transform: translateX(0);
    transition: transform 0.4s;
    &.in {
      transform: translateX(${(props) => props.progress * 100}%);
    }
  }
`;
