import styled from 'styled-components';

import { Question as component } from './component';

const FontSize = 20;

export const Question = styled(component)`
  width: 100%;
  .question-title {
    height: ${40 / FontSize}rem;
    line-height: ${40 / FontSize}rem;
  }
  .main-container {
    background: #fff;
    padding: 10px 10px 10px 20px;
    margin-bottom: 20px;
  }
  .options-container {
    position: relative;
    display: flex;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .result-info {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    font-size: 16px;
    color: green;
  }
  .student-answer {
    display: flex;
    position: relative;
  }
`;
