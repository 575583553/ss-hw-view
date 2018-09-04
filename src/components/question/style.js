import styled from 'styled-components';

import { Question as component } from './component';

export const Question = styled(component)`
  width: 100%;
  margin-right: 20px;
  .info-item {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .correct-answer {
    width: 100%;
    border: 2px solid #76cd48;
  }
  .student-answer {
    width: 80%;
    margin-top: 20px;
  }
`;
