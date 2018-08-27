import styled from 'styled-components';
import { Text as component } from './component';

export const Text = styled(component)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.color ? props.color : '#666')};
  font-style: ${(props) => props.italic ? 'italic' : 'normal'};
  font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
`;
