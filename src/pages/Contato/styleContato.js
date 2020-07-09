import styled from 'styled-components';

export const H1 = styled.h1 `
    margin: 40px 0 20px 0;
    text-align: left;
    font-size: 20px; 
`;

export const Paragraph = styled.p `    
    line-height: 20px;
    font-weight: 300;
    font-size: 20px;
`;

export const Form = styled.form `
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    column-gap: 10px;
`;

export const Label = styled.label ` 
    font-size: 15px;
    margin-top: 10px;
    font-weight: 300;
`;

export const Input = styled.input `
    padding: 10px;
    margin-top: 5px;
    height: 30px;
    width: 250px;
    border-radius: 4px;
    border: 1px solid #ddd;
    &:focus {
        border: 1px solid #0000FF;
        transition: 300ms;
    }
`;

export const Text = styled.textarea ` 
    height: 100px;
    width: 350px;
    margin-top: 5px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    &:focus {
        border: 1px solid #0000FF;
        transition: 300ms;
    }
`;

export const Button = styled.button `
    font-weight: 700;
    color: #fff;
    width: 80px;
    margin-top: 10px;
    padding: 5px;
    border: none;
    background: #0000FF;
    &:hover {
        background: #1C86EE;
        transition: 300ms;
    }
`;