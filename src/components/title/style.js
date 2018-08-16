import styled from 'styled-components';
import { Title as component } from './component';

export const Title = styled(component)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.color ? props.color : '#666'};
`