import styled from 'styled-components';

import { Answer as component } from './component';

export const Answer = styled(component)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 70px;
  .stimulus-container {
    width: 30%;
  }
  .question-container {
    width: 70%;
    padding: 0 20px;
  }
  .option-container {
    margin-right: 20px;
  }
  .stimulus {
    width: 100%;
  }
  .info-container {
    display: flex;
    width: 120px;
  }
  .lab {
    font-size: 14px;
    line-height: 28px;
    color: #666;
  }
`;
