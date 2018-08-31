import styled from 'styled-components';

import { Arrow as component } from './component';

export const Arrow = styled(component)`
  width: 11px;
  height: 15px;
  position: relative;
  transform: ${(props) =>
    props.direction === 'left' ? 'rotateY(180deg)' : 'rotateY(0)'};
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
