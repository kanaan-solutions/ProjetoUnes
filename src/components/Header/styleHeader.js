import styled from 'styled-components';

export const Nav = styled.nav `
    background: #D3D3D3;
    height: 100px;
    display:flex;
    align-items:center;
    justify-content: space-around
`;

export const Form = styled.form `
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: -0.5px;

    input {
        padding:5px;
        margin: 5px;
        border: 1px solid #ddd;
        &:focus {
            border: 1px solid #0000FF;
            transition: 300ms;
        }
    }

    button {
        font-weight: 700;
        color: #fff;
        width: 80px;
        margin: 5px;
        padding: 5px;
        border: none;
        background: #0000FF;
        &:hover {
            background: #1C86EE;
            transition: 300ms;
        }
    }
`;