import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;700&display=swap');

    * {
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }

    li{
        list-style-type: none;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;

export const Container = styled.div `
    margin: 0 auto;
    padding: 20px;
    width: 80%;
`;