import styled from 'styled-components';

import { Page as component } from './component';

export const Page = styled(component)`
  width: 100%;
  height: 100%;
  > .title-container {
    width: 100%;
    height: 110px;
    background: #f8f9fc;
  }
  .answer-container {
    width: 1024px;
    margin: 0 auto;
  }
`;
