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
`;