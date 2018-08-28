import styled from 'styled-components';

import { Arrow as component } from './component';

export const Arrow = styled(component)`
  width: 100%;
  height: 100%;
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    width: 11px;
    height: 3px;
    background: #d2d2d2;
    transform: rotate(45deg);
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 3px;
    width: 11px;
    height: 3px;
    background: #d2d2d2;
    transform: rotate(-45deg);
  }
`;
