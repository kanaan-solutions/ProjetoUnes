import styled from 'styled-components';

export const Processo = styled.img `
    width: 100%;
    height: 400px;
    margin-top: 15px;
    display:flex;
    justify-content:center
`;

export const H1 = styled.h1 `
    font-weight: 300;
    margin-top: 35px;

    strong {
        font-weight: bold;
    }
`;

export const Main = styled.div `
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 15px;
    margin-top: 35px;
`;

export const Section = styled.div ` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F5F5F5;
    border-radius: 8px;
    padding: 35px;

    div {
        background: #FFB90F;
        padding: 20px;
        border-radius: 8px;
    }

    p {
        margin-top: 15px;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
    }

    button {
        margin-top: 30px;
        width: 300px;
        height: 70px;
        border-radius: 4px;
        border: none;
        background: #00CD66;
        &:hover {
            background: #00FF7F;
            transition: 300ms;
        }
    }
`;

export const Footer = styled.div `
    background: #F2F2F2;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    padding: 25px;   
`;

export const FooterDiv = styled.div `
        margin-left: 300px;

        p {
            font-weight: bold;
            font-size: 35px;
        }

        h1 {
            font-size: 75px;
        }
`;

export const DivFooter = styled.div `
    p {
        background: #F2F2F2;
        font-size: 25px;
        border: 2px solid #5858FA;
        padding: 10px;
        border-radius: 8px;
        text-align: center;
    }

    button {
        margin-top: 40px;
        height: 50px;
        width: 200px;
        margin-left: 165px;
        color: white;
        font-size: 20px;
        font-weight: bold;
        background: #0B0B61;
        border-radius: 4px;
        border: none;
        &:hover {
            background: #0431B4;
            transition: 300ms;
        }
    }
`