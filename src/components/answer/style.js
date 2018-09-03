import styled from 'styled-components';

import { Answer as component } from './component';

export const Answer = styled(component)`
  display: flex;
  background: #f0f7f9;
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
    margin-right: 15px;
  }
  .lab {
    font-size: 14px;
    color: #666;
  }
`;
