import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav `
    background: #EEE5DE;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;    
`;

export const StyledLink = styled(Link) `
    color: #000;  
    &.active {
        color: #8B8378;
    }
` 

export const Span = styled.span `              
        letter-spacing: -0.05em;
        font-size: 16px;
        &:hover {
            color: #8B8989;
            transition: 100ms;
        }
`;