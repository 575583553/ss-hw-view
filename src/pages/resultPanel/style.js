import styled from 'styled-components';

import { ResultPanel as component } from './component';

export const ResultPanel = styled(component)`
  height: 100%;
  max-width: 1140px;
  background: #e6ebed;
  margin: 0 auto;
  .title-Container {
    width: 100%;
    height: 110px;
    border-bottom: 1px solid #ccc;
  }
  .student-container {
    height: 200px;
    border-bottom: 1px solid #ccc;
  }
`;
