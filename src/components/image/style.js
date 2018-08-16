import styled from 'styled-components';

import { Image as component} from './component';

export const Image = styled(component)`
    width: 100%;
    padding-bottom: 100%;
    position: relative;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
`
