import styled from 'styled-components';

import { Option as component } from './component';

export const Option = styled(component)`
  width: 100%;
  margin-right: 10px;
  border: 2px solid #76cd48;
  .inCorrect {
    border-color: #f15e38;
  }
`;
