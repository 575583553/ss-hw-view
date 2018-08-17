import styled from 'styled-components';

import { Audio as component } from './component';
const audioOn = require('../../assets/audioPlay.svg');
const audioPause = require('../../assets/audioPause.svg');

export const Audio = styled(component)`
  width: 100px;
  height: 100px;
  .audio-main {
    width: 50px;
    height: 50px;
    background: url(${audioOn}) no-repeat center/100%;
  }
  .audioPause {
    background-image: url(${audioPause});
  }
`;
