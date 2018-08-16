import styled from 'styled-components';
import { Unit as component } from './component';

export const Unit = styled(component)`
    width: 100%;
    height: 120px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    border: 1px solid #ccc;
    a {
        text-decoration: none;
        flex: 1;
        border-left: 1px solid #ccc;
    }
`;