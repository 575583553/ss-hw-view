import styled from 'styled-components';

import { StudentInfo as component } from './component';

export const StudentInfo = styled(component)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  }
  .question-name {
    span {
      margin-right: 20px;
    }
  }
  .result-container {
    >span{
      font-size: 12px;
      color: #F5A623;
    }
  }
  .arrow {
    position: absolute;
    right: 8px;
    width: 11px;
    height: 15px;
  }
  span.correct {
    color: #38AF9E;
  }
`;
