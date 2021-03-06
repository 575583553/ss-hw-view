import styled from 'styled-components';

import { Activity as component } from './component';

export const Activity = styled(component)`
  width: 100%;
  color: #5b5b5b;
  margin-bottom: 20px;
  > .title-container {
    background: #fff;
    height: 50px;
    line-height: 55px;
    font-size: 14px;
    text-align: center;
  }
  .question {
    display: block;
    height: ${(props) => (props.studentId === '-1' ? '80px' : '48px')};
    background: #f8f9fc;
    padding-left: 24px;
    border-top: 5px solid #fff;
    box-shadow: inset 0 1px 0 0 rgba(90, 127, 141, 0.4),
      inset 0 -1px 0 0 rgba(90, 127, 141, 0.4);
    font-size: 14px;
  }
`;
