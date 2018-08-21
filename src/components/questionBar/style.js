import styled from 'styled-components';

import { QuestionBar as component } from './component';

export const QuestionBar = styled(component)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  .question-name {
    span {
      margin-right: 20px;
    }
  }
  .arrow {
    position: absolute;
    right: 8px;
    width: 11px;
    height: 15px;
  }
`;
